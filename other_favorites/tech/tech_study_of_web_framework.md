# WebブラウザのレンダリングとAngular の change detection
WebフレームワークとHTML 描画の仕組みの関係を研究する。

## react.js と仮想DOM
### 仮想DOM
- [仮想DOMは本当に“速い”のか？ DOM操作の新しい考え方を、フレームワークを実装して理解しよう](https://employment.en-japan.com/engineerhub/entry/2020/02/18/103000)
- [ブラウザの仕組み: 最新ウェブブラウザの内部構造](https://www.html5rocks.com/ja/tutorials/internals/howbrowserswork/)
- [リアルな DOM はなぜ遅いのか](https://blog.dodgson.org/b/2014/12/11/why-is-real-dom-slow/)
    - 仮想DOMは単なるjavascript のオブジェクト。
      realDOMとの間の相互作用を起こさないので、更新が速い。
      そこから前後の状態を比較して realDOM に反映させている。
    - 用語
        - (ツリーの)トラバース： 走査のこと。
        - Mutation Observer API: javascript が、リアルDOMツリーの変化を知るためのAPI。
    
- [React.jsのVirtualDOMについて](https://qiita.com/koba04/items/de79f158cd1f59ba5d20)
    - react.js
        - DOMの更新検出を高速にする仕組みが、いろいろありそう。
          更新検出のメカニズムを知っておくとよい。

## Angular
- Angular は仮想DOMを使ってない。
- Zone
    - Angularチームが開発している非同期処理のユーティリティライブラリです。
    - [AngularとZone.jsとテストの話](https://qiita.com/Quramy/items/83f4fbc6755309f78ad2)
    - [Understanding Zones](https://blog.thoughtram.io/angular/2016/01/22/understanding-zones.html)

### change detection
- [Angular Change Detection Explained](https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html)
- [日本語訳：Angular 2 Change Detection Explained](https://qiita.com/lacolaco/items/523d96ddbfe55c4e6949)
- [Angular 2 Change Detection Explained のスライド](http://pascalprecht.github.io/slides/angular-2-change-detection-explained/#/91)
    - Angular の Change Detection は、非同期イベントのたびに行われる。
        - 非同期イベント = イベント・XHR・タイマー
    - ChangeDetectionStrategyをいじる。
- [Everything you need to know about change detection in Angular](https://indepth.dev/everything-you-need-to-know-about-change-detection-in-angular/#change-detection-operations)

- [Angularでイベントから無駄にChange Detectionを走らせないためにすべきこと](https://qiita.com/ukyo/items/1775f5f09bbd9b5c2978) <br>
`NgZone#onMicrotaskEmpty` で Change Detection が無駄にやられてるか確認できる。 <br>
`NgZone#runOutsideAngular` をつける。

### DOM更新
- [The mechanics of DOM updates in Angular](https://indepth.dev/the-mechanics-of-dom-updates-in-angular/)


## フレームワーク一般
### change detection 概論
- [Change And Its Detection In JavaScript Frameworks](https://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html)

## ツール
- [Tracing](http://www.chromium.org/developers/how-tos/trace-event-profiling-tool) 
    - Cromium のプロファイリングツール



