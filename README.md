# MTDeck OldTweetDeck 対応版

TweetDeck をスマホアプリのように使えるようにする UserScript (mod by fronoske)


> [!NOTE]
> 本リポジトリは https://github.com/mkizka/MTDeck のフォークです。
>
> この README には主に fronoske によって改変した内容のみを掲載しています。
> オリジナル（mkizka 氏版）の README は [README.mkizka.md](https://github.com/fronoske/MTDeck_OldTweetDeck/blob/main/README.mkizka.md) を参照してください。

## 使い方
ブラウザに [OldTweetDeck](https://github.com/dimdenGD/OldTweetDeck) を導入したのち、本 UserScript をインストールしてください。
UserScript 本体は [releases](https://github.com/fronoske/MTDeck_OldTweetDeck/releases) にあります。`MTDeckForOTD.min.user.js` と `MTDeckForOTD.user.js` のどちらを使っても構いません。
min の方がサイズが小さいのでわずかに高速かもしれません。

## 新機能

以下のオプションを追加した
- 絶対時刻を表示する
- スワイプで画像を切り替える
- スワイプでカラムを移動する
- 「Expand tweet」の出現条件を緩和する
- リストカラムやユーザーカラムのタブにリスト名（ユーザー名）の頭文字を表示する
- 下スワイプで画像を閉じる
- 画像のタップで拡大表示する（3段階）
- ピンチ操作を禁止する

## 注意
すべての機能は非保証です。うまく機能しなかったり、通常の使用にに悪影響を与えるおそれがあります。自己責任でお使いください。
不具合が発生した場合は当該機能を無効にしたり、他のバージョンの MTDeck をお使いください。

MTDeck や OldTweetDeck は X 社が想定していない手法でサーバーにアクセスしています。そのためこれらの使用にはアカウント停止などのリスクがあることを
承知の上でお使いください。

「Expand tweet」機能は OTD が実装済みですが、日本語ツイートの場合にときどき「Expand tweet」が出現しないことがあるのでその出現条件を緩めるものです。
出現させる条件の詳細についてはソースを参照してください。


## TODO
- バックボタンで段階的に戻れるようにする

## 謝辞
OldTweetDeck の開発者である [dimden](https://github.com/dimdenGD) 氏、すばらしいスクリプトを開発された [mkizka](https://github.com/mkizka) 氏に深く感謝します。
