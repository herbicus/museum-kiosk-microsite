console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}

	var menuAnimation = new TimelineMax({paused: true});
	menuAnimation.to(".mobile-nav-menu", 0.75, { autoAlpha: 1, left: 0, ease: Back.easeInOut});

	// MOBILE ICON - HAMBURGER
	$(".mobile-nav-btn").on("click", function(){
		$(this).toggleClass("open");

  		if ($(this).hasClass("played")) {
  			menuAnimation.reverse();	
  		} else {
  			menuAnimation.play();
  		}	
  		$(this).toggleClass("played");
	});

	var heroBgParallax = new TimelineMax({paused: true});
				
	heroBgParallax.to(".l-hero-section", 2, {css:{"background-position-y": 300}});

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 5000;

		$(".l-hero-section").waypoint(function() {
			heroBgParallax.seek(parallaxTiming);

		}, { offset: "90%" });
	});

	// waypoints stuff
	$(".ken-section-1").waypoint(function() {

		TweenMax.to(".l-outline-img" , 0.75, {
			left: "50%",
			autoAlpha: 1,
			ease: Back.easeInOut
		});

	}, { offset: "50%" });

	$(".ken-section-2").waypoint(function() {

		TweenMax.to(".l-console-img" , 0.75, {
			top: "50%",
			autoAlpha: 1,
			ease: Back.easeInOut
		});

	}, { offset: "50%" });

	$(".ken-section-3").waypoint(function() {

		TweenMax.to(".l-3-display-img" , 0.75, {
			top: "40%",
			scale: 1,
			autoAlpha: 1,
			ease: Back.easeInOut
		});

		TweenMax.to(".l-3-console-img" , 0.75, {
			top: "80%",
			autoAlpha: 1,
			ease: Quad.easeInOut
		});

	}, { offset: "30%" });

	$(".ken-section-4").waypoint(function() {

		TweenMax.to(".l-4-display-img" , 0.75, {
			top: "40%",
			scale: 1,
			autoAlpha: 1,
			ease: Back.easeInOut
		});

		TweenMax.to(".l-4-console-img" , 0.75, {
			top: "80%",
			autoAlpha: 1,
			ease: Quad.easeInOut
		});

	}, { offset: "30%" });


	// --------------------------------------------------------------
	// ----- old index waypoints animation stuff
	// --------------------------------------------------------------

	// waypoints stuff
	$(".l-section-2").waypoint(function() {

		TweenMax.to(".l-kiosk-img" , 0.75, {
			left: 0,
			autoAlpha: 1,
			ease: Back.easeInOut
		});

		TweenMax.to(".section-2-copy" , 0.75, {
			left: 0,
			autoAlpha: 1,
			ease: Back.easeInOut
		});

	}, { offset: "50%" });

	$(".l-section-3").waypoint(function() {

		TweenMax.staggerTo(".section-3-content .four-col" , 0.5, {
			top: 0,
			autoAlpha: 1,
			ease: Back.easeInOut
		}, 0.25);

	}, { offset: "50%" });

	// FEATURE SECTIN ANIMATIONS

	// Feature 1
	var featuredSectionAnimation1 = new TimelineMax({paused: true});
				
	featuredSectionAnimation1.to(".feature-1-copy", 1, {autoAlpha: 1, left: 0, ease: Quad.easeInOut });
	featuredSectionAnimation1.to(".feature-1-img", 1, {autoAlpha: 1, left: 0, ease: Quad.easeInOut }, 0.35);
	
	$(".l-feature-1").waypoint(function() {

		featuredSectionAnimation1.play();
		console.log("feature 1");

	}, { offset: "50%" });

	// Feature 2
	var featuredSectionAnimation2 = new TimelineMax({paused: true});
				
	featuredSectionAnimation2.to(".feature-2-img", 1, {autoAlpha: 1, left: 0, ease: Quad.easeInOut });
	featuredSectionAnimation2.to(".feature-2-copy", 1, {autoAlpha: 1, left: 0, ease: Quad.easeInOut }, 0.35);

	$(".l-feature-2").waypoint(function() {

		featuredSectionAnimation2.play();
		console.log("feature 2");

	}, { offset: "90%" });

	// Feature 3
	var featuredSectionAnimation3 = new TimelineMax({paused: true});
				
	featuredSectionAnimation3.to(".feature-3-copy", 1, {autoAlpha: 1, left: 0, ease: Quad.easeInOut });
	featuredSectionAnimation3.to(".feature-3-img", 1, {autoAlpha: 1, left: 0, ease: Quad.easeInOut }, 0.35);
	
	$(".l-feature-3").waypoint(function() {

		featuredSectionAnimation3.play();
		console.log("feature 3");

	}, { offset: "90%" });

	// Feature 4
	var featuredSectionAnimation4 = new TimelineMax({paused: true});
				
	featuredSectionAnimation4.to(".feature-4-img", 1, {autoAlpha: 1, left: 0, ease: Quad.easeInOut });
	featuredSectionAnimation4.to(".feature-4-copy", 1, {autoAlpha: 1, left: 0, ease: Quad.easeInOut }, 0.35);

	$(".l-feature-4").waypoint(function() {

		featuredSectionAnimation4.play();
		console.log("feature 4");

	}, { offset: "90%" });

	// HERO ANIMATION
	var heroTimeline = new TimelineMax({paused: true});
	heroTimeline.to(".l-hero-lines", 0.5, { height: 150, autoAlpha: 1, ease: Quad.easeInOut });
	heroTimeline.to(".l-hero-lines img", 0.5, {left: "50%", autoAlpha: 1, ease: Back.easeInOut }, 0.25);

	window.onload = function(){
	
		heroTimeline.play();

	};

	// init
	var init = function() {
	
	};

	shared.init = init;

	return shared;

}());

$(document).ready(function() {
	cornerstoneAPI.init();
});
