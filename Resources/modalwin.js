// modalwin.js
// モーダルウィンドウ設定

(function() {
	kk.ui.createMenuWindow = function() {
		// メニューボタン作成
		var menubtn = Ti.UI.createButton({
			image : 'images/light_grid.png',
			//title:'menu',
			style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});

		// メニューボタンのイベント処理
		menubtn.addEventListener('click', function(e) {
			//　モーダルウィンドウ作成
			var w = Ti.UI.createWindow({
				title : 'Menu',
				barColor : '#444',
				backgroundColor : '#ccc'
			});
			w.open({modal:true});

			// Backボタン設置
			var closebtn = Ti.UI.createButton({
				title : 'close',
				style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
			});
			w.rightNavButton = closebtn;

			// モーダルウィンドウのクローズ
			closebtn.addEventListener('click', function(e) {
				w.close();
			});
		});
		return menubtn;
	}
})();
