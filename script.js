const Accordions = document.querySelectorAll(".accordion_item");

Accordions.forEach(function (each) {
  each.addEventListener("click", function () {
    this.classList.toggle("active");

    const accordianContent = this.querySelector(".accordion_content");
    if (accordianContent.style.maxHeight) {
      accordianContent.style.maxHeight = null;
    } else {
      accordianContent.style.maxHeight = accordianContent.scrollHeight + "px";
    }
  });
});
