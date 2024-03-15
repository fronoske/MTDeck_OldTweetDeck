import { TouchManager } from "./touch";

// MediaPanelCustomizerクラス … メディア表示時のカスタマイズを司るクラス
export class MediaPanelCustomizer {
  $mediaPanel = document.querySelector<HTMLDivElement>("div#open-modal")!;
  bodyClassList = document.body.classList;

  public doCustomize(): void {
    const configEnableSwipeMedia = this.bodyClassList.contains("mtdeck-enable-swipe-media");
    const configEnableSwipeDownToCloseMedia = this.bodyClassList.contains("mtdeck-enable-swipe-down-to-close-media");
    const cconfigEnableTapToShowFullImage = this.bodyClassList.contains("mtdeck-enable-tap-to-show-full-image");
    if (configEnableSwipeMedia) {
      this.enableSwipeNavMedia();
    }
    if (configEnableSwipeDownToCloseMedia) {
      this.enableSwipeDownToCloseMedia();
    }
    if (cconfigEnableTapToShowFullImage) {
      this.enableShowFullImage();
    }
  }

  private enableSwipeNavMedia(): void {
    const touchManager = new TouchManager(this.$mediaPanel);
    touchManager.onSwipeX = (startX, direction) => {
      // console.log(direction);
      switch (direction) {
        case "left":
          document.querySelector<HTMLAnchorElement>("a.js-media-gallery-next")?.click();
          break;
        case "right":
          document.querySelector<HTMLAnchorElement>("a.js-media-gallery-prev")?.click();
          break;
      }
    };
  }
  private enableSwipeDownToCloseMedia(): void {
    const touchManager = new TouchManager(this.$mediaPanel);
    touchManager.onSwipeY = (startY, direction) => {
      console.log(direction);
      switch (direction) {
        /*
        case "up":
          const imgLink = document.querySelector<HTMLImageElement>("img.media-img")?.parentElement;
          this.resizeImageOnTap(imgLink as HTMLAnchorElement);
          break;
        */
        case "down":
          document.querySelector<HTMLAnchorElement>("a.mdl-dismiss")?.click();
          break;
      }
    };
  }

  private enableShowFullImage(): void {
    const onNewMediaGenerated = (mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        const mediaTableIsRemoved = Array.from(mutation.removedNodes).some(
          (node) => node.nodeType == Node.ELEMENT_NODE && (node as HTMLElement).classList.contains("js-mediatable")
        );
        if (mediaTableIsRemoved) {
          document.querySelectorAll<HTMLDivElement>("div.full-media-box").forEach((fmb) => fmb.remove());
        }

        mutation.addedNodes.forEach((node) => {
          if (node.nodeType != Node.ELEMENT_NODE || !(node as HTMLElement).classList.contains("js-media-preview-container")) {
            return;
          }
          // console.log("Added Node: " + (node as HTMLElement)?.outerHTML);
          const mediaItems = (node as HTMLElement).querySelectorAll<HTMLAnchorElement>("a.js-media-image-link");
          if (mediaItems) {
            mediaItems.forEach((item) => {
              item.addEventListener("click", (e) => {
                this.resizeImageOnTap(e.currentTarget as HTMLElement);
              });
            });
          }
        });
      }
    };
    const config = { childList: true, attributes: false, characterData: false, subtree: true };
    new MutationObserver(onNewMediaGenerated).observe(this.$mediaPanel, config);
  }

  // フル画像を表示するためのボックスを用意し、そこに img src を流し込む
  // 閉じる仕組みも用意する。閉じたらボックスは廃棄する
  private resizeImageOnTap(item: HTMLElement): void {
    // 画像タップで original tweet に飛ぶのを抑止
    item.removeAttribute("href");
    // フル画像の要素を生成する
    const $normalImage = item.querySelector<HTMLImageElement>("img.media-img");
    const normalImageSource = $normalImage?.getAttribute("src")!;
    const normalImageWidth = Number($normalImage?.getAttribute("data-maxwidth"));
    const normalImageHeight = Number($normalImage?.getAttribute("data-maxheight"));
    const imageWhRatio = normalImageHeight / normalImageWidth;
    const screenWhRatio = screen.availHeight / screen.availWidth;
    const landOrPort = imageWhRatio > screenWhRatio ? "port" : "land";

    const $fullImage = document.createElement("img");
    $fullImage.setAttribute("src", normalImageSource);
    $fullImage.setAttribute("class", `${landOrPort}-size-1`);
    // フル画像を貼り付けるオーバーレイ要素を生成する
    const $fullMediaBox = document.createElement("div");
    $fullMediaBox.setAttribute("class", "full-media-box");
    $fullMediaBox.appendChild($fullImage);
    this.$mediaPanel.appendChild($fullMediaBox);

    // タップイベントのリスナ
    $fullMediaBox.addEventListener("click", (e) => {
      e.stopPropagation();
      const maxSizeLevel = 3;
      const $fullImage = document.querySelector<HTMLImageElement>("div.full-media-box > img");
      if ($fullImage === null) {
        return;
      }
      // 今がフルサイズなら閉じる（メディアボックスを廃棄）
      if ($fullImage.classList.contains(`${landOrPort}-size-${maxSizeLevel}`)) {
        $fullImage.parentElement?.remove();
      } else {
        // そうでなければサイズを大きくする
        const found = $fullImage.className.match(/size-(\d)/);
        if (found) {
          const sizeClassName = `${landOrPort}-${found[0]}`;
          const sizeLevel = Number(found[1]);
          $fullImage.classList.remove(sizeClassName);
          $fullImage.classList.add(`${landOrPort}-size-${sizeLevel + 1}`);
        }
      }
    });
    // 下に伝播させない
    $fullMediaBox.addEventListener("touchstart", (e) => {
      e.stopPropagation();
    });
    $fullMediaBox.addEventListener("touchend", (e) => {
      e.stopPropagation();
    });
    $fullMediaBox.addEventListener("touchmove", (e) => {
      e.stopPropagation();
    });
  }
}
