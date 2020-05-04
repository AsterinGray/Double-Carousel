$(document).ready(function() {
  const leftElem = $(".left-content").children();
  const rightElem = $(".right-content").children();

  let leftActive = -1;
  leftElem.each(function(index) {
    if ($(this).hasClass("active")) {
      leftActive = index;
    }
  });
  let rightActive = -1;
  rightElem.each(function(index) {
    if ($(this).hasClass("active")) {
      rightActive = index;
    }
  });

  const btnNext = $("#next");
  const btnPrev = $("#prev");

  function clickNext() {
    $(".left-content > .content ").css("transform-origin", "top center");
    $(".left-content > .content.active ").css(
      "transform-origin",
      "bottom center"
    );
    $(".right-content > .content ").css("transform-origin", "bottom center");
    $(".right-content > .content.active ").css(
      "transform-origin",
      "top center"
    );
    const tempElemL = leftElem.toArray();
    const tempElemR = rightElem.toArray();
    tempElemL[leftActive].classList.remove("active");
    tempElemR[rightActive].classList.remove("active");
    leftActive = leftActive + 1 >= tempElemL.length ? 0 : leftActive + 1;
    rightActive = rightActive + 1 >= tempElemR.length ? 0 : rightActive + 1;
    tempElemL[leftActive].classList.add("active");
    tempElemR[rightActive].classList.add("active");
  }
  function clickPrev() {
    $(".left-content > .content ").css("transform-origin", "bottom center");
    $(".left-content > .content.active ").css("transform-origin", "top center");
    $(".right-content > .content ").css("transform-origin", "top center");
    $(".right-content > .content.active ").css(
      "transform-origin",
      "bottom center"
    );
    const tempElemL = leftElem.toArray();
    const tempElemR = rightElem.toArray();
    tempElemL[leftActive].classList.remove("active");
    tempElemR[rightActive].classList.remove("active");
    leftActive = leftActive - 1 < 0 ? tempElemL.length - 1 : leftActive - 1;
    rightActive = rightActive - 1 < 0 ? tempElemR.length - 1 : rightActive - 1;
    tempElemL[leftActive].classList.add("active");
    tempElemR[rightActive].classList.add("active");
  }
  let interval = setInterval(clickNext, 2000);
  btnNext.click(function() {
    clickNext();
    clearInterval(interval);
  });
  btnPrev.click(function() {
    clickPrev();
    clearInterval(interval);
  });
});