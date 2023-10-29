// Show Image
const show = document.querySelector(".img-container"),
  mainImg = document.querySelector(".img-main");
console.log(show);
show.addEventListener("click", function (e) {
  "img-show-click img-thumbnail" == e.target.className &&
    (mainImg.src = e.target.src);
});
