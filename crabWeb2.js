function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
var aTags;
var found;
(async function () {
  for (let i2 = 0; i2 < 9999; i2++) {
    let choose1 = choose([
      "comment-hidden-group__toggle",
      // "comment__more",
      // "comment-toggle-children__icon",
      // "comment-toggle-children ",
      // "comment-hidden-group",
      // "comments__more-count",
      // "comment-toggle-children_collapse",
      // "comment-hidden-group",
      "comment-toggle-children__label",
      "comments__more-button"
    ])
    aTags = document.getElementsByClassName(choose1);
    var wasopened = false;
    for (var i = 0; i < aTags.length; i++) {
      var havetoClick = false;



      if (aTags[i].classList.contains("comment-hidden-group__toggle")) {
        havetoClick = true;
      }

      if (aTags[i].classList.contains("mystyle11")) {
        havetoClick = false;
      }


      for (var child1 of aTags[i].parentElement.children) {
        if (child1.classList.contains("comment__children") || child1.classList.contains("comment-hidden-group__children"))
          if (child1.visibility === "hidden" || child1.hidden) {
            havetoClick = true;
          }
      }
      for (var child1 of aTags[i].parentElement.parentElement.children) {
        if (child1.classList.contains("comment__children") || child1.classList.contains("comment-hidden-group__children"))
          if (child1.visibility === "hidden" || child1.hidden) {
            havetoClick = true;
          }
      }
      for (var child1 of aTags[i].parentElement.parentElement.parentElement.children) {
        if (child1.classList.contains("comment__children") || child1.classList.contains("comment-hidden-group__children"))
          if (child1.visibility === "hidden" || child1.hidden) {
            havetoClick = true;
          }
      }


      if (havetoClick) {
        found = aTags[i];
        await found.click();
        found.classList.add("mystyle11");
        wasopened = true;
        await sleep(100);

      }
    }
    if (wasopened)
      await sleep(3000);
  }
})();