var Core9 = {

	body : document.querySelector('body'),
	center : document.querySelector('.center'),
	header : document.querySelector('header'),
	footer : document.querySelector('footer'),
	
	slideshow : document.querySelector('.slideshow'),
	slides : document.querySelectorAll('.slide'),
	slideLabels : document.querySelectorAll('.slide label'),

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
		Core9._setBodyBackground();
		Core9._resizeCenter();
		Core9._resizeSlideshow();
	},
	
	_resizeSlideshow : function(){
		
			Core9.slideshow.style.setProperty('height', (Core9.body.clientHeight
					- Core9.header.clientHeight - Core9.footer.clientHeight)
					+ 'px');

		  for(i=0; i<Core9.slideLabels.length; i++) {
			  Core9.slideLabels[i].style.top = (Core9.body.clientHeight
						- Core9.header.clientHeight - 30) + 'px';
			  Core9.slideLabels[i].style.left = (Core9.body.clientWidth
						- 80) + 'px';
		  }

	},

	_resizeCenter : function() {
		Core9.center.style.setProperty('top', Core9.header.clientHeight + 'px');
		Core9.center.style.setProperty('height', (Core9.body.clientHeight
				- Core9.header.clientHeight)
				+ 'px');
	},

	_setBodyBackground : function() {
		document.querySelector('body').style
				.setProperty('background',
						'#020322 url("assets/images/mountain.png") no-repeat bottom left');
		document.querySelector('body').style.setProperty('background-size',
				'100% 100%');
	}

}

Core9.init();