// AppWindow.js
// タブ内Window作成

(function() {
	//UI
	kk.ui = {};
	kk.ui.createAppWindow = function(obj) {
		var win = Ti.UI.createWindow({
			backgroundColor : obj.backgroundColor,
			barColor : obj.barColor,
			title : obj.title
		})

		// メニューボタンをNavBar左に設置
		win.leftNavButton = kk.ui.createMenuWindow();

		return win;
	}
})();

// モーダルウィンドウ処理
Ti.include('modalwin.js');
