import { ScrollController } from "./scroll";
import { BackController } from "./back";
import { TouchManager } from "./touch";
import { Config } from "./config";
import { Menu } from "./menu";
import { clickAll } from "./utils";
import { AppContainerCustomizer, MediaPanelCustomizer } from "./customizer";

export class Deck {
  private config: Config = new Config();
  private scrollController: ScrollController = new ScrollController();
  private backController: BackController = new BackController();
  public columnIndex: number = 0;
  private $columns: HTMLElement[] = [];
  private $drawerOpenButton: HTMLButtonElement | null = null;

  public ready(): void {
    const initInterval = setInterval(() => {
      this.$drawerOpenButton = document.querySelector<HTMLButtonElement>("button[data-drawer=compose]");
      if (this.$drawerOpenButton) {
        this.config.init();
        this.init();
        this.scrollController.init();
        clearInterval(initInterval);
      }
    }, 100);
  }

  public update() {
    this.$columns = [];
    document.querySelectorAll<HTMLElement>("section.column").forEach(($column) => {
      this.$columns.push($column);
    });
    this.fixColumnState();
    this.updateTweetButton();
  }

  private fixColumnState() {
    this.columnIndex = 0;
    let $nearColumn = this.$columns[0];
    for (let i = 1; i < this.$columns.length; i++) {
      if (this.$columns[i].getBoundingClientRect().left ** 2 < $nearColumn.getBoundingClientRect().left ** 2) {
        $nearColumn = this.$columns[i];
        this.columnIndex = i;
      }
    }
    $nearColumn.scrollIntoView();
  }

  private updateTweetButton() {
    const $tweetButton = document.querySelector<HTMLButtonElement>(".tweet-button");
    setTimeout(() => {
      if (this.$columns[this.columnIndex].classList.contains("js-column-state-detail-view")) {
        $tweetButton!.style.display = "none";
      } else {
        $tweetButton!.style.display = "block";
      }
    }, 200);
  }

  private init(): void {
    document.body.classList.add("mtdeck");
    Menu.close();

    const $appContainer = document.querySelector<HTMLDivElement>("div.app-columns-container")!;

    if (this.config.getBoolean("mtdBackAtMounted")) {
      clickAll(".js-dismiss");
    }
    if (this.config.getBoolean("mtdNoAnimation")) {
      document.body.classList.add("mtdeck-no-animation");
    }
    if (this.config.getBoolean("mtdHideCounts")) {
      document.body.classList.add("mtdeck-hide-counts");
    }
    if (this.config.getBoolean("mtdHideImages")) {
      document.body.classList.add("mtdeck-hide-images");
    }
    // 画像非表示の場合は遅延読み込みしないためelse
    else if (this.config.getBoolean("mtdLazyLoadImages")) {
      document.body.classList.add("mtdeck-lazy-load-image");
      const $openModal = document.querySelector<HTMLElement>("#open-modal")!;
      setLazyLoadObservers([$appContainer, $openModal]);
    }
    if (this.config.getBoolean("mtdMobileStyleFriendly")) {
      document.body.classList.add("mtdeck-mobile");
    }
    if (this.config.getBoolean("mtdShowAbsoluteTime")) {
      document.body.classList.add("mtdeck-show-absolute-time");
    }
    if (this.config.getBoolean("mtdShowExpander")) {
      document.body.classList.add("mtdeck-show-expander");
    }
    if (this.config.getBoolean("mtdEnableSwipeNavMedia")) {
      document.body.classList.add("mtdeck-enable-swipe-media");
    }
    if (this.config.getBoolean("mtdEnableSwipeNavCol")) {
      document.body.classList.add("mtdeck-enable-swipe-col");
    }
    if (this.config.getBoolean("mtdSwipeDownToCloseMedia")) {
      document.body.classList.add("mtdeck-enable-swipe-down-to-close-media");
    }
    if (this.config.getBoolean("mtdTapToShowFullImage")) {
      document.body.classList.add("mtdeck-enable-tap-to-show-full-image");
    }
    if (this.config.getBoolean("mtdShowInitialInColumnTab")) {
      document.body.classList.add("mtdeck-show-initial-in-col-tab");
    }
    if (this.config.getBoolean("mtdDisablePinchZoom")) {
      document.body.classList.add("mtdeck-disalbe-pinch-zoom");
    }

    new AppContainerCustomizer().doCustomize(this);
    new MediaPanelCustomizer().doCustomize();

    this.update();

    const touchManager = new TouchManager($appContainer);
    touchManager.onTap = () => {
      this.update();
      Menu.close();
    };

    const menuOpenRange = this.config.getNumber("mtdMenuOpenRange");
    touchManager.onSwipeX = (startX, direction) => {
      if (direction == "right") {
        if (startX < menuOpenRange) {
          Menu.open();
        } else {
          this.backColumn();
        }
      } else {
        this.pushColumn();
      }
    };

    history.pushState(null, "", null);
    window.addEventListener("popstate", (e) => this.back());

    this.$drawerOpenButton!.addEventListener("click", (e) => {
      Menu.close();
    });
  }

  private back() {
    this.update();
    this.backController.back();
    history.pushState(null, "", null);
  }

  private pushColumn() {
    this.update();
    Menu.close();
    if (this.columnIndex < this.$columns.length - 1) {
      this.columnIndex++;
      this.scrollController.scrollTo(this.$columns[this.columnIndex]);
    }
  }

  private backColumn() {
    this.update();
    Menu.close();
    if (this.columnIndex == 0) {
      Menu.open();
    } else {
      this.columnIndex--;
      this.scrollController.scrollTo(this.$columns[this.columnIndex]);
    }
  }
}

function setLazyLoadObservers($targets: HTMLElement[]) {
  const intersectionObserver = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        const style = (e.target as HTMLElement).style;
        style.setProperty("background-image", style.backgroundImage, "important");
      }
    }
  });
  const mutationObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if ("querySelector" in node) {
          const mediaItems = (node as HTMLElement).querySelectorAll(".media-item, .media-image");
          if (mediaItems) {
            mediaItems.forEach((item) => intersectionObserver.observe(item));
          }
        }
      });
    }
  });
  $targets.forEach(($target) => {
    mutationObserver.observe($target, {
      childList: true,
      attributes: false,
      characterData: false,
      subtree: true,
    });
  });
}
