jQuery.SideChase.js
====

画面スクロールに追従するナビを実装するjQueryプラグイン

## デモ

[GitHub Pages](http://ryou.github.io/jQuery.SideChase.js/example/)

## 依存ライブラリ

jQuery(バージョンは特に不問)

## 使い方

### 使用例

```
<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="js/jQuery.SideChase.js"></script>
<script>
  $(document).ready(function() {
    $('#Side').SideChase();
  });
</script>
```

### オプション

|名前|デフォルト|説明|
|:----|:----|:----|:----|
|container|'#Contents'|ナビの移動範囲を規定するDOM要素。ナビはこの要素を超えて移動しない。|
|bottomMargin|0|この値分、ナビとcontainerの下端にマージンを設ける。|
|animate|true|trueの場合、ナビが移動の際にアニメーションする。|
|animateDuration|500|ナビのアニメーション速度。|

## ライセンス

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## 作成者

[ryou](https://github.com/)

## 参考

本プラグイン作成にあたって、下記の記事を参考にさせて頂きました。

[はじめてのjQueryのプラグインの作り方～5ステップ | Web制作・Webシステム(東京)の株式会社ワイワイエンジン](http://yyengine.jp/blog/jquery/jquery-plugin-5step/)

[わかりやすいREADME.mdを書く | SOTA](http://deeeet.com/writing/2014/07/31/readme/)
