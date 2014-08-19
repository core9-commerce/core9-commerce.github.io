var Core9 = {

	init : function() {
		Core9.setEvents();
		Core9.setStage();
	},

	setEvents : function() {
		window.onresize = function() {
			Core9.setStage();
		};
	},

	setStage : function() {
		Core9._resizeMainHeight();
		Core9._resizeMainWidth();
		Core9._setBodyBackground();
	},

	_setBodyBackground : function() {
		document.querySelector('body').style
				.setProperty('background',
						'#020322 url("assets/images/mountain.png") no-repeat bottom left');
		document.querySelector('body').style.setProperty('background-size',
				'100% 100%');
	},

	_resizeMainWidth : function() {
		document.querySelector('#main-container').style.setProperty('width',
				(parseInt(document.body.clientWidth) + 40) + 'px');
		document.querySelector('#main').style.setProperty('padding-right',
				'40px');
	},

	_resizeMainHeight : function() {
		document.querySelector('#main-container').style
				.setProperty(
						'max-height',
						(parseInt(document.querySelector('html').clientHeight)
								- parseInt(document
										.querySelector('#header-container').clientHeight)
								- parseInt(document
										.querySelector('#footer-container').clientHeight) - 80)
								+ 'px');
	}

}

Core9.init();