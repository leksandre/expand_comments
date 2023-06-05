function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async function() {
for (let i2 = 0; i2 < 999; i2++) {
var aTags;
var searchText;
var found;
searchText = "ещё комментари";
aTags = document.getElementsByTagName("div");
aBtns = document.getElementsByClassName("button_width_100 comments__more-button comments_fold");
for (var i = 0; i < aBtns.length; i++) {
  found = aBtns[i];
  await found.click();
  await sleep( 1000);
}
if((Math.random() < 0.5)){
  aTags = document.getElementsByClassName("comment-toggle-children__label");
}else{
  aTags = document.getElementsByClassName("comment-hidden-group__toggle");
}
if((Math.random() < 0.5)){
aTags = document.getElementsByClassName("comment-hidden-group");
}
if((Math.random() < 0.5)){
aTags = document.getElementsByClassName("comment-toggle-children_collapse");
}

for (var i = 0; i < aTags.length; i++) {
var havetoClick = false;
for (var child1 of aTags[i].parentElement.children) {
if (child1.visibility === "hidden" || child1.hidden) {
  havetoClick = true;
}
}
for (var child1 of aTags[i].parentElement.parentElement.children) {
if (child1.visibility === "hidden" || child1.hidden) {
  havetoClick = true;
}
}
for (var child1 of aTags[i].parentElement.parentElement.parentElement.children) {
if (child1.visibility === "hidden" || child1.hidden) {
  havetoClick = true;
}
}
if(aTags[i].classList.contains("mystyle11")){
  havetoClick = false;
}
if (havetoClick) {
  found = aTags[i];
  await found.click();
  found.classList.add("mystyle11");
  await sleep( 100);
}

}
await sleep( 1000);
}
})();
