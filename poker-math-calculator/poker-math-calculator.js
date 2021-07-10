let $calcButton = document.querySelector("#calc-button");
let $betSize = document.querySelector("#bet-size-input-box");
let $potSize = document.querySelector("#pot-size-input-box");
let $betSizePercentageBox = document.querySelector("#bet-size-percentage-box");
let $betSlider = document.querySelector("#bet-slider");
let $bet20 = document.querySelector("#b20");
let $bet25 = document.querySelector("#b25");
let $bet33 = document.querySelector("#b33");
let $bet50 = document.querySelector("#b50");
let $bet67 = document.querySelector("#b67");
let $bet75 = document.querySelector("#b75");
let $bet100 = document.querySelector("#b100");

$calcButton.addEventListener("click", function () {
  let betSize = Number($betSize.value);
  let potSize = Number($potSize.value);
  $betSlider.value = ((betSize/potSize)*100).toPrecision(4);
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
});

$betSlider.addEventListener("change", function () {
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
});

$bet20.addEventListener("click", function () {
  $betSlider.value = 20;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
});
$bet25.addEventListener("click", function () {
  $betSlider.value = 25;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
});
$bet33.addEventListener("click", function () {
  $betSlider.value = 33.3;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
});
$bet50.addEventListener("click", function () {
  $betSlider.value = 50;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
});
$bet67.addEventListener("click", function () {
  $betSlider.value = 66.6;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
});
$bet75.addEventListener("click", function () {
  $betSlider.value = 75;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
});
$bet100.addEventListener("click", function () {
  $betSlider.value = 100;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
});
