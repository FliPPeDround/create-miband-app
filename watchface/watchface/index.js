try {
    (() => {
      var n = __$$hmAppManager$$__.currentApp;
      const g = n.current,
        { px: e } =
          (new DeviceRuntimeCore.WidgetFactory(
            new DeviceRuntimeCore.HmDomApi(n, g)
          ),
          n.app.__globals__),
        p = Logger.getLogger("watchface6");
      g.module = DeviceRuntimeCore.WatchFace({
        init_view() {
          hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 192,
            h: 490,
            src: "2.png",
            show_level: hmUI.show_level.ONLY_NORMAL
          }),
            hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_zero: 0,
              hour_startX: 18,
              hour_startY: 47,
              hour_array: [
                "3.png",
                "4.png",
                "5.png",
                "6.png",
                "7.png",
                "8.png",
                "9.png",
                "10.png",
                "11.png",
                "12.png"
              ],
              hour_space: 3,
              hour_unit_sc: "13.png",
              hour_unit_tc: "13.png",
              hour_unit_en: "13.png",
              hour_align: hmUI.align.RIGHT,
              minute_zero: 1,
              minute_array: [
                "3.png",
                "4.png",
                "5.png",
                "6.png",
                "7.png",
                "8.png",
                "9.png",
                "10.png",
                "11.png",
                "12.png"
              ],
              minute_follow: 1,
              show_level: hmUI.show_level.ONLY_NORMAL
            }),
            hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 52,
              month_startY: 110,
              month_sc_array: [
                "14.png",
                "15.png",
                "16.png",
                "17.png",
                "18.png",
                "19.png",
                "20.png",
                "21.png",
                "22.png",
                "23.png"
              ],
              month_tc_array: [
                "14.png",
                "15.png",
                "16.png",
                "17.png",
                "18.png",
                "19.png",
                "20.png",
                "21.png",
                "22.png",
                "23.png"
              ],
              month_en_array: [
                "14.png",
                "15.png",
                "16.png",
                "17.png",
                "18.png",
                "19.png",
                "20.png",
                "21.png",
                "22.png",
                "23.png"
              ],
              month_unit_sc: "24.png",
              month_unit_tc: "24.png",
              month_unit_en: "24.png",
              month_align: hmUI.align.RIGHT,
              month_zero: 0,
              month_follow: 0,
              month_space: 1,
              month_is_character: !1,
              day_sc_array: [
                "14.png",
                "15.png",
                "16.png",
                "17.png",
                "18.png",
                "19.png",
                "20.png",
                "21.png",
                "22.png",
                "23.png"
              ],
              day_tc_array: [
                "14.png",
                "15.png",
                "16.png",
                "17.png",
                "18.png",
                "19.png",
                "20.png",
                "21.png",
                "22.png",
                "23.png"
              ],
              day_en_array: [
                "14.png",
                "15.png",
                "16.png",
                "17.png",
                "18.png",
                "19.png",
                "20.png",
                "21.png",
                "22.png",
                "23.png"
              ],
              day_zero: 1,
              day_follow: 1,
              day_is_character: !1,
              show_level: hmUI.show_level.ONLY_NORMAL
            }),
            hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 102,
              y: 161,
              week_en: [
                "25.png",
                "26.png",
                "27.png",
                "28.png",
                "29.png",
                "30.png",
                "31.png"
              ],
              week_tc: [
                "25.png",
                "26.png",
                "27.png",
                "28.png",
                "29.png",
                "30.png",
                "31.png"
              ],
              week_sc: [
                "25.png",
                "26.png",
                "27.png",
                "28.png",
                "29.png",
                "30.png",
                "31.png"
              ],
              show_level: hmUI.show_level.ONLY_NORMAL
            }),
            hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "33.png",
              show_level: hmUI.show_level.ONLY_AOD
            }),
            hmUI.createWidget(hmUI.widget.TIME_POINTER, {
              hour_centerX: 96,
              hour_centerY: 245,
              hour_posX: 12,
              hour_posY: 68,
              hour_path: "34.png",
              hour_cover_path: "",
              hour_cover_x: 84,
              hour_cover_y: 233,
              minute_centerX: 96,
              minute_centerY: 245,
              minute_posX: 12,
              minute_posY: 84,
              minute_path: "36.png",
              minute_cover_path: "35.png",
              minute_cover_x: 84,
              minute_cover_y: 233,
              show_level: hmUI.show_level.ONLY_AOD
            });

            //---------------------------------分割线-------------------------------------

            const img_bkg = hmUI.createWidget(hmUI.widget.IMG, {   //小程序图标
              x: 44,
              y: 401,
              src: "32.png",
              show_level: hmUI.show_level.ONLY_NORMAL
            })
            img_bkg.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
              //控件注册事件监听
              console.log(info.x);
              switchUI(false);
            })
            
            let txtBg = hmUI.createWidget(hmUI.widget.FILL_RECT, {    // 自定义组件容器
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              color: 0xFFFFFF
              })
            txtBg.setProperty(hmUI.prop.VISIBLE, false)
            let txtGroup = hmUI.createWidget(hmUI.widget.GROUP, {
              x: 0,
              y: 0,
              w: 192,
              h: 490
            })

            function switchUI(b){
              img_bkg.setProperty(hmUI.prop.VISIBLE, b);
              txtBg.setProperty(hmUI.prop.VISIBLE, !b);
              txtGroup.setProperty(hmUI.prop.VISIBLE, !b);
            }

				    // 自定义组件部分
				    let txtWd = txtGroup.createWidget(hmUI.widget.TEXT,{      // 文本
				    	x: 6,
				    	y: 100,
				    	w: 180,
				    	h: 50,
				    	color: "0x000000",
				    	text_size: 20,
				    	text_style: hmUI.text_style.WRAP,
				    	text: '请发挥你的想象力吧！'
				    })
            
			    	function backButtonClickFunc(button) {          // 返回按钮
			    		switchUI(true);
			    	}
			    	const backButton = txtGroup.createWidget(hmUI.widget.BUTTON, {
			    	  x: 0,
		    		  y: 0,
		    		  w: 192,
		    		  h: 50,
		    		  press_color: 0xC3C3C3,
		    		  normal_color: 0xEFEFEF,
		    		  text: '返回',
			    	  color: 0x000000,
			    	  click_func: backButtonClickFunc
			    	})

            txtGroup.setProperty(hmUI.prop.VISIBLE, false);    // 设置隐藏
        },
        onInit() {
          p.log("index page.js on init invoke");
        },
        build() {
          this.init_view(), p.log("index page.js on ready invoke");
        },
        onDestory() {
          p.log("index page.js on destory invoke");
        }
      });
    })();
  } catch (n) {
    console.log(n);
  }
  