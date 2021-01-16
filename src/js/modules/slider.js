function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
  //SLIDER second variant with dot's nav

    let slideIndex = 1;
    let offset = 0;

  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";
  slidesWrapper.style.overflow = "hidden";
  slides.forEach((slide) => {
    slide.style.width = width;
  });
  slider.style.position = "relative";
  const indicators = document.createElement("ol"),
    dots = [];
  indicators.classList.add("carousel-indicators");
  indicators.classList.add("indicators");
  slider.append(indicators);
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dots");
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  function checkZeroIndicator(current, total) {
    if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
    } else {
      total.textContent = slides.length;
      current.textContent = slideIndex;
    }
  }
  function makeDotsOpacity(dotsArray) {
    try {
      dotsArray.forEach((dot) => (dot.style.opacity = ".5"));
    } finally {
      dotsArray[slideIndex - 1].style.opacity = 1;
    }
  }
  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }

  checkZeroIndicator(current, total);

  next.addEventListener("click", () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    checkZeroIndicator(current, total);
    makeDotsOpacity(dots);
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
    checkZeroIndicator(current, total);
    makeDotsOpacity(dots);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      checkZeroIndicator(current, total);
      makeDotsOpacity(dots);
    });
  });

  //SLIDER first variant
  // const slides = document.querySelectorAll(".offer__slide"),
  //   prev = document.querySelector(".offer__slider-prev"),
  //   next = document.querySelector(".offer__slider-next");
  //   total = document.querySelector('#total');
  //   current = document.querySelector('#current');
  // let slideIndex = 1;

  // function showSlides(n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }

  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach(item => (item.style.display = "none"));
  //   slides[slideIndex - 1].style.display = "block";

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // }

  // //change slide
  // function plusSlides(n) {
  //   showSlides((slideIndex += n));
  // }
  // prev.addEventListener("click", () => {
  //   plusSlides(-1);
  // });
  // next.addEventListener("click", () => {
  //   plusSlides(1);
  // });

  // showSlides(slideIndex);
  // if (slides.length < 10) {
  //  total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // };
}

export default slider;