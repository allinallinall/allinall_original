let $calcButton = document.querySelector("#calc-button");
let $betSize = document.querySelector("#bet-size-input-box");
let $potSize = document.querySelector("#pot-size-input-box");
let $betSizePercentageBox = document.querySelector("#bet-size-percentage-box");
let $equityRequiredBox = document.querySelector("#equity-required-box");
let $minDefenseFreqBox = document.querySelector("#min-defense-freq-box");
let $betSlider = document.querySelector("#bet-slider");
let $bet20 = document.querySelector("#b20");
let $bet25 = document.querySelector("#b25");
let $bet33 = document.querySelector("#b33");
let $bet50 = document.querySelector("#b50");
let $bet67 = document.querySelector("#b67");
let $bet75 = document.querySelector("#b75");
let $bet100 = document.querySelector("#b100");

function getEquityRequiredPercentage(betSizePercentage) {
  return (betSizePercentage/(betSizePercentage+betSizePercentage+100)*100);
}

function getMinDefenseFreq(betSizePercentage) {
  return (100-((betSizePercentage/(betSizePercentage+100))*100));
}

$calcButton.addEventListener("click", function () {
  let betSize = Number($betSize.value);
  let potSize = Number($potSize.value);
  let betSizePercentage = ((betSize/potSize)*100);
  let equityRequiredPercentage = getEquityRequiredPercentage(betSizePercentage);
  let minDefenseFreqPercentage = getMinDefenseFreq(betSizePercentage);

  $betSlider.value = betSizePercentage;
  $betSizePercentageBox.innerHTML = betSizePercentage.toPrecision(4)+"%";
  $equityRequiredBox.innerHTML = equityRequiredPercentage.toPrecision(4)+"%";
  $minDefenseFreqBox.innerHTML = minDefenseFreqPercentage.toPrecision(4)+"%";
});

$betSlider.addEventListener("change", function () {
  let betSizePercentage = Number($betSlider.value);
  let equityRequiredPercentage = getEquityRequiredPercentage(betSizePercentage);
  let minDefenseFreqPercentage = getMinDefenseFreq(betSizePercentage);
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = equityRequiredPercentage.toPrecision(4)+"%";
  $minDefenseFreqBox.innerHTML = minDefenseFreqPercentage.toPrecision(4)+"%";
});

$bet20.addEventListener("click", function () {
  $betSlider.value = 20;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = getEquityRequiredPercentage(20).toPrecision(4)+"%";
  $minDefenseFreqBox.innerHTML = getMinDefenseFreq(20).toPrecision(4)+"%";
});
$bet25.addEventListener("click", function () {
  $betSlider.value = 25;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = getEquityRequiredPercentage(25).toPrecision(4)+"%";
  $minDefenseFreqBox.innerHTML = getMinDefenseFreq(25).toPrecision(4)+"%";
});
$bet33.addEventListener("click", function () {
  $betSlider.value = 33.33;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = getEquityRequiredPercentage(33.33).toPrecision(4)+"%";
  $minDefenseFreqBox.innerHTML = getMinDefenseFreq(33.33).toPrecision(4)+"%";
});
$bet50.addEventListener("click", function () {
  $betSlider.value = 50;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = getEquityRequiredPercentage(50).toPrecision(4)+"%";
  $minDefenseFreqBox.innerHTML = getMinDefenseFreq(50).toPrecision(4)+"%";
});
$bet67.addEventListener("click", function () {
  $betSlider.value = 66.67;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = getEquityRequiredPercentage(66.66).toPrecision(4)+"%";
  $minDefenseFreqBox.innerHTML = getMinDefenseFreq(66.66).toPrecision(4)+"%";
});
$bet75.addEventListener("click", function () {
  $betSlider.value = 75;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = getEquityRequiredPercentage(75).toPrecision(4)+"%";
  $minDefenseFreqBox.innerHTML = getMinDefenseFreq(75).toPrecision(4)+"%";
});
$bet100.addEventListener("click", function () {
  $betSlider.value = 100;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = getEquityRequiredPercentage(100).toPrecision(4)+"%";
  $minDefenseFreqBox.innerHTML = getMinDefenseFreq(100).toPrecision(4)+"%";
});
