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

function toPercentageDisplayFormat(number) {
  return number.toPrecision(4)+"%";
}

$calcButton.addEventListener("click", function () {
  let betSize = Number($betSize.value);
  let potSize = Number($potSize.value);
  let betSizePercentage = ((betSize/potSize)*100);
  let equityRequiredPercentage = getEquityRequiredPercentage(betSizePercentage);
  let minDefenseFreqPercentage = getMinDefenseFreq(betSizePercentage);


  $betSlider.value = betSizePercentage;
  $betSizePercentageBox.innerHTML = toPercentageDisplayFormat(betSizePercentage);
  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(equityRequiredPercentage);
  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(minDefenseFreqPercentage);
});

$betSlider.addEventListener("change", function () {
  let betSizePercentage = Number($betSlider.value);
  let equityRequiredPercentage = getEquityRequiredPercentage(betSizePercentage);
  let minDefenseFreqPercentage = getMinDefenseFreq(betSizePercentage);
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(equityRequiredPercentage);
  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(minDefenseFreqPercentage);
});

$bet20.addEventListener("click", function () {
  $betSlider.value = 20;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(20));
  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(20));
});
$bet25.addEventListener("click", function () {
  $betSlider.value = 25;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(25));
  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(25));
});
$bet33.addEventListener("click", function () {
  $betSlider.value = 33.33;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(33.33));
  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(33.33));
});
$bet50.addEventListener("click", function () {
  $betSlider.value = 50;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(50));
  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(50));
});
$bet67.addEventListener("click", function () {
  $betSlider.value = 66.67;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(66.66));
  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(66.66));
});
$bet75.addEventListener("click", function () {
  $betSlider.value = 75;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(75));
  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(75));
});
$bet100.addEventListener("click", function () {
  $betSlider.value = 100;
  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(100));
  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(100));
});
