document.addEventListener("click", function (e) {
  if (e.target.closest("li")) {
    if (e.target.closest("li.expand")) {
      console.log("remove");
      e.target.closest("li.expand").classList.remove("expand");
    } else {
      e.target.closest("li").classList.add("expand");
    }
  }
});
