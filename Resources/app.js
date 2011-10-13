// ネームスペース設定
var kk = {};

// アプリケーションウィンドウ作成
Ti.include('AppWindow.js');

// カスタムイメージタブ作成
Ti.include('customTab.js');

// カスタムイメージタブ付きアプリケーションを設置
var w = kk.ui.createCustomTab();
w.open();
