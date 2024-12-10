const dataSrcEls = document.querySelectorAll("[data-src]");

const observerCallback = (enteries) => {
  enteries.forEach((entery) => {
    if (entery.isIntersecting) {
      const elem = entery.target;

      elem.src = elem.dataset.src;
    }
  });
};

const observer = new IntersectionObserver(observerCallback);

dataSrcEls.forEach((dataSrcEl) => {
  observer.observe(dataSrcEl);
});
