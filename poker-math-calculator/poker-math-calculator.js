let $bet20 = document.querySelector("#b20");
let $bet25 = document.querySelector("#b25");
let $bet33 = document.querySelector("#b33");
let $bet50 = document.querySelector("#b50");
let $bet67 = document.querySelector("#b67");
let $bet75 = document.querySelector("#b75");
let $bet100 = document.querySelector("#b100");
let $betSlider = document.querySelector("#bet-slider");

$bet20.addEventListener("click", function () {
  $betSlider.value = 20;
});
$bet25.addEventListener("click", function () {
  $betSlider.value = 25;
});
$bet33.addEventListener("click", function () {
  $betSlider.value = 33.3;
});
$bet50.addEventListener("click", function () {
  $betSlider.value = 50;
});
$bet67.addEventListener("click", function () {
  $betSlider.value = 66.6;
});
$bet75.addEventListener("click", function () {
  $betSlider.value = 75;
});
$bet100.addEventListener("click", function () {
  $betSlider.value = 100;
});

$betSlider.addEventListener("change", function () {
});
