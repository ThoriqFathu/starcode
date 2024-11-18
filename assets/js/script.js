$(function () {
	$(".navbar-toggle").click(function () {
		$(this).toggleClass("act");
		if ($(this).hasClass("act")) {
			$(".main-menu").addClass("act");
		} else {
			$(".main-menu").removeClass("act");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(document).on("click", ".page-scroll a", function (event) {
		var $anchor = $(this);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $($anchor.attr("href")).offset().top,
				},
				1000,
				"easeInOutExpo"
			);
		event.preventDefault();
	});

	// Highlight the top nav as scrolling occurs
	$("body").scrollspy({
		target: ".site-header",
		offset: 10,
	});

	/* Progress bar */
	var $section = $(".section-skills");
	function loadDaBars() {
		$(".progress .progress-bar").progressbar({
			transition_delay: 500,
		});
	}

	$(document).bind("scroll", function (ev) {
		var scrollOffset = $(document).scrollTop();
		var containerOffset = $section.offset().top - window.innerHeight;
		if (scrollOffset > containerOffset) {
			loadDaBars();
			// unbind event not to load scrolsl again
			$(document).unbind("scroll");
		}
	});

	/* Counters  */
	if ($(".section-counters .start").length > 0) {
		$(".section-counters .start").each(function () {
			var stat_item = $(this),
				offset = stat_item.offset().top;
			$(window).scroll(function () {
				if (
					$(window).scrollTop() > offset - 1000 &&
					!stat_item.hasClass("counting")
				) {
					stat_item.addClass("counting");
					stat_item.countTo();
				}
			});
		});
	}

	// another custom callback for counting to infinity
	$("#infinity").data("countToOptions", {
		onComplete: function (value) {
			count.call(this, {
				from: value,
				to: value + 1,
			});
		},
	});

	$("#infinity").each(count);

	function count(options) {
		var $this = $(this);
		options = $.extend(
			{},
			options || {},
			$this.data("countToOptions") || {}
		);
		$this.countTo(options);
	}

	// Navigation overlay
	var s = skrollr.init({
		forceHeight: false,
		smoothScrolling: false,
		mobileDeceleration: 0.004,
		mobileCheck: function () {
			//hack - forces mobile version to be off
			return false;
		},
	});

	// Data Portfolio
	const portfolioItems = [
		{
			image: "assets/img/1.png",
			title: "E-LEARNING",
			description: "Details of Portfolio Item 2",
			link: "https://github.com/ThoriqFathu/apptodo",
		},
		{
			image: "assets/img/2.png",
			title: "SISTEM PPDB",
			description: "Details of Portfolio Item 3",
			link: "https://github.com/ThoriqFathu/apptodo",
		},
		{
			image: "assets/img/3.png",
			title: "REPOSITORY",
			description: "Details of Portfolio Item 1",
			link: "https://github.com/ThoriqFathu/apptodo",
		},
		{
			image: "assets/img/4.png",
			title: "SEWAKUY",
			description: "Details of Portfolio Item 1",
			link: "https://github.com/ThoriqFathu/apptodo",
		},
		{
			image: "assets/img/5.png",
			title: "KLASIFIKASI KNN",
			description: "Details of Portfolio Item 2",
			link: "https://github.com/ThoriqFathu/apptodo",
		},
		{
			image: "assets/img/6.png",
			title: "SISTEM WARUNG",
			description: "Details of Portfolio Item 3",
			link: "https://github.com/ThoriqFathu/apptodo",
		},
		{
			image: "assets/img/7.png",
			title: "MADURESE TRANSLATION",
			description: "Details of Portfolio Item 3",
			link: "https://github.com/ThoriqFathu/apptodo",
		},
		{
			image: "assets/img/8.png",
			title: "KAMUS BAHASA MADURA",
			description: "Details of Portfolio Item 3",
			link: "https://github.com/ThoriqFathu/apptodo",
		},
		{
			image: "assets/img/9.png",
			title: "SPELLING CORRECTION",
			description: "Details of Portfolio Item 3",
			link: "https://github.com/ThoriqFathu/apptodo",
		},
		{
			image: "assets/img/10.png",
			title: "SISTEM REKOMENDASI FILM",
			description: "Details of Portfolio Item 3",
			link: "https://github.com/ThoriqFathu/apptodo",
		},
	];

	// Render Portfolio
	const portfolioContainer = document.getElementById("portfolio-container");
	const modalContainer = document.getElementById("modal-container");

	portfolioItems.forEach((item, index) => {
		// Portfolio HTML
		const portfolioHTML = `
						<div class="col-md-4 col-xs-6">
						<div class="portfolio-item">
							<img src="${item.image}" class="img-res" alt="${item.title}" />
							<div class="portfolio-item-info">
							<h4>${item.title}</h4>
							<a href="#" data-toggle="modal" data-target="#portfolioModal${index}">
								<span class="glyphicon glyphicon-eye-open"></span>
							</a>
							<a href="${item.link}" target=_blank>
								<span class="glyphicon glyphicon-link"></span>
							</a>
							</div>
						</div>
						</div>
					`;

		portfolioContainer.innerHTML += portfolioHTML;

		// Modal HTML
		const modalHTML = `
						<div
						class="modal fade"
						id="portfolioModal${index}"
						tabindex="-1"
						role="dialog"
						aria-labelledby="portfolioModalLabel${index}"
						>
							<div class="modal-dialog" role="document">
								<div class="modal-content">
								<div class="modal-header">
									<a class="close" data-dismiss="modal"
										><span
											class="glyphicon glyphicon-remove"
										></span
									></a>
									<img src="${item.image}" alt="${item.title}" class="img-res" />
									</div>
									<div class="modal-body">
										<h4 class="modal-title" id="portfolioModalLabel${index}">${item.title}</h4>
										<p>${item.description}</p>
										
									</div>
									<div class="modal-footer">
										<a href="${item.link}" target=_blank class="btn btn-fill">Visit Page</a>
									</div>
								</div>
							</div>
						</div>
					`;

		modalContainer.innerHTML += modalHTML;
	});
});
