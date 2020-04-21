var $prepareSlider = $(".prepare-slider .owl-carousel");
$prepareSlider.owlCarousel({
  items: 4,
  dotsContainer: $('[s-control="prepare"] .slider__nav__container'),
  margin: 73,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
      dotsEach: 1,
    },
    1200: {
      items: 4,
      slideBy: 4,
      dotsEach: 4,
    },
  },
});
$('[s-control="prepare"] .prev').on("click", function () {
  $prepareSlider.trigger("prev.owl.carousel");
});
$('[s-control="prepare"] .next').on("click", function () {
  $prepareSlider.trigger("next.owl.carousel");
});

var $fbSlider = $(".feedback-slider .owl-carousel");
$fbSlider.owlCarousel({
  items: 4,
  dotsContainer: $('[s-control="feedback"] .slider__nav__container'),
  autoHeight: true,
  margin: 73,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
      dotsEach: 1,
    },
    1200: {
      items: 4,
      slideBy: 4,
      dotsEach: 4,
    },
  },
});
$('[s-control="feedback"] .prev').on("click", function () {
  $fbSlider.trigger("prev.owl.carousel");
});
$('[s-control="feedback"] .next').on("click", function () {
  $fbSlider.trigger("next.owl.carousel");
});

var videoBlocks = Array.prototype.slice.call(
  document.querySelectorAll(".text-video")
);

videoBlocks.forEach(function (block) {
  if (document.body.classList.contains('is-admin')) return;
  var $fbSlider = $(block.querySelector(".owl-carousel"));
  $fbSlider.owlCarousel({
    items: 1,
    slideBy: 1,
    dotsEach: 1,
    dotsContainer: $(
      block.querySelector('[s-control="feedback"] .slider__nav__container')
    ),
    autoHeight: true,
    margin: 73,
    loop: true,
    dots: true,
  });
  $(block.querySelector('[s-control="feedback"] .prev')).on(
    "click",
    function () {
      $fbSlider.trigger("prev.owl.carousel");
    }
  );
  $(block.querySelector('[s-control="feedback"] .next')).on(
    "click",
    function () {
      $fbSlider.trigger("next.owl.carousel");
    }
  );
});

var $partnerSlider = $(".partners-slider .owl-carousel");
$partnerSlider.owlCarousel({
  dots: true,
  margin: 60,
  items: 8,
  loop: true,
  dotsEach: 3,
  slideBy: 3,
  dotsContainer: $('[s-control="partners"] .slider__nav__container'),
  responsive: {
    0: {
      items: 3,
      margin: 30,
    },
    1200: {
      items: 8,
    },
  },
});

$('[s-control="partners"] .prev').on("click", function () {
  $partnerSlider.trigger("prev.owl.carousel");
});
$('[s-control="partners"] .next').on("click", function () {
  $partnerSlider.trigger("next.owl.carousel");
});

var $medicsSlider = $(".medics .owl-carousel");
$medicsSlider.owlCarousel({
  dots: true,
  margin: 60,
  items: 4,
  // loop:true,
  dotsEach: 3,
  slideBy: 3,
  dotsContainer: $('[s-control="medics"] .slider__nav__container'),
  responsive: {
    0: {
      items: 1,
      margin: 30,
    },
    1200: {
      items: 4,
    },
  },
});
$('[s-control="medics"] .prev').on("click", function () {
  $medicsSlider.trigger("prev.owl.carousel");
});
$('[s-control="medics"] .next').on("click", function () {
  $medicsSlider.trigger("next.owl.carousel");
});

var eduSections = Array.prototype.slice.call(
  document.querySelectorAll(".education")
);

eduSections.forEach(function (element) {
  var carouselElement = $(element.querySelector(".owl-carousel"));
  var nextBtn = element.querySelector('[s-control="edu"] .next');
  var prevBtn = element.querySelector('[s-control="edu"] .prev');
  carouselElement.owlCarousel({
    dots: true,
    margin: 60,
    items: 4,
    loop: false, // копирование слайдов
    dotsEach: 3,
    slideBy: 3,
    dotsContainer: $(
      element.querySelector('[s-control="edu"] .slider__nav__container')
    ),
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      1200: {
        items: 4,
      },
    },
  });

  prevBtn.addEventListener("click", function () {
    carouselElement.trigger("prev.owl.carousel");
  });
  nextBtn.addEventListener("click", function () {
    carouselElement.trigger("next.owl.carousel");
  });
});

if (!$("body").hasClass("is-admin")) {
  $(".procedures.slider").each(function () {
    let $procedSliderContainer = $(this);
    let $procedSlider = $(this).find(".owl-carousel");

    let vanillaContainer = $procedSliderContainer[0];
    const slides = Array.prototype.slice.call(
      vanillaContainer.querySelectorAll(".blog__tile")
    );

    function notInitialize() {
      console.log("Slides length", slides.length);
      if (
        window.matchMedia("(min-width: 1200px)").matches &&
        slides.length <= 3
      ) {
        return true;
      } else {
        return false;
      }
    }

    $procedSlider.owlCarousel({
      dots: notInitialize() ? false : true,
      margin: 0,
      loop: notInitialize() ? false : true,
      dotsEach: 3,
      slideBy: 3,
      dotsContainer: $procedSliderContainer.find(
        '[s-control="procedures"] .slider__nav__container'
      ),
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
          margin: 30,
        },
        1200: {
          items: 3,
          slideBy: 3,
        },
      },
    });
    $procedSliderContainer
      .find('[s-control="procedures"] .prev')
      .on("click", function () {
        $procedSlider.trigger("prev.owl.carousel");
      });
    $procedSliderContainer
      .find('[s-control="procedures"] .next')
      .on("click", function () {
        $procedSlider.trigger("next.owl.carousel");
      });

    if (notInitialize()) {
      $procedSliderContainer
        .find('[s-control="procedures"] .prev')
        .css("display", "none");

      $procedSliderContainer
        .find('[s-control="procedures"] .next')
        .css("display", "none");
    }
  });
}

$('.faq .d-none a[data-toggle="collapse"]').on("click", function () {
  if (
    $(this).attr("aria-expanded") === "true" ||
    !$dirGroup.find(".collapsing")
  ) {
    return false;
  }
});
$('.faq .d-lg-none a[data-toggle="collapse"]').on("click", function () {
  if (
    $(this).attr("aria-expanded") === "true" ||
    !$dirGroup.find(".collapsing")
  ) {
    return false;
  }
});

//scrolling and sticky menu scripts

$(".sticky-menu__item").on("click", function (e) {
  e.preventDefault();
  let el = document.querySelector(e.target.attributes.href.value);
  let offset = $(e.target.attributes.href.value).offset().top;
  window.scroll({
    top: offset - 120,
    left: 0,
    behavior: "smooth",
  });
});

var section = document.querySelectorAll(".about-section");
var sections = {};
var i = 0;

Array.prototype.forEach.call(section, function (e) {
  sections[e.id] = $(e).offset().top - 130;
});

window.onscroll = function () {
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (i in sections) {
    if (sections[i] <= scrollPosition) {
      document
        .querySelector(".sticky-menu .active")
        .setAttribute("class", "sticky-menu__item ");
      document
        .querySelector(".sticky-menu a[href*=" + i + "]")
        .setAttribute("class", "sticky-menu__item active");
    }
  }
};

var faqLinks = Array.prototype.slice.call(
  document.querySelectorAll(".faq__link")
);

faqLinks.forEach(function (link) {
  var container = link.closest(".faq");
  console.log("FAQ link", link);
  if (container) {
    link.addEventListener("click", function (event) {
      if (Element.prototype.scrollTo) {
        var elementOffset =
          container.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementOffset,
          behavior: "smooth",
        });
      } else {
        console.error("ScrollTo is not supported in your browser");
      }
    });
  } else {
    console.error("Parent not found");
  }
});
