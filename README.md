# MTDeck
TweetDeckをスマホアプリのように使えるようにするUserScript

[動画デモ](https://streamable.com/oocea)

<img src="https://i.imgur.com/xBrApsM.png" width="300">
<img src="https://i.imgur.com/aFG6fBr.png" width="300">

## 使い方
### Android
1. [KiwiBrowser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser)をインストール
2. Kiwiに[MTDeck](https://chrome.google.com/webstore/detail/mtdeck/ednjoleioepmccklimdkcbbchlcjhpij)アドオンを追加
4. [TweetDeck](https://tweetdeck.twitter.com)を開く
5. メニューの「ホームに追加」からアプリ化

KiwiBrowserでカクカクする場合はFirefoxまたはYandexを使ってみてください  
→Firefoxアドオンは[こちら](https://addons.mozilla.org/ja/firefox/addon/mobiletweetdeck/)

### iOS
1. [Ohajiki](http://ohajiki.ios-web.com/)や[Snippets](https://apps.apple.com/jp/app/safari-snippets/id1126048257)などUserScriptに対応しているアプリに[dist/mtdeck.min.user.js](https://github.com/mkizka/MTDeck/raw/master/dist/mtdeck.min.user.js)を貼り付け
2. [TweetDeck](https://tweetdeck.twitter.com)を開く

## 貢献
以下のコマンドで開発できます
```bash
yarn run dev:chrome
yarn run dev:firefox
```

Issue/PRご自由にどうぞ

## 参考
[totoraj930/TJDeck](https://github.com/totoraj930/TJDeck)
