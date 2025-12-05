"use strict";

(function ($) {
	// Animate elements (only desktop).
	if (window.matchMedia("(min-width: 769px)").matches) {
		// Animate buttons.
		$(".btn-animate").mouseover(function () {
			$(this).addClass("mouseover");
			$(this).find("svg").css({
				transform: "rotate(-90deg)",
				opacity: 1,
				visibility: "inherit",
			});
			$(this).find(".btn-animate__text-container").css({
				transform: "translate3d(-2em, 0px, 0px)",
			});
		});

		$(".btn-animate").mouseout(function () {
			$(this).removeClass("mouseover");
			$(this).find("svg").css({
				transform: "translate(-25px, 0px)",
				opacity: 0,
				visibility: "hidden",
			});
			$(this).find(".btn-animate__text-container").css({
				transform: "translate3d(0em, 0px, 0px)",
			});
		});

		$(".btn-slide").mousemove(function (e) {
			let elemOffset = $(this).find(".btn-slide__ellipse").offset();
			let x = e.pageX - elemOffset.left;
			let y = e.pageY - elemOffset.top;

			$(this)
				.find(".btn-slide__ellipse")
				.css({
					transform: "translate3d(" + x * 0.05 + "px, " + y * 0.05 + "px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
				});
			$(this).find(".btn-slide__text").css({
				transform: "translate3d(0px, -30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
			});
		});

		$(".btn-slide").mouseout(function (e) {
			$(this).find(".btn-slide__text").css({
				transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
			});
		});

		// Animate Section Hero Images.
		if ($(".section-hero").length) {
			$(".section-hero__image").mousemove(function (e) {
				let elemOffset = $(this).offset();
				let x = e.pageX - elemOffset.left;
				let y = e.pageY - elemOffset.top;

				$(this)
					.find(".section-hero__image-img--1")
					.css({
						transform: "translate3d(" + x * 0.05 + "px, " + y * 0.23 + "px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
					});

				$(this)
					.find(".section-hero__image-img--2")
					.css({
						transform: "translate3d(" + x * 0.1 + "px, " + y * -0.12 + "px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
					});
				$(this)
					.find(".section-hero__image-img--3")
					.css({
						transform: "translate3d(" + x * -0.07 + "px, " + y * -0.16 + "px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
					});
				$(this)
					.find(".section-hero__image-img--4")
					.css({
						transform: "translate3d(" + x * -0.13 + "px, " + y * -0.05 + "px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
					});
				$(this)
					.find(".section-hero__image-img--5")
					.css({
						transform: "translate3d(" + x * 0.1 + "px, " + y * -0.08 + "px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
					});
			});

			$(".section-hero__image").mouseout(function (e) {
				$(this).find(".section-hero__image-img").css({
					transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
					transition: "all 0.1s ease-in-out",
				});
			});
		}
	}

	// Roadmap Accordion.
	$(".section-roadmap__item-heading").on("click", function () {
		const heading = $(this);
		const content = heading.next();

		if (!heading.hasClass("opened")) {
			$(".section-roadmap__item-number").removeClass("opened");
			$(".section-roadmap__item-heading").removeClass("opened");
			$(".section-roadmap__item-content").slideUp("slow");
			heading.addClass("opened");
			heading.find(".section-roadmap__item-number").addClass("opened");
			content.slideDown("slow");
		} else {
			$(".section-roadmap__item-number").removeClass("opened");
			$(".section-roadmap__item-heading").removeClass("opened");
			$(".section-roadmap__item-content").slideUp("slow");
			heading.removeClass("opened");
			heading.find(".section-roadmap__item-number").removeClass("opened");
			content.slideUp("slow");
		}
	});

	// FAQ Accordion
	$(".section-faq__item-heading").on("click", function () {
		const heading = $(this);
		const content = heading.next();

		if (!heading.hasClass("opened")) {
			$(".section-faq__item-content").slideUp("slow");
			$(".section-faq__item-heading").removeClass("opened");
			heading.addClass("opened");
			heading.find(".section-faq__item-number").addClass("opened");
			content.slideDown("slow");
		} else {
			$(".section-faq__item-content").slideUp("slow");
			$(".section-faq__item-heading").removeClass("opened");
			heading.removeClass("opened");
			heading.find(".section-faq__item-number").removeClass("opened");
			content.slideUp("slow");
		}
	});

	// Navbar scroll buttons - show only when overflow exists
	function updateNavScrollButtons() {
		const scrollContainer = $(".navbar-nav-scroll");
		if (!scrollContainer.length) return;
		
		const container = scrollContainer[0];
		const hasOverflow = container.scrollWidth > container.clientWidth + 2;
		const scrollLeft = Math.round(container.scrollLeft);
		const maxScroll = container.scrollWidth - container.clientWidth;
		
		// Show/hide left arrow
		if (hasOverflow && scrollLeft > 2) {
			$(".nav-scroll-btn--left").addClass("visible");
		} else {
			$(".nav-scroll-btn--left").removeClass("visible");
		}
		
		// Show/hide right arrow
		if (hasOverflow && scrollLeft < maxScroll - 2) {
			$(".nav-scroll-btn--right").addClass("visible");
		} else {
			$(".nav-scroll-btn--right").removeClass("visible");
		}
	}
	
	// Initialize and update on scroll/resize
	$(window).on("load resize", function() {
		setTimeout(updateNavScrollButtons, 100);
	});
	$(".navbar-nav-scroll").on("scroll", updateNavScrollButtons);
	
	// Also run on document ready
	$(document).ready(function() {
		setTimeout(updateNavScrollButtons, 200);
	});
	
	$(".nav-scroll-btn--left").on("click", function () {
		const scrollContainer = $(".navbar-nav-scroll");
		const currentScroll = scrollContainer.scrollLeft();
		const scrollAmount = 150;
		
		scrollContainer.animate({ 
			scrollLeft: Math.max(0, currentScroll - scrollAmount) 
		}, 200, updateNavScrollButtons);
	});
	
	$(".nav-scroll-btn--right").on("click", function () {
		const scrollContainer = $(".navbar-nav-scroll");
		const currentScroll = scrollContainer.scrollLeft();
		const maxScroll = scrollContainer[0].scrollWidth - scrollContainer.width();
		const scrollAmount = 150;
		
		scrollContainer.animate({ 
			scrollLeft: Math.min(maxScroll, currentScroll + scrollAmount) 
		}, 200, updateNavScrollButtons);
	});

	// Roadmap Tile Filters
	let tilesInitialized = false;
	
	// Function to strip WOW/animate classes so they don't re-trigger
	function initTilesForFiltering() {
		if (!tilesInitialized) {
			$(".roadmap-tile").removeClass("wow animate__animated animate__fadeInUp").addClass("tile-visible");
			tilesInitialized = true;
		}
	}
	
	$(document).on("click", ".roadmap-filter-btn", function () {
		const filter = $(this).data("filter");
		
		// Update active button
		$(".roadmap-filter-btn").removeClass("active");
		$(this).addClass("active");
		
		// Initialize tiles (strip WOW classes on first filter click)
		initTilesForFiltering();
		
		// Filter tiles with staggered animation
		let showDelay = 0;
		$(".roadmap-tile").each(function (index) {
			const $tile = $(this);
			const status = $tile.data("status");
			const shouldShow = (filter === "all" || status === filter);
			const isCurrentlyVisible = $tile.hasClass("tile-visible");
			
			if (shouldShow && !isCurrentlyVisible) {
				// Show tile with staggered delay
				setTimeout(function() {
					$tile.removeClass("tile-hidden").addClass("tile-visible");
				}, showDelay);
				showDelay += 80; // Stagger each tile by 80ms
			} else if (!shouldShow && isCurrentlyVisible) {
				// Hide tile immediately (they all fade out together)
				$tile.removeClass("tile-visible").addClass("tile-hidden");
			}
		});
	});

	// Carousels Initialisation.

	$(window).on("load", function () {
		showScrollToTop();
		init_owl();
	});

	$(".scroll-to-top").on("click", function () {
		$("html, body").stop().animate(
			{
				scrollTop: 0,
			},
			200,
			"linear"
		);
		return false;
	});

	function init_owl() {
		const nftCarousel = $(".section-gallery__carousel");
		nftCarousel.owlCarousel({
			preventClicks: false,
			loop: true,
			items: 4,
			margin: 20,
			autoWidth: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			smartSpeed: 1000,
			responsive: {
				1600: {
					items: 4,
				},
				1000: {
					items: 3.2,
				},
				600: {
					items: 2.4,
				},
				0: {
					items: 1.2,
				},
			},
		});

		$(".section-gallery__carousel-prev").click(function () {
			nftCarousel.trigger("prev.owl.carousel", [500]);
			nftCarousel.trigger("stop.owl.autoplay");
		});

		$(".section-gallery__carousel-next").click(function () {
			nftCarousel.trigger("next.owl.carousel", [500]);
			nftCarousel.trigger("stop.owl.autoplay");
		});

		const reviewsCarousel = $(".section-reviews__carousel");
		reviewsCarousel.owlCarousel({
			loop: true,
			items: 3.9,
			margin: 20,
			dots: true,
			smartSpeed: 1000,
			center: true,
			responsiveClass: true,
			responsive: {
				900: {
					items: 3.9,
				},
				0: {
					items: 1.2,
				},
			},
		});

		$(".section-reviews__prev").click(function () {
			reviewsCarousel.trigger("prev.owl.carousel");
			reviewsCarousel.trigger("stop.owl.autoplay");
		});

		$(".section-reviews__next").click(function () {
			reviewsCarousel.trigger("next.owl.carousel");
			reviewsCarousel.trigger("stop.owl.autoplay");
		});

		setCarouselItemOpacity(reviewsCarousel, 0, 0.4);

		reviewsCarousel.on("next.owl.carousel", function (event) {
			setCarouselItemOpacity(reviewsCarousel, 0.4, 0.4);
		});
		reviewsCarousel.on("prev.owl.carousel", function (event) {
			setCarouselItemOpacity(reviewsCarousel, 0.4, 0.4);
		});
		reviewsCarousel.on("dragged.owl.carousel", function (event) {
			setCarouselItemOpacity(reviewsCarousel, 0.4, 0.4);
		});
		reviewsCarousel.find(".owl-dot").on("click", function (event) {
			$(".owl-item").css("opacity", 1);
		});
		reviewsCarousel.on("translated.owl.carousel", function (event) {
			setCarouselItemOpacity(reviewsCarousel, 0.4, 0.4);
		});

		function setCarouselItemOpacity(carousel, opacityFirst, opacityLast) {
			$(".owl-item").css("opacity", 1);
			const itemCarouselActive = carousel.find(".owl-item.active");
			const firstActive = itemCarouselActive[0];
			const first = $(firstActive).prev();
			const last = itemCarouselActive[itemCarouselActive.length - 1];
			$(first).css("opacity", opacityFirst);
			$(last).css("opacity", opacityLast);
		}

		const collectionCarousel = $(".section-collection__carousel");
		collectionCarousel.owlCarousel({
			preventClicks: false,
			items: 4,
			margin: 20,
			nav: false,
			dots: true,
			smartSpeed: 1000,
			responsiveClass: true,
			responsive: {
				1000: {
					items: 4,
				},
				600: {
					items: 2,
				},
				0: {
					items: 1,
				},
			},
		});

		$(".section-collection__prev").click(function () {
			collectionCarousel.trigger("prev.owl.carousel");
			collectionCarousel.trigger("stop.owl.autoplay");
		});

		$(".section-collection__next").click(function () {
			collectionCarousel.trigger("next.owl.carousel");
			collectionCarousel.trigger("stop.owl.autoplay");
		});

		const cardsCarousel = $(".section-cards-carousel__list");
		cardsCarousel.owlCarousel({
			loop: true,
			items: 2,
			margin: 20,
			stagePadding: 1,
			dots: false,
			autoWidth: false,
			smartSpeed: 1000,
			responsiveClass: true,
			responsive: {
				900: {
					items: 2,
				},
				0: {
					items: 1,
				},
			},
		});

		$(".section-cards-carousel__prev").click(function () {
			cardsCarousel.trigger("prev.owl.carousel");
			cardsCarousel.trigger("stop.owl.autoplay");
		});

		$(".section-cards-carousel__next").click(function () {
			cardsCarousel.trigger("next.owl.carousel");
			cardsCarousel.trigger("stop.owl.autoplay");
		});

		const partnersCarousel = $(".section-partners-carousel__list");
		partnersCarousel.owlCarousel({
			items: 6,
			margin: 10,
			dots: true,
			animateOut: "fadeOut",
			animateIn: "fadeIn",
			autoplay: true,
			autoplayTimeout: 2500,
			autoplayHoverPause: true,
			smartSpeed: 1000,
			responsiveClass: true,
			responsive: {
				1300: {
					items: 6,
					margin: 20,
				},
				1200: {
					items: 5,
					margin: 20,
				},
				1024: {
					items: 4,
					margin: 20,
				},
				0: {
					items: 2,
				},
			},
		});

		$(".section-partners-carousel__prev").click(function () {
			partnersCarousel.trigger("prev.owl.carousel");
			partnersCarousel.trigger("stop.owl.autoplay");
		});

		$(".section-partners-carousel__next").click(function () {
			partnersCarousel.trigger("next.owl.carousel");
			partnersCarousel.trigger("stop.owl.autoplay");
		});
	}

	function showScrollToTop() {
		const button = $(".scroll-to-top"),
			view = $(window);

		$(document).on("scroll", function () {
			if (view.scrollTop() < 400) {
				button.slideUp("slow");
			} else {
				button.slideDown("slow");
			}
		});
	}
})(jQuery);
