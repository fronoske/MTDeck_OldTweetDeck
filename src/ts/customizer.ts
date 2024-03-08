import { TouchManager } from "./touch";
import { insertStyle } from "./utils";
import { Deck } from "./deck";

// AppContainerCustomizerクラス … ツイート表示時のカスタマイズを司るクラス
export class AppContainerCustomizer {
  $appContainer: HTMLDivElement = document.querySelector<HTMLDivElement>("div.app-columns-container")!;
  bodyClassList = document.body.classList;

  public doCustomize(mtd: Deck): void {
    const configShowAbsoluteTime = this.bodyClassList.contains("mtdeck-show-absolute-time");
    const configShowExpander = this.bodyClassList.contains("mtdeck-show-expander");
    const configEnableSwipeCol = this.bodyClassList.contains("mtdeck-enable-swipe-col");
    const configShowInitialInColumnTab = this.bodyClassList.contains("mtdeck-show-initial-in-col-tab");
    const configDisalbePinchZoom = this.bodyClassList.contains("mtdeck-disalbe-pinch-zoom");

    // Enable Swipe Navigation in Columns
    if (configEnableSwipeCol) {
      this.enableSwipeNavCol(mtd);
    }

    // Observe new post
    const onNewPostGenerated = () => {
      if (configShowExpander) new TweetExpander().addExpandTweetButton();
      if (configShowAbsoluteTime) new AbsoluteTimeFormatter().updateTweetTimestamps();
    };
    const config = { childList: true, attributes: false, characterData: false, subtree: true };
    new MutationObserver(onNewPostGenerated).observe(this.$appContainer, config);

    // カラムタブにリスト名の頭文字を表示する
    if (configShowInitialInColumnTab) {
      this.showInitialInColumnTab();
    }
    // ピンチ操作を無効にする
    if (configDisalbePinchZoom) {
      const touchHandler = (event: any) => {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      };
      document.addEventListener("touchstart", touchHandler, {
        passive: false,
      });
    }
  }

  private showInitialInColumnTab(): void {
    const $navItems = document.querySelectorAll<HTMLAnchorElement>("li.js-column-nav-menu-item");
    const initialStyle = "position: absolute; left: 63%; bottom: 5%; font-size: medium; font-weight: bold;";
    $navItems.forEach(($navItem) => {
      const $icon = $navItem.querySelector("a.js-header-action > div.obj-left > i");
      if ($icon?.classList.contains("icon-list")) {
        const listName: string = $navItem.querySelector("span.column-heading")?.textContent!;
        if (listName === null || listName === "") return;
        const $listNameInitial = document.createElement("span");
        $listNameInitial.textContent = listName[0];
        $listNameInitial.setAttribute("style", initialStyle);
        $navItem.appendChild($listNameInitial);
      } else if ($icon?.classList.contains("icon-user")) {
        const userName: string = $navItem.querySelector("span.txt-mute")?.textContent!;
        if (userName === null || userName === "") return;
        const $userNameInitial = document.createElement("span");
        $userNameInitial.textContent = userName[1];
        $userNameInitial.setAttribute("style", initialStyle);
        $navItem.appendChild($userNameInitial);
      }
    });
  }

  private enableSwipeNavCol(mtd: Deck): void {
    // オリジナルにあるカラムボタンのハイライトの挙動を打ち消す
    insertStyle(
      `a.column-nav-link:hover {
      color: inherit;
    }
    a.is-selected.column-nav-link:hover {
      color: white;
    }`
    );
    // カラムのボタンのタップでハイライト
    const navButtons = document.querySelectorAll<HTMLAnchorElement>("a.column-nav-link");
    navButtons.forEach((nav) => {
      nav.addEventListener("click", (e) => {
        const navButtons = document.querySelectorAll<HTMLAnchorElement>("a.column-nav-link");
        navButtons.forEach((nav) => {
          if (nav === e.currentTarget) {
            nav.classList.add("is-selected");
          } else {
            nav.classList.remove("is-selected");
          }
        });
      });
    });
    // スワイプでカラムボタンのタップをエミュレートする
    const touchManager = new TouchManager(this.$appContainer);
    touchManager.onSwipeX = (startX, direction) => {
      mtd.update();
      const navButtons = document.querySelectorAll<HTMLAnchorElement>("a.column-nav-link");
      let targetColIndex = direction == "left" ? mtd.columnIndex + 1 : mtd.columnIndex - 1;
      // console.log(`current=${mtd.columnIndex} target=${targetColumnIndex} result=${(navButtons.length + targetColumnIndex) % navButtons.length}`);
      targetColIndex = Math.min(navButtons.length - 1, Math.max(0, targetColIndex));
      navButtons[targetColIndex].click();
    };
  }
}

class TweetExpander {
  public addExpandTweetButton(): void {
    const expanderPhrase = "(Expand tweet)";
    const $articles = document.querySelectorAll("article.js-stream-item");
    $articles.forEach(($article) => {
      const $tweetText = $article.querySelector(".js-tweet-text");
      const statusUrl = $article.querySelector("span.tweet-action[href]")?.getAttribute("href");
      if ($tweetText !== null && statusUrl !== null) {
        // Expand Tweet を出す条件
        // すでにExpand Tweet がなく、リンクを除くツイート本文が「…」で終わるが「……」では終わらない
        const containsExpandTweet = $tweetText.lastElementChild?.textContent == expanderPhrase;
        const $lastTextNode = Array.from($tweetText.childNodes)
          .reverse()
          .find((node) => node.nodeType == Node.TEXT_NODE);
        const lastText = $lastTextNode?.textContent ?? "";
        if (!containsExpandTweet && lastText.endsWith("…") && !lastText.endsWith("……")) {
          const id = $article.getAttribute("data-tweet-id");
          // OTD が実装している expandTweet() を呼び出す
          const $expandTweet: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
          $expandTweet.setAttribute("class", "expand-tweet");
          $expandTweet.setAttribute("href", "expandTweet(event, '${id}')");
          $expandTweet.textContent = expanderPhrase;
          $tweetText.textContent += "\u{a0}";
          $tweetText.appendChild($expandTweet);
        }
      }
    });
  }
}

class AbsoluteTimeFormatter {
  public updateTweetTimestamps(): void {
    const $tweetTimestamps = document.querySelectorAll<HTMLTimeElement>("time.tweet-timestamp:not([data-msecdeck=done])");
    if ($tweetTimestamps.length) {
      for (const $time of $tweetTimestamps) {
        $time.dataset.msecdeck = "done";
        const $timeContent = $time.firstElementChild;
        if ($timeContent === null || $timeContent.textContent === null) continue;

        const timestampInSeconds = Number(
          $timeContent.getAttribute("href")?.split("/")[5] || $time.dataset.time || $timeContent.textContent?.replace(/(am|pm)\s·/, " $1")
        );
        if (timestampInSeconds != 0) {
          const formattedTime = this.formatTime(this.getDateFromSnowflake(timestampInSeconds));
          if ($timeContent.textContent.length > 6) {
            // オリジナルの日時の文字列が 6文字以上ならカッコ内の相対時刻は不要
            $timeContent.textContent = formattedTime;
          } else {
            const $absoluteTimeSpan1 = document.createElement("span");
            $absoluteTimeSpan1.classList.add(
              "tweet-timestamp",
              "txt-mute",
              "flex-shrink--0",
              "txt-size-variable--12",
              "no-wrap",
              "mtdeck-absolute-time"
            );
            $absoluteTimeSpan1.textContent = `${formattedTime} -`;
            $time.parentElement?.insertBefore($absoluteTimeSpan1, $time);
          }
        }
        // RT なら RT 日時も表示する
        const $article: HTMLElement | null = $time.closest("article[data-key][data-tweet-id");
        if ($article !== null && $article.getAttribute("data-key") != $article.getAttribute("data-tweet-id")) {
          this.showRtTimestamp($article);
        }
      }
    }
  }

  private showRtTimestamp($article: HTMLElement): void {
    const dataKey = $article.getAttribute("data-key");
    const dataTweetId = $article.getAttribute("data-tweet-id");
    if (dataKey && /^[0-9]+$/.test(dataKey) && dataKey != dataTweetId) {
      const rtDate = this.getDateFromSnowflake(Number(dataKey)); // dataKey が RT 本体、dataTweetId が RT 元のポスト
      const $rtArea = $article.querySelector<HTMLDivElement>("div.nbfc");
      if (rtDate && $rtArea && $rtArea.textContent) {
        $rtArea.textContent = $rtArea.textContent.replace(/Retweeted +/, `Retweeted at ${this.formatTime(rtDate)}`);
      }
    }
  }

  private getDateFromSnowflake(timestamp: number): Date {
    const epochMilliseconds: number = Math.floor(timestamp / 4194304) + 1288834974657;
    return new Date(epochMilliseconds);
  }

  private formatTime(time: Date, includeDayOfWeek: boolean = true): string {
    const pad = (num: number, size: number) => num.toString().padStart(size, "0");
    const dayOfWeek = includeDayOfWeek ? `(${["日", "月", "火", "水", "木", "金", "土"][time.getDay()]}) ` : "";
    const yearPart = new Date().getFullYear() != time.getFullYear() ? `${time.getFullYear()}/` : "";
    const datePart = `${time.getMonth() + 1}/${time.getDate()}${dayOfWeek}`;
    const timePart = `${time.getHours()}:${pad(time.getMinutes(), 2)}`;
    const dateString = `${yearPart}${datePart} ${timePart}`;
    return dateString;
  }
}

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
      insertStyle(
        `div.full-media-box {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(100, 100, 100, 0.8);
          z-index: 99999;
          /* 縦方向の中央寄せ */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        /* 画像は横幅を max に */
        img.full-image {
          width: 100%;
          height: auto;
        }
        img.full-image-max {
        }
        `
      );
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
        case "up":
          const imgLink = document.querySelector<HTMLImageElement>("img.media-img")?.parentElement;
          this.showFullImageOnTap(imgLink as HTMLAnchorElement, "full");
          break;
        case "down":
          document.querySelector<HTMLAnchorElement>("a.mdl-dismiss")?.click();
          break;
      }
    };
  }

  //TODO: 画像をほどよくサイズ変更したい
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
                this.showFullImageOnTap(e.currentTarget as HTMLAnchorElement, "normal");
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
  private showFullImageOnTap(item: HTMLAnchorElement, size: string): void {
    // 画像タップで original tweet に飛ぶのを抑止
    item.removeAttribute("href");
    // フル画像の要素を生成する
    const $image = item.querySelector<HTMLImageElement>("img.media-img");
    const imgSrc = $image?.getAttribute("src")!;
    const $fullImage = document.createElement("img");
    $fullImage.setAttribute("src", imgSrc);
    $fullImage.setAttribute("class", size == "full" ? "full-image-max" : "full-image");
    // フル画像を貼り付けるオーバーレイ要素を生成する
    const $fullMediaBox = document.createElement("div");
    $fullMediaBox.setAttribute("class", "full-media-box");
    $fullMediaBox.appendChild($fullImage);
    this.$mediaPanel.appendChild($fullMediaBox);

    // イベントリスナ
    // タップでフル画像のメディアボックスを廃棄
    $fullMediaBox.addEventListener("click", (e) => {
      e.stopPropagation();
      (e.currentTarget as HTMLDivElement)?.remove();
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
