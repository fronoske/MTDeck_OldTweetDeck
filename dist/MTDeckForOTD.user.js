// ==UserScript==
// @name MTDeck for OTD
// @version 2.1.2
// @author mkizka, kdroidwin, and fronoske
// @description TweetDeckをスマホアプリのように使えるようにするUserScript (OTD対応版) mod by fronoske
// @homepage https://github.com/fronoske/MTDeck_for_OTD
// @match https://twitter.com/i/tweetdeck
// ==/UserScript==
(function () {
  'use strict';

  var extensionDescription = {
  	message: "A browser extension to customize TweetDeck with OTD for mobile"
  };
  var configTitle = {
  	message: "Preference"
  };
  var configSaveLabel = {
  	message: "Save and Reload"
  };
  var configBackLabel = {
  	message: "Close"
  };
  var configLinksLabel = {
  	message: "Bug/Feature Report"
  };
  var configOptionBackAtMounted = {
  	message: "Close notifications at startup"
  };
  var configOptionNoAnimation = {
  	message: "Disable animation"
  };
  var configOptionHideImages = {
  	message: "Hide image thumbnails on tweet"
  };
  var configOptionHideEngagementCounts = {
  	message: "Hide Reply,Retweet,Like counts on tweet"
  };
  var configOptionLazyLoadImages = {
  	message: "Lazy load image thumbnails on tweet"
  };
  var configOptionMenuOpenRange = {
  	message: "Range to open menu with swipe"
  };
  var configOptionMobileFriendlyOnCol = {
  	message: "Enable mobile friendly styles on columns"
  };
  var configOptionShowAbsoluteTime = {
  	message: "Show absolute time"
  };
  var configOptionEnableSwipeNavMedia = {
  	message: "Enable horizontal swipe to prev/next media"
  };
  var configOptionEnableSwipeNavCol = {
  	message: "Enable horizontal swipe to prev/next column"
  };
  var configOptionShowExpander = {
  	message: "Show 'Expand tweet' button"
  };
  var configOptionEnableSwipeDownToCloseMedia = {
  	message: "Enable swipe down to close media"
  };
  var configOptionEnableTapToShowFullImage = {
  	message: "Enable tap to show full-sized image"
  };
  var configOptionShowInitialInColumnTab = {
  	message: "Show initial of list (user) name in list (user) tab"
  };
  var configOptionDisablePinchZoom = {
  	message: "Disable pinch zoom"
  };
  var messagesEN = {
  	extensionDescription: extensionDescription,
  	configTitle: configTitle,
  	configSaveLabel: configSaveLabel,
  	configBackLabel: configBackLabel,
  	configLinksLabel: configLinksLabel,
  	configOptionBackAtMounted: configOptionBackAtMounted,
  	configOptionNoAnimation: configOptionNoAnimation,
  	configOptionHideImages: configOptionHideImages,
  	configOptionHideEngagementCounts: configOptionHideEngagementCounts,
  	configOptionLazyLoadImages: configOptionLazyLoadImages,
  	configOptionMenuOpenRange: configOptionMenuOpenRange,
  	configOptionMobileFriendlyOnCol: configOptionMobileFriendlyOnCol,
  	configOptionShowAbsoluteTime: configOptionShowAbsoluteTime,
  	configOptionEnableSwipeNavMedia: configOptionEnableSwipeNavMedia,
  	configOptionEnableSwipeNavCol: configOptionEnableSwipeNavCol,
  	configOptionShowExpander: configOptionShowExpander,
  	configOptionEnableSwipeDownToCloseMedia: configOptionEnableSwipeDownToCloseMedia,
  	configOptionEnableTapToShowFullImage: configOptionEnableTapToShowFullImage,
  	configOptionShowInitialInColumnTab: configOptionShowInitialInColumnTab,
  	configOptionDisablePinchZoom: configOptionDisablePinchZoom
  };

  var extensionDescription$1 = {
  	message: "TweetDeck + OTD をスマホアプリのように使えるようにするアドオン"
  };
  var configTitle$1 = {
  	message: "設定メニュー"
  };
  var configSaveLabel$1 = {
  	message: "保存して再読み込み"
  };
  var configBackLabel$1 = {
  	message: "戻る"
  };
  var configLinksLabel$1 = {
  	message: "バグ報告/機能提案など"
  };
  var configOptionBackAtMounted$1 = {
  	message: "起動直後に開いている通知などを閉じる"
  };
  var configOptionNoAnimation$1 = {
  	message: "アニメーションの無効化"
  };
  var configOptionHideImages$1 = {
  	message: "ツイートの画像サムネイルを非表示"
  };
  var configOptionHideEngagementCounts$1 = {
  	message: "ツイートのリプライ、いいね、RT数を非表示"
  };
  var configOptionLazyLoadImages$1 = {
  	message: "ツイートの画像サムネイルを遅延読み込み"
  };
  var configOptionMenuOpenRange$1 = {
  	message: "左からのスワイプでメニューを開く範囲"
  };
  var configOptionMobileFriendlyOnCol$1 = {
  	message: "カラム内にスマホ向けのスタイルを適用"
  };
  var configOptionShowAbsoluteTime$1 = {
  	message: "絶対時刻を表示する"
  };
  var configOptionEnableSwipeNavMedia$1 = {
  	message: "横スワイプで画像を切り替える"
  };
  var configOptionEnableSwipeNavCol$1 = {
  	message: "横スワイプでカラムを移動する"
  };
  var configOptionShowExpander$1 = {
  	message: "長文ツイートの場合に「Expand tweet」を表示する"
  };
  var configOptionEnableSwipeDownToCloseMedia$1 = {
  	message: "下スワイプで画像を閉じる"
  };
  var configOptionEnableTapToShowFullImage$1 = {
  	message: "画像のタップでフルサイズ表示する"
  };
  var configOptionShowInitialInColumnTab$1 = {
  	message: "タブにリスト名とユーザー名の頭文字を表示する"
  };
  var configOptionDisablePinchZoom$1 = {
  	message: "ピンチ操作を禁止する"
  };
  var messagesJA = {
  	extensionDescription: extensionDescription$1,
  	configTitle: configTitle$1,
  	configSaveLabel: configSaveLabel$1,
  	configBackLabel: configBackLabel$1,
  	configLinksLabel: configLinksLabel$1,
  	configOptionBackAtMounted: configOptionBackAtMounted$1,
  	configOptionNoAnimation: configOptionNoAnimation$1,
  	configOptionHideImages: configOptionHideImages$1,
  	configOptionHideEngagementCounts: configOptionHideEngagementCounts$1,
  	configOptionLazyLoadImages: configOptionLazyLoadImages$1,
  	configOptionMenuOpenRange: configOptionMenuOpenRange$1,
  	configOptionMobileFriendlyOnCol: configOptionMobileFriendlyOnCol$1,
  	configOptionShowAbsoluteTime: configOptionShowAbsoluteTime$1,
  	configOptionEnableSwipeNavMedia: configOptionEnableSwipeNavMedia$1,
  	configOptionEnableSwipeNavCol: configOptionEnableSwipeNavCol$1,
  	configOptionShowExpander: configOptionShowExpander$1,
  	configOptionEnableSwipeDownToCloseMedia: configOptionEnableSwipeDownToCloseMedia$1,
  	configOptionEnableTapToShowFullImage: configOptionEnableTapToShowFullImage$1,
  	configOptionShowInitialInColumnTab: configOptionShowInitialInColumnTab$1,
  	configOptionDisablePinchZoom: configOptionDisablePinchZoom$1
  };

  const messages = {
      en: messagesEN,
      ja: messagesJA,
  };
  const safeHtml = (html) => {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      const body = parsed.querySelector("body");
      if ((body === null || body === void 0 ? void 0 : body.firstElementChild) == undefined) {
          throw Error;
      }
      return body.firstElementChild;
  };
  const clickAll = (query) => {
      const $buttons = document.querySelectorAll(query);
      $buttons.forEach(($button) => $button.click());
  };
  const _ = (messageName) => {
      if (typeof chrome !== "undefined" && typeof chrome.i18n !== "undefined") {
          return chrome.i18n.getMessage(messageName);
      }
      const lang = /ja/.test(window.navigator.language) ? "ja" : "en";
      return messages[lang][messageName].message || "";
  };
  const insertStyle = (css) => {
      const style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.innerText = css;
      document.head.appendChild(style);
  };

  class ScrollController {
      constructor() {
          this.$container = null;
          this.$columnNavigator = null;
          this.isNoAnimation = false;
      }
      init() {
          this.$container = document.querySelector("#container");
          this.$columnNavigator = document.querySelector("#column-navigator");
          this.isNoAnimation = document.body.classList.contains("mtdeck-no-animation");
          if (this.isNoAnimation) {
              this.setNoAnimationJump();
              this.setNoAnimationObserver();
          }
      }
      scrollTo($target) {
          const { left } = $target.getBoundingClientRect();
          const behavior = this.isNoAnimation ? "auto" : "smooth";
          // ナビゲーションバーのスクロール(scrollIntoView)と
          // 同時に発火出来ない？ためscrollByでスクロール
          this.$container.scrollBy({ left, behavior });
          const $navButton = this.$columnNavigator.querySelector(`li[data-column=${$target.dataset.column}]`);
          $navButton.scrollIntoView({ behavior, inline: "nearest" });
      }
      setNoAnimationObserver() {
          const observer = new MutationObserver(() => this.setNoAnimationJump());
          observer.observe(this.$columnNavigator, {
              childList: true,
              attributes: false,
              characterData: false,
          });
      }
      setNoAnimationJump() {
          const $anchors = this.$columnNavigator.querySelectorAll("li[data-column] a");
          $anchors.forEach(($anchor) => {
              const $replacedAnchor = removeEventHandler($anchor);
              $replacedAnchor.addEventListener("click", (_) => {
                  const $targetColumn = this.$container.querySelector(`section[data-column=${$anchor.dataset.column}]`);
                  $targetColumn.scrollIntoView({ inline: "nearest" });
              });
          });
      }
  }
  function removeEventHandler($element) {
      const $replaced = safeHtml($element.outerHTML);
      $element.insertAdjacentElement("afterend", $replaced);
      $element.remove();
      return $replaced;
  }

  class Menu {
      static get isOpen() {
          return !document.body.classList.contains("mtdeck-close");
      }
      static open() {
          if (!Menu.isOpen) {
              document.body.classList.remove("mtdeck-close");
          }
      }
      static close() {
          if (Menu.isOpen) {
              document.body.classList.add("mtdeck-close");
          }
      }
  }

  class Backable {
      constructor() {
          this.activeQuery = "";
          this.clickQuery = "";
      }
      get exists() {
          return document.querySelectorAll(this.activeQuery).length > 0;
      }
      back() {
          clickAll(this.clickQuery);
      }
  }
  class MTDeckConfig extends Backable {
      constructor() {
          super(...arguments);
          this.activeQuery = ".mtdeck-config.is-open";
          this.clickQuery = "#mtdeck-config-back";
      }
  }
  class TweetDrawer extends Backable {
      constructor() {
          super(...arguments);
          this.activeQuery = ".app-content.is-open";
          this.clickQuery = ".js-drawer-close";
      }
  }
  class ModalSocial extends Backable {
      constructor() {
          super(...arguments);
          this.activeQuery = "#open-modal .js-column-state-social-proof";
          this.clickQuery = "#open-modal .js-tweet-social-proof-back";
      }
  }
  class ModalDetail extends Backable {
      constructor() {
          super(...arguments);
          this.activeQuery = "#open-modal .js-column-state-detail-view";
          this.clickQuery = "#open-modal .js-column-back";
      }
  }
  class BackableModal extends Backable {
      constructor() {
          super(...arguments);
          this.activeQuery = ".mdl .btn-back";
          this.clickQuery = ".mdl .btn-back";
      }
  }
  class Modal extends Backable {
      constructor() {
          super(...arguments);
          this.activeQuery = ".mdl .js-dismiss";
          this.clickQuery = ".mdl .js-dismiss";
      }
  }
  class ColumnSocial extends Backable {
      constructor() {
          super(...arguments);
          this.activeQuery = "#container .js-column-state-social-proof";
          this.clickQuery = "#container .js-tweet-social-proof-back";
      }
  }
  class ColumnDetail extends Backable {
      constructor() {
          super(...arguments);
          this.activeQuery = "#container .js-column-state-detail-view";
          this.clickQuery = "#container .js-column-back";
      }
  }
  class ColumnOption extends Backable {
      constructor() {
          super(...arguments);
          this.activeQuery = ".is-options-open";
          this.clickQuery = ".is-options-open .js-action-header-button";
      }
  }
  class SideMenu extends Backable {
      get exists() {
          return Menu.isOpen;
      }
      back() {
          Menu.close();
      }
  }
  class BackController {
      constructor() {
          this.backables = [
              new MTDeckConfig(),
              new TweetDrawer(),
              new ModalSocial(),
              new ModalDetail(),
              new BackableModal(),
              new Modal(),
              new ColumnSocial(),
              new ColumnDetail(),
              new ColumnOption(),
              new SideMenu(),
          ];
      }
      back() {
          for (let backable of this.backables) {
              if (backable.exists) {
                  backable.back();
                  break;
              }
          }
      }
  }

  class TouchManager {
      constructor($element) {
          this.onTap = () => { };
          this.onSwipeX = () => { };
          this.onSwipeY = () => { };
          this.start = { x: 0, y: 0, time: 0 };
          this.end = { x: 0, y: 0, time: 0 };
          $element.addEventListener("click", () => this.onTap());
          $element.addEventListener("touchstart", (e) => {
              this.start = {
                  x: e.touches[0].screenX,
                  y: e.touches[0].screenY,
                  time: new Date().getTime(),
              };
          });
          $element.addEventListener("touchmove", (e) => {
              this.end = {
                  x: e.touches[0].screenX,
                  y: e.touches[0].screenY,
                  time: new Date().getTime(),
              };
          });
          $element.addEventListener("touchend", (_) => {
              if (this.swipedAxis === "X") {
                  const direction = this.start.x < this.end.x ? "right" : "left";
                  this.onSwipeX(this.start.x, direction);
              }
              if (this.swipedAxis === "Y") {
                  const direction = this.start.y < this.end.y ? "down" : "up";
                  this.onSwipeY(this.start.y, direction);
              }
          });
      }
      // スワイプが X 方向か Y 方向か
      get swipedAxis() {
          const diffX = this.end.x - this.start.x;
          const diffY = this.end.y - this.start.y;
          const diffTime = this.end.time - this.start.time;
          const velocity = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) / diffTime;
          // 最小距離(px), 最小速度(px/ミリ秒), スワイプ角度（45度）
          if (Math.abs(diffX) >= 10 && Math.abs(velocity) >= 0.3 && Math.abs(diffY / diffX) <= 1) {
              return "X";
          }
          else if (Math.abs(diffY) >= 10 && Math.abs(velocity) >= 0.3 && Math.abs(diffY / diffX) > 1) {
              return "Y";
          }
          else {
              return "";
          }
      }
  }

  var version = "2.1.2";

  class Config {
      constructor() {
          this.$el = null;
          this.items = [
              {
                  label: _("configOptionBackAtMounted"),
                  name: "mtdBackAtMounted",
                  type: "checkbox",
                  default: "true",
              },
              {
                  label: _("configOptionNoAnimation"),
                  name: "mtdNoAnimation",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionHideImages"),
                  name: "mtdHideImages",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionHideEngagementCounts"),
                  name: "mtdHideCounts",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionLazyLoadImages"),
                  name: "mtdLazyLoadImages",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionMenuOpenRange"),
                  name: "mtdMenuOpenRange",
                  type: "number",
                  default: "30",
              },
              {
                  label: _("configOptionMobileFriendlyOnCol"),
                  name: "mtdMobileStyleFriendly",
                  type: "checkbox",
                  default: "true",
              },
              {
                  label: _("configOptionShowAbsoluteTime"),
                  name: "mtdShowAbsoluteTime",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionEnableSwipeNavMedia"),
                  name: "mtdEnableSwipeNavMedia",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionEnableSwipeNavCol"),
                  name: "mtdEnableSwipeNavCol",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionShowExpander"),
                  name: "mtdShowExpander",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionEnableSwipeDownToCloseMedia"),
                  name: "mtdSwipeDownToCloseMedia",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionEnableTapToShowFullImage"),
                  name: "mtdTapToShowFullImage",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionShowInitialInColumnTab"),
                  name: "mtdShowInitialInColumnTab",
                  type: "checkbox",
                  default: "false",
              },
              {
                  label: _("configOptionDisablePinchZoom"),
                  name: "mtdDisablePinchZoom",
                  type: "checkbox",
                  default: "false",
              },
          ];
      }
      getString(key) {
          return localStorage.getItem(key).toString();
      }
      getNumber(key) {
          return parseFloat(localStorage.getItem(key));
      }
      getBoolean(key) {
          return localStorage.getItem(key) === "true";
      }
      open() {
          this.$el.classList.add("is-open");
      }
      close() {
          this.save();
          this.$el.classList.remove("is-open");
      }
      isOpen() {
          return this.$el.classList.contains("is-open");
      }
      save() {
          const $inputs = document.querySelectorAll(".mtdeck-config-input");
          $inputs.forEach(($input) => {
              if ($input.type === "checkbox") {
                  localStorage.setItem($input.name, `${$input.checked}`);
              }
              else {
                  localStorage.setItem($input.name, $input.value);
              }
          });
      }
      saveDefault() {
          this.items.forEach((item) => {
              if (localStorage.getItem(item.name) === null) {
                  localStorage.setItem(item.name, item.default);
              }
          });
      }
      createInfo() {
          this.$el.appendChild(safeHtml(`
      <div class="mtdeck-config-item">
        <p>MTDeck v${version}</p>
        <p>${_("configLinksLabel")}:
          <a href="https://github.com/fronoske/MTDeck_for_OTD" target="_blank">Github</a>
          <a href="https://twitter.com/fronoske">Twitter</a>
        </p>
      </div>
    `));
      }
      createFooter() {
          this.$el.appendChild(safeHtml(`
      <div class="mtdeck-config-footer">
        <button id="mtdeck-config-save">${_("configSaveLabel")}</button>
        <button id="mtdeck-config-back">${_("configBackLabel")}</button>
      </div>
    `));
          document.querySelector("#mtdeck-config-save").addEventListener("click", () => {
              this.save();
              location.reload();
          });
          document.querySelector("#mtdeck-config-back").addEventListener("click", () => {
              this.close();
          });
      }
      createForm() {
          this.items.forEach((item) => {
              const inputElement = safeHtml(`
        <input class="mtdeck-config-input" type="${item.type}" name="${item.name}"/>
      `);
              if (item.type === "checkbox") {
                  inputElement.defaultChecked = this.getBoolean(item.name);
              }
              else {
                  inputElement.defaultValue = this.getString(item.name);
              }
              this.$el.insertAdjacentElement("beforeend", safeHtml(`
        <label class="mtdeck-config-item">
          ${inputElement.outerHTML}  
          ${item.label}
        </label>
      `));
          });
      }
      createSettingButton() {
          const $settingsButton = document.querySelector(".js-app-settings");
          const $copiedSettingsButton = safeHtml($settingsButton.outerHTML);
          $copiedSettingsButton.dataset.action = "mtdeckConfig";
          $copiedSettingsButton.dataset.title = "MTDeck Config";
          $copiedSettingsButton.classList.add("mtdeck-config-button");
          $copiedSettingsButton.querySelector(".app-nav-link-text").insertAdjacentText("afterbegin", "MTD");
          $settingsButton.parentElement.insertAdjacentElement("afterbegin", $copiedSettingsButton);
          $copiedSettingsButton.addEventListener("click", (e) => this.open());
      }
      createConfigBase() {
          this.$el = safeHtml(`
      <div class="mtdeck-config">
        <h1 class="mtdeck-config-item">${_("configTitle")}</h1>
      </div>
    `);
          document.body.appendChild(this.$el);
      }
      init() {
          this.saveDefault();
          this.createConfigBase();
          this.createInfo();
          this.createForm();
          this.createFooter();
          this.createSettingButton();
      }
  }

  // AppContainerCustomizerクラス … ツイート表示時のカスタマイズを司るクラス
  class AppContainerCustomizer {
      constructor() {
          this.$appContainer = document.querySelector("div.app-columns-container");
          this.bodyClassList = document.body.classList;
      }
      doCustomize(mtd) {
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
              if (configShowExpander)
                  new TweetExpander().addExpandTweetButton();
              if (configShowAbsoluteTime)
                  new AbsoluteTimeFormatter().updateTweetTimestamps();
          };
          const config = { childList: true, attributes: false, characterData: false, subtree: true };
          new MutationObserver(onNewPostGenerated).observe(this.$appContainer, config);
          // カラムタブにリスト名の頭文字を表示する
          if (configShowInitialInColumnTab) {
              this.showInitialInColumnTab();
          }
          // ピンチ操作を無効にする
          if (configDisalbePinchZoom) {
              const touchHandler = (event) => {
                  if (event.touches.length > 1) {
                      event.preventDefault();
                  }
              };
              document.addEventListener("touchstart", touchHandler, {
                  passive: false,
              });
          }
      }
      showInitialInColumnTab() {
          const $navItems = document.querySelectorAll("li.js-column-nav-menu-item");
          const initialStyle = "position: absolute; left: 63%; bottom: 5%; font-size: medium; font-weight: bold;";
          $navItems.forEach(($navItem) => {
              var _a, _b;
              const $icon = $navItem.querySelector("a.js-header-action > div.obj-left > i");
              if ($icon === null || $icon === void 0 ? void 0 : $icon.classList.contains("icon-list")) {
                  const listName = (_a = $navItem.querySelector("span.column-heading")) === null || _a === void 0 ? void 0 : _a.textContent;
                  if (listName === null || listName === "")
                      return;
                  const $listNameInitial = document.createElement("span");
                  $listNameInitial.textContent = listName[0];
                  $listNameInitial.setAttribute("style", initialStyle);
                  $navItem.appendChild($listNameInitial);
              }
              else if ($icon === null || $icon === void 0 ? void 0 : $icon.classList.contains("icon-user")) {
                  const userName = (_b = $navItem.querySelector("span.txt-mute")) === null || _b === void 0 ? void 0 : _b.textContent;
                  if (userName === null || userName === "")
                      return;
                  const $userNameInitial = document.createElement("span");
                  $userNameInitial.textContent = userName[1];
                  $userNameInitial.setAttribute("style", initialStyle);
                  $navItem.appendChild($userNameInitial);
              }
          });
      }
      enableSwipeNavCol(mtd) {
          // オリジナルにあるカラムボタンのハイライトの挙動を打ち消す
          insertStyle(`a.column-nav-link:hover {
      color: inherit;
    }
    a.is-selected.column-nav-link:hover {
      color: white;
    }`);
          // カラムのボタンのタップでハイライト
          const navButtons = document.querySelectorAll("a.column-nav-link");
          navButtons.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                  const navButtons = document.querySelectorAll("a.column-nav-link");
                  navButtons.forEach((nav) => {
                      if (nav === e.currentTarget) {
                          nav.classList.add("is-selected");
                      }
                      else {
                          nav.classList.remove("is-selected");
                      }
                  });
              });
          });
          // スワイプでカラムボタンのタップをエミュレートする
          const touchManager = new TouchManager(this.$appContainer);
          touchManager.onSwipeX = (startX, direction) => {
              mtd.update();
              const navButtons = document.querySelectorAll("a.column-nav-link");
              let targetColIndex = direction == "left" ? mtd.columnIndex + 1 : mtd.columnIndex - 1;
              // console.log(`current=${mtd.columnIndex} target=${targetColumnIndex} result=${(navButtons.length + targetColumnIndex) % navButtons.length}`);
              targetColIndex = Math.min(navButtons.length - 1, Math.max(0, targetColIndex));
              navButtons[targetColIndex].click();
          };
      }
  }
  class TweetExpander {
      addExpandTweetButton() {
          const expanderPhrase = "(Expand tweet)";
          const $articles = document.querySelectorAll("article.js-stream-item");
          $articles.forEach(($article) => {
              var _a, _b, _c;
              const $tweetText = $article.querySelector(".js-tweet-text");
              const statusUrl = (_a = $article.querySelector("span.tweet-action[href]")) === null || _a === void 0 ? void 0 : _a.getAttribute("href");
              if ($tweetText !== null && statusUrl !== null) {
                  // Expand Tweet を出す条件
                  // すでにExpand Tweet がなく、リンクを除くツイート本文が「…」で終わるが「……」では終わらない
                  const containsExpandTweet = ((_b = $tweetText.lastElementChild) === null || _b === void 0 ? void 0 : _b.textContent) == expanderPhrase;
                  const $lastTextNode = Array.from($tweetText.childNodes)
                      .reverse()
                      .find((node) => node.nodeType == Node.TEXT_NODE);
                  const lastText = (_c = $lastTextNode === null || $lastTextNode === void 0 ? void 0 : $lastTextNode.textContent) !== null && _c !== void 0 ? _c : "";
                  if (!containsExpandTweet && lastText.endsWith("…") && !lastText.endsWith("……")) {
                      const id = $article.getAttribute("data-tweet-id");
                      // OTD が実装している expandTweet() を呼び出す
                      const $expandTweet = document.createElement("a");
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
      updateTweetTimestamps() {
          var _a, _b, _c;
          const $tweetTimestamps = document.querySelectorAll("time.tweet-timestamp:not([data-msecdeck=done])");
          if ($tweetTimestamps.length) {
              for (const $time of $tweetTimestamps) {
                  $time.dataset.msecdeck = "done";
                  const $timeContent = $time.firstElementChild;
                  if ($timeContent === null || $timeContent.textContent === null)
                      continue;
                  const timestampInSeconds = Number(((_a = $timeContent.getAttribute("href")) === null || _a === void 0 ? void 0 : _a.split("/")[5]) || $time.dataset.time || ((_b = $timeContent.textContent) === null || _b === void 0 ? void 0 : _b.replace(/(am|pm)\s·/, " $1")));
                  if (timestampInSeconds != 0) {
                      const formattedTime = this.formatTime(this.getDateFromSnowflake(timestampInSeconds));
                      if ($timeContent.textContent.length > 6) {
                          // オリジナルの日時の文字列が 6文字以上ならカッコ内の相対時刻は不要
                          $timeContent.textContent = formattedTime;
                      }
                      else {
                          const $absoluteTimeSpan1 = document.createElement("span");
                          $absoluteTimeSpan1.classList.add("tweet-timestamp", "txt-mute", "flex-shrink--0", "txt-size-variable--12", "no-wrap", "mtdeck-absolute-time");
                          $absoluteTimeSpan1.textContent = `${formattedTime} -`;
                          (_c = $time.parentElement) === null || _c === void 0 ? void 0 : _c.insertBefore($absoluteTimeSpan1, $time);
                      }
                  }
                  // RT なら RT 日時も表示する
                  const $article = $time.closest("article[data-key][data-tweet-id");
                  if ($article !== null && $article.getAttribute("data-key") != $article.getAttribute("data-tweet-id")) {
                      this.showRtTimestamp($article);
                  }
              }
          }
      }
      showRtTimestamp($article) {
          const dataKey = $article.getAttribute("data-key");
          const dataTweetId = $article.getAttribute("data-tweet-id");
          if (dataKey && /^[0-9]+$/.test(dataKey) && dataKey != dataTweetId) {
              const rtDate = this.getDateFromSnowflake(Number(dataKey)); // dataKey が RT 本体、dataTweetId が RT 元のポスト
              const $rtArea = $article.querySelector("div.nbfc");
              if (rtDate && $rtArea && $rtArea.textContent) {
                  $rtArea.textContent = $rtArea.textContent.replace(/Retweeted +/, `Retweeted at ${this.formatTime(rtDate)}`);
              }
          }
      }
      getDateFromSnowflake(timestamp) {
          const epochMilliseconds = Math.floor(timestamp / 4194304) + 1288834974657;
          return new Date(epochMilliseconds);
      }
      formatTime(time, includeDayOfWeek = true) {
          const pad = (num, size) => num.toString().padStart(size, "0");
          const dayOfWeek = includeDayOfWeek ? `(${["日", "月", "火", "水", "木", "金", "土"][time.getDay()]}) ` : "";
          const yearPart = new Date().getFullYear() != time.getFullYear() ? `${time.getFullYear()}/` : "";
          const datePart = `${time.getMonth() + 1}/${time.getDate()}${dayOfWeek}`;
          const timePart = `${time.getHours()}:${pad(time.getMinutes(), 2)}`;
          const dateString = `${yearPart}${datePart} ${timePart}`;
          return dateString;
      }
  }
  // MediaPanelCustomizerクラス … メディア表示時のカスタマイズを司るクラス
  class MediaPanelCustomizer {
      constructor() {
          this.$mediaPanel = document.querySelector("div#open-modal");
          this.bodyClassList = document.body.classList;
      }
      doCustomize() {
          const configEnableSwipeMedia = this.bodyClassList.contains("mtdeck-enable-swipe-media");
          const configEnableSwipeDownToCloseMedia = this.bodyClassList.contains("mtdeck-enable-swipe-down-to-close-media");
          const cconfigEnableTapToShowFullImage = this.bodyClassList.contains("mtdeck-enable-tap-to-show-full-image");
          if (configEnableSwipeMedia) {
              this.enableSwipeNavMedia();
          }
          if (configEnableSwipeDownToCloseMedia) {
              insertStyle(`div.full-media-box {
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
        `);
              this.enableSwipeDownToCloseMedia();
          }
          if (cconfigEnableTapToShowFullImage) {
              this.enableShowFullImage();
          }
      }
      enableSwipeNavMedia() {
          const touchManager = new TouchManager(this.$mediaPanel);
          touchManager.onSwipeX = (startX, direction) => {
              var _a, _b;
              // console.log(direction);
              switch (direction) {
                  case "left":
                      (_a = document.querySelector("a.js-media-gallery-next")) === null || _a === void 0 ? void 0 : _a.click();
                      break;
                  case "right":
                      (_b = document.querySelector("a.js-media-gallery-prev")) === null || _b === void 0 ? void 0 : _b.click();
                      break;
              }
          };
      }
      enableSwipeDownToCloseMedia() {
          const touchManager = new TouchManager(this.$mediaPanel);
          touchManager.onSwipeY = (startY, direction) => {
              var _a, _b;
              console.log(direction);
              switch (direction) {
                  case "up":
                      const imgLink = (_a = document.querySelector("img.media-img")) === null || _a === void 0 ? void 0 : _a.parentElement;
                      this.showFullImageOnTap(imgLink, "full");
                      break;
                  case "down":
                      (_b = document.querySelector("a.mdl-dismiss")) === null || _b === void 0 ? void 0 : _b.click();
                      break;
              }
          };
      }
      //TODO: 画像をほどよくサイズ変更したい
      enableShowFullImage() {
          const onNewMediaGenerated = (mutations) => {
              for (const mutation of mutations) {
                  const mediaTableIsRemoved = Array.from(mutation.removedNodes).some((node) => node.nodeType == Node.ELEMENT_NODE && node.classList.contains("js-mediatable"));
                  if (mediaTableIsRemoved) {
                      document.querySelectorAll("div.full-media-box").forEach((fmb) => fmb.remove());
                  }
                  mutation.addedNodes.forEach((node) => {
                      if (node.nodeType != Node.ELEMENT_NODE || !node.classList.contains("js-media-preview-container")) {
                          return;
                      }
                      // console.log("Added Node: " + (node as HTMLElement)?.outerHTML);
                      const mediaItems = node.querySelectorAll("a.js-media-image-link");
                      if (mediaItems) {
                          mediaItems.forEach((item) => {
                              item.addEventListener("click", (e) => {
                                  this.showFullImageOnTap(e.currentTarget, "normal");
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
      showFullImageOnTap(item, size) {
          // 画像タップで original tweet に飛ぶのを抑止
          item.removeAttribute("href");
          // フル画像の要素を生成する
          const $image = item.querySelector("img.media-img");
          const imgSrc = $image === null || $image === void 0 ? void 0 : $image.getAttribute("src");
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
              var _a;
              e.stopPropagation();
              (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.remove();
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

  class Deck {
      constructor() {
          this.config = new Config();
          this.scrollController = new ScrollController();
          this.backController = new BackController();
          this.columnIndex = 0;
          this.$columns = [];
          this.$drawerOpenButton = null;
      }
      ready() {
          const initInterval = setInterval(() => {
              this.$drawerOpenButton = document.querySelector("button[data-drawer=compose]");
              if (this.$drawerOpenButton) {
                  this.config.init();
                  this.init();
                  this.scrollController.init();
                  clearInterval(initInterval);
              }
          }, 100);
      }
      update() {
          this.$columns = [];
          document.querySelectorAll("section.column").forEach(($column) => {
              this.$columns.push($column);
          });
          this.fixColumnState();
          this.updateTweetButton();
      }
      fixColumnState() {
          this.columnIndex = 0;
          let $nearColumn = this.$columns[0];
          for (let i = 1; i < this.$columns.length; i++) {
              if (Math.pow(this.$columns[i].getBoundingClientRect().left, 2) < Math.pow($nearColumn.getBoundingClientRect().left, 2)) {
                  $nearColumn = this.$columns[i];
                  this.columnIndex = i;
              }
          }
          $nearColumn.scrollIntoView();
      }
      updateTweetButton() {
          const $tweetButton = document.querySelector(".tweet-button");
          setTimeout(() => {
              if (this.$columns[this.columnIndex].classList.contains("js-column-state-detail-view")) {
                  $tweetButton.style.display = "none";
              }
              else {
                  $tweetButton.style.display = "block";
              }
          }, 200);
      }
      init() {
          document.body.classList.add("mtdeck");
          Menu.close();
          const $appContainer = document.querySelector("div.app-columns-container");
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
              const $openModal = document.querySelector("#open-modal");
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
                  }
                  else {
                      this.backColumn();
                  }
              }
              else {
                  this.pushColumn();
              }
          };
          history.pushState(null, "", null);
          window.addEventListener("popstate", (e) => this.back());
          this.$drawerOpenButton.addEventListener("click", (e) => {
              Menu.close();
          });
      }
      back() {
          this.update();
          this.backController.back();
          history.pushState(null, "", null);
      }
      pushColumn() {
          this.update();
          Menu.close();
          if (this.columnIndex < this.$columns.length - 1) {
              this.columnIndex++;
              this.scrollController.scrollTo(this.$columns[this.columnIndex]);
          }
      }
      backColumn() {
          this.update();
          Menu.close();
          if (this.columnIndex == 0) {
              Menu.open();
          }
          else {
              this.columnIndex--;
              this.scrollController.scrollTo(this.$columns[this.columnIndex]);
          }
      }
  }
  function setLazyLoadObservers($targets) {
      const intersectionObserver = new IntersectionObserver((entries) => {
          for (const e of entries) {
              if (e.isIntersecting) {
                  const style = e.target.style;
                  style.setProperty("background-image", style.backgroundImage, "important");
              }
          }
      });
      const mutationObserver = new MutationObserver((mutations) => {
          for (const mutation of mutations) {
              mutation.addedNodes.forEach((node) => {
                  if ("querySelector" in node) {
                      const mediaItems = node.querySelectorAll(".media-item, .media-image");
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

  var styles = "@charset \"UTF-8\";\nbody.mtdeck {\n  /* カラム番号を表示しないようにする */\n  /* ヘッダー画像をもう少し暗くする */\n}\nbody.mtdeck button[data-drawer=compose] {\n  z-index: 1;\n  position: fixed !important;\n  right: 20px;\n  bottom: 60px;\n  width: 4rem !important;\n  height: 4rem !important;\n  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.7));\n}\nbody.mtdeck .app-columns {\n  padding: 0 0 50px 0 !important;\n}\nbody.mtdeck .app-content {\n  left: 0 !important;\n}\nbody.mtdeck .app-columns-container {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\nbody.mtdeck section.column,\nbody.mtdeck .js-modal-panel,\nbody.mtdeck .prf-header,\nbody.mtdeck .prf-header-inner-overlay,\nbody.mtdeck .social-proof-container {\n  width: 100% !important;\n}\nbody.mtdeck .overlay:before {\n  margin-right: -5px;\n}\nbody.mtdeck .mdl {\n  width: 100% !important;\n  overflow-x: hidden;\n}\nbody.mtdeck .mdl .mdl-inner {\n  padding: 5px;\n}\nbody.mtdeck .mdl .mdl-inner .js-right-column {\n  overflow-x: hidden;\n}\nbody.mtdeck .mdl .mdl-inner .mdl-column:first-child {\n  display: none;\n}\nbody.mtdeck .mdl .mdl-inner .mdl-column:not(:first-child) {\n  width: 100% !important;\n}\nbody.mtdeck .mdl .mdl-dismiss {\n  right: 10px !important;\n}\nbody.mtdeck .med-tweet {\n  width: 100% !important;\n  left: 0 !important;\n}\nbody.mtdeck .old-composer-footer,\nbody.mtdeck .column-nav-flyout {\n  display: none;\n}\nbody.mtdeck .js-search-in-popover .popover {\n  width: 200px !important;\n}\nbody.mtdeck .js-mediaembed .js-media-native-video,\nbody.mtdeck .js-mediaembed .youtube-player {\n  width: 100% !important;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto !important;\n  z-index: 1;\n}\nbody.mtdeck .column-navigator {\n  top: 50px;\n}\nbody.mtdeck .column-nav-link:after {\n  display: none;\n}\nbody.mtdeck div.prf-header-inner-overlay {\n  background-image: linear-gradient(transparent, rgba(20, 23, 26, 0.9));\n}\n\nbody.mtdeck .app-content {\n  will-change: transform;\n}\nbody.mtdeck .app-content.is-open {\n  margin-right: 0 !important;\n  transform: translateX(100%) !important;\n}\nbody.mtdeck .drawer[data-drawer=compose] {\n  left: -100%;\n  width: 100%;\n}\nbody.mtdeck .drawer[data-drawer=accountSettings] {\n  left: calc(-1 * 100vw + 60px);\n  width: calc(100vw - 60px);\n}\nbody.mtdeck button.js-hide-drawer {\n  display: none !important;\n}\n\nbody.mtdeck .js-int-scroller {\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #1c2938;\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-top: 10px;\n  height: 40px;\n}\nbody.mtdeck .js-int-scroller .column-nav-item {\n  height: 35px;\n}\nbody.mtdeck .js-int-scroller .column-nav-item .icon-medium {\n  font-size: 20px;\n}\nbody.mtdeck .js-int-scroller .column-nav-item .js-header-action {\n  padding-left: 12px !important;\n  padding-right: 12px !important;\n}\nbody.mtdeck .hide-detail-view-inline .js-int-scroller,\nbody.mtdeck .with-nav-border-t:before {\n  display: none;\n}\nbody.mtdeck .column-nav-item {\n  display: inline-block;\n}\n\nbody.mtdeck-close header.app-header {\n  position: relative;\n  top: -50px;\n}\nbody.mtdeck-close div.app-columns-container {\n  left: 0 !important;\n}\n\nhtml.dark .mtdeck-config {\n  background-color: #1c2938;\n}\n\n.mtdeck-config {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 201;\n  background-color: #fff;\n  padding: 20px;\n}\n.mtdeck-config.is-open {\n  display: block;\n}\n.mtdeck-config-button {\n  color: blueviolet !important;\n}\n.mtdeck-config-item {\n  margin-bottom: 15px !important;\n  /* 設定項目の行間を狭める */\n}\n.mtdeck-config-input[type=number] {\n  width: 80px;\n  margin-right: 10px;\n}\n.mtdeck-config-footer {\n  position: fixed;\n  bottom: 20px;\n}\n\nbody.mtdeck-no-animation,\nbody.mtdeck-no-animation *:not(iframe) {\n  transition-duration: 1ms !important;\n}\n\nbody.mtdeck-hide-images .js-media:not(.detail-preview) {\n  height: 25px !important;\n  border-radius: 0 !important;\n}\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-sensitive {\n  height: 1rem;\n  background-color: transparent;\n}\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-sensitive::before {\n  content: \"[sensitive]\";\n}\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-sensitive div {\n  display: none;\n}\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-image-container:first-child,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .js-media-preview-container {\n  width: 100% !important;\n}\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-image-container:first-child .media-item,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-image-container:first-child .media-image,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .js-media-preview-container .media-item,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .js-media-preview-container .media-image {\n  height: 0;\n  width: max-content;\n  background-image: none !important;\n  border-radius: 0;\n}\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-image-container:first-child .media-item::before,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-image-container:first-child .media-image::before,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .js-media-preview-container .media-item::before,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .js-media-preview-container .media-image::before {\n  content: \"[media]\";\n}\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-image-container:first-child .media-item *,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-image-container:first-child .media-image *,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .js-media-preview-container .media-item *,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .js-media-preview-container .media-image * {\n  display: none !important;\n}\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-image-container:not(:first-child) {\n  display: none !important;\n}\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-image-container:not(:first-child) .media-item,\nbody.mtdeck-hide-images .js-media:not(.detail-preview) .media-image-container:not(:first-child) .media-image {\n  background-image: none !important;\n}\nbody.mtdeck-hide-images .item-box-full-bleed .media-item,\nbody.mtdeck-hide-images .item-box-full-bleed .media-image {\n  margin: auto !important;\n}\n\nbody.mtdeck-hide-counts .reply-count, body.mtdeck-hide-counts .retweet-count, body.mtdeck-hide-counts .like-count {\n  display: none;\n}\nbody.mtdeck-hide-counts .app-columns .column-detail .tweet-detail footer .js-tweet-stats {\n  display: none;\n}\n\nbody.mtdeck-lazy-load-image .media-item,\nbody.mtdeck-lazy-load-image .media-image {\n  background-image: none !important;\n}\n\nbody.mtdeck-mobile .item-box {\n  padding: 12px 16px;\n}\nbody.mtdeck-mobile .item-box .item-img {\n  width: 48px;\n}\nbody.mtdeck-mobile .item-box .avatar {\n  width: 48px;\n  height: 48px;\n}\nbody.mtdeck-mobile .item-box .dropdown-menu {\n  width: 90vw;\n  margin-right: -5vw;\n  font-size: 15px;\n}\nbody.mtdeck-mobile .item-box .dropdown-menu .caret {\n  right: 13px;\n}\nbody.mtdeck-mobile .item-box .dropdown-menu [data-action] {\n  padding: 8px 20px;\n}\nbody.mtdeck-mobile .item-box .tweet {\n  padding-left: 60px;\n}\nbody.mtdeck-mobile .item-box .tweet .tweet-header {\n  margin-bottom: 2px;\n}\nbody.mtdeck-mobile .item-box .tweet .tweet-header .tweet-img {\n  margin-left: -60px;\n}\nbody.mtdeck-mobile .item-box .tweet .thread {\n  left: 38px;\n}\nbody.mtdeck-mobile .item-box .tweet .tweet-body .other-replies {\n  margin-bottom: 2px;\n}\nbody.mtdeck-mobile .item-box .tweet .tweet-footer {\n  margin-top: 12px;\n}\nbody.mtdeck-mobile .item-box .tweet .tweet-footer .tweet-actions {\n  display: flex;\n  justify-content: space-between;\n}\nbody.mtdeck-mobile .item-box .tweet .js-show-this-thread > p {\n  margin-top: 12px !important;\n}\nbody.mtdeck-mobile .item-box .tweet-detail.js-has-replies {\n  margin-left: 48px !important;\n}\nbody.mtdeck-mobile .item-box .tweet-detail.js-has-replies .thread {\n  left: 38px;\n}\nbody.mtdeck-mobile .item-box .tweet-detail .account-summary {\n  margin-bottom: 12px !important;\n}\nbody.mtdeck-mobile .item-box .tweet-detail .account-summary .item-img {\n  margin-right: 12px !important;\n}\nbody.mtdeck-mobile .item-box .tweet-detail .account-summary .tweet-text {\n  margin-bottom: 12px !important;\n}\nbody.mtdeck-mobile .item-box .tweet-detail .tweet-detail-actions {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\nbody.mtdeck-mobile .item-box .activity-header {\n  display: flex;\n  align-items: center;\n  margin-top: 0;\n  margin-bottom: 2px;\n}\nbody.mtdeck-mobile .item-box .activity-header .item-img {\n  margin-top: 0 !important;\n}\nbody.mtdeck-mobile .item-box .activity-header i {\n  font-size: 1.3em !important;\n  line-height: 1em;\n}\nbody.mtdeck-mobile .item-box .activity-header i.icon-user-filled {\n  font-size: 1em !important;\n}\nbody.mtdeck-mobile .item-box .activity-header .avatar {\n  width: 30px;\n  height: 30px;\n}\nbody.mtdeck-mobile .item-box .quoted-tweet, body.mtdeck-mobile .item-box .media-preview {\n  margin-top: 12px !important;\n  margin-bottom: 0 !important;\n}\nbody.mtdeck-mobile .item-box video {\n  width: 100%;\n  height: auto;\n}\n\nbody.mtdeck[data-btd-ready=true] .media-size-medium.btd-aspect-ratio-thumbnail,\nbody.mtdeck[data-btd-ready=true] .media-size-large.btd-aspect-ratio-thumbnail {\n  padding-top: calc(var(--btd-thumb-height) / var(--btd-thumb-width) * 100%);\n}\nbody.mtdeck[data-btd-ready=true] .js-int-scroller {\n  background-color: var(--btd-theme-background-lighter);\n}";

  insertStyle(styles);
  window.MTD = new Deck();
  window.MTD.ready();

}());
