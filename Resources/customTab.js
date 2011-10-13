// customTab.js
// カスタムタブ作成

(function() {
	kk.ui.createCustomTab = function() {
		// tab初期設定
		var tg = Ti.UI.createTabGroup();

		var win = Ti.UI.createWindow({
			width : 320,
			height : 60,
			bottom : 0
		});
		
		// tab作成
		var makeTab = function(obj) {
			var tt = Ti.UI.createTab({
				title : obj.title,
				window : obj.window
			})
			// 生成したtabを設置
			tg.addTab(tt);
						
			// 真ん中のtabのみカスタムイメージを設定
			// ボタンにしたいため、ここからちょっとイレギュラー処理
			if(obj.active != 1) { // 真ん中のtab以外の処理
				var tview = Ti.UI.createView({
					width : 100,
					height : 45,
					bottom : 2,
					left : obj.loc
				})
				tview.addEventListener('click', function(e) {
					//	animateCt(obj.animate);　// 今回アニメーション無し
					tg.setActiveTab(obj.active);
				});
				var img = Ti.UI.createImageView({ // tabアイコン設定
					image : "images/" + obj.img,
					width : "auto",
					height : "auto",
					top : 0
				});
				tview.add(img);

				var lbl = Ti.UI.createLabel({ // tabラベル設定
					text : obj.title,
					font : {
						fontWeight : 'bold',
						fontSize : 10
					},
					color : '#fff',
					width : 'auto',
					height : 'auto',
					bottom : 0,
					shadowColor : '#000',
					shadowOffset : {
						x : 0,
						y : 1
					}
				});

				tview.add(lbl);

				win.add(tview);

			} else { // 真ん中のtab処理
				var tBtn = Ti.UI.createButton({ // カスタムイメージボタン設定
					backgroundImage : 'images/Shoot.png',
					width : 102,
					height : 59,
					bottom : 0,
					opacity : 1.0
				});
				win.add(tBtn);

				tBtn.addEventListener('click', function(e) {
					tg.setActiveTab(obj.active);
				});
			}

		}
		

		// 各tabのプロパティー設定
		makeTab({ // tab1
			loc : 5,
			title : 'facebook',
			img : 'Facebook.png',
			active : 0,
			window : kk.ui.createAppWindow({
				backgroundColor : '#fff',
				barColor : '#222',
				title : 'Facebook'
			})
		});

		makeTab({ // tab2
			loc : 110,
			title : 'Camera!',
			img : 'light_camera.png',
			active : 1,
			window : kk.ui.createAppWindow({
				backgroundColor : '#ccc',
				barColor : '#222',
				title : 'Camera'
			})
		});

		makeTab({ // tab3
			loc : 217,
			title : 'Feed',
			img : 'Twitter.png',
			active : 2,
			window : kk.ui.createAppWindow({
				backgroundColor : '#aeaeae',
				barColor : '#222',
				title : 'Feed'
			})
		});

		tg.open();

		return win;
	}

})();