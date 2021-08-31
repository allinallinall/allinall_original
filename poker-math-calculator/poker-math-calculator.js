let $container = document.querySelector(".container");
let $vanillaButton = document.querySelector("#vanilla-button");
let $cssButton = document.querySelector("#css-button");
let $calcButton = document.querySelector("#calc-button");
let $betSize = document.querySelector("#bet-size-input-box");
let $potSize = document.querySelector("#pot-size-input-box");
let $betSizePercentageBox = document.querySelector("#bet-size-percentage-box");
let $betSizePercentageFill = document.querySelector("#bet-size-percentage-fill");
let $oddsBox = document.querySelector("#odds-box");
let $equityRequiredBox = document.querySelector("#equity-required-box");
let $equityRequiredPercentageFill = document.querySelector("#equity-required-percentage-fill");
let $outsRequiredBox = document.querySelector("#outs-required-box");
let $minDefenseFreqBox = document.querySelector("#min-defense-freq-box");
let $minDefensePercentageFill = document.querySelector("#min-defense-percentage-fill");
let $alphaAutoProfitBox = document.querySelector("#alpha-auto-profit-box");
let $autoProfitPercentageFill = document.querySelector("#auto-profit-percentage-fill");
let $betSlider = document.querySelector("#bet-slider");
let $bet20 = document.querySelector("#b20");
let $bet25 = document.querySelector("#b25");
let $bet33 = document.querySelector("#b33");
let $bet50 = document.querySelector("#b50");
let $bet67 = document.querySelector("#b67");
let $bet75 = document.querySelector("#b75");
let $bet100 = document.querySelector("#b100");


function toPercentageDisplayFormat(number) {
  return number.toPrecision(3)+"%";
}

// changePercentageFilled("bet size", 25)
function changePercentageFilled(type, percentage) {

  if (type === "bet size") {
    $betSizePercentageFill.style.width = percentage + "%";
  } else if (type === "equity required") {
    $equityRequiredPercentageFill.style.width = percentage + "%";
  } else if (type === "minimum defense frequency") {
    $minDefensePercentageFill.style.width = percentage + "%";
  } else if (type === "auto profit") {
    $autoProfitPercentageFill.style.width = percentage + "%";
  }
}

function getEquityRequiredPercentage(betSizePercentage) {
  return (betSizePercentage/(betSizePercentage+betSizePercentage+100)*100);
}

function convertEquityToOdds(betSize) {
  return ((100 / betSize)-1).toPrecision(2) + " : 1";
}

function getMinDefenseFreq(betSizePercentage) {
  return (100-((betSizePercentage/(betSizePercentage+100))*100));
}

function getBetSize(potSize, betSizePercentage) {
  return potSize*(betSizePercentage/100);
}

function calculate() {
  let betSize = Number($betSize.value);
  let potSize = Number($potSize.value);
  let betSizePercentage = ((betSize/potSize)*100);
  let equityRequiredPercentage = getEquityRequiredPercentage(betSizePercentage);
  let minDefenseFreqPercentage = getMinDefenseFreq(betSizePercentage);

  $betSlider.value = betSizePercentage;
  $betSizePercentageBox.innerHTML = toPercentageDisplayFormat(betSizePercentage);
  changePercentageFilled("bet size",betSizePercentage);
  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(equityRequiredPercentage);
  changePercentageFilled("equity required",equityRequiredPercentage);
  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(minDefenseFreqPercentage);
  changePercentageFilled("minimum defense frequency",minDefenseFreqPercentage);
  $alphaAutoProfitBox.innerHTML = toPercentageDisplayFormat(100-(minDefenseFreqPercentage));
  changePercentageFilled("auto profit", 100-minDefenseFreqPercentage);

}

$betSize.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    calculate();
  }
});

$potSize.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    calculate();
  }
});


$calcButton.addEventListener("click", calculate);

$betSlider.addEventListener("change", function () {
  let betSizePercentage = Number($betSlider.value);
  let equityRequiredPercentage = getEquityRequiredPercentage(betSizePercentage);
  let outsRequired = 44*equityRequiredPercentage/100;
  let minDefenseFreqPercentage = getMinDefenseFreq(betSizePercentage);
  let alphaAutoProfitPercentage = 100-(minDefenseFreqPercentage);

  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  changePercentageFilled("bet size",betSizePercentage);
  $oddsBox.innerHTML = (convertEquityToOdds(betSizePercentage));

  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(equityRequiredPercentage);
  changePercentageFilled("equity required",equityRequiredPercentage);
  $outsRequiredBox.innerHTML = outsRequired.toPrecision(3);

  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(minDefenseFreqPercentage);
  changePercentageFilled("minimum defense frequency",minDefenseFreqPercentage);

  $alphaAutoProfitBox.innerHTML = toPercentageDisplayFormat(alphaAutoProfitPercentage);
  changePercentageFilled("auto profit",alphaAutoProfitPercentage);

  if ($potSize.value !== "") {
    $betSize.value = getBetSize(betSizePercentage, Number($potSize.value)).toPrecision(3);
  } else {
    $potSize.value = 100;
    $betSize.value = betSizePercentage;
  }
});

$bet20.addEventListener("click", function () {
  $betSlider.value = 20;

  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  changePercentageFilled("bet size",20);

  $oddsBox.innerHTML = (convertEquityToOdds(20));

  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(20));
  changePercentageFilled("equity required",getEquityRequiredPercentage(20));

  $outsRequiredBox.innerHTML = (getEquityRequiredPercentage(20)/100*44).toPrecision(2);

  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(20));
  changePercentageFilled("minimum defense frequency",getMinDefenseFreq(20));

  $alphaAutoProfitBox.innerHTML = toPercentageDisplayFormat(100-getMinDefenseFreq(20));
  changePercentageFilled("auto profit",(100-getMinDefenseFreq(20)));

  if ($potSize.value !== "") {
    $betSize.value = getBetSize(20, Number($potSize.value)).toPrecision(4);
  } else {
    $potSize.value = 100;
    $betSize.value = 20;
  }
});

$bet25.addEventListener("click", function () {
  $betSlider.value = 25;

  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  changePercentageFilled("bet size",25);

  $oddsBox.innerHTML = (convertEquityToOdds(25));

  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(25));
  changePercentageFilled("equity required",getEquityRequiredPercentage(25));

  $outsRequiredBox.innerHTML = (getEquityRequiredPercentage(25)/100*44).toPrecision(3);

  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(25));
  changePercentageFilled("minimum defense frequency",getMinDefenseFreq(25));

  $alphaAutoProfitBox.innerHTML = toPercentageDisplayFormat(100-getMinDefenseFreq(25));
  changePercentageFilled("auto profit",(100-getMinDefenseFreq(25)));

  if ($potSize.value !== "") {
    $betSize.value = getBetSize(25, Number($potSize.value)).toPrecision(4);
  } else {
    $potSize.value = 100;
    $betSize.value = 25;
  }
});

$bet33.addEventListener("click", function () {
  $betSlider.value = 33.33;

  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  changePercentageFilled("bet size",33.33);
  $oddsBox.innerHTML = (convertEquityToOdds(33.33));

  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(33.33));
  changePercentageFilled("equity required",getEquityRequiredPercentage(33.33));

  $outsRequiredBox.innerHTML = (getEquityRequiredPercentage(33.33)/100*44).toPrecision(3);

  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(33.33));
  changePercentageFilled("minimum defense frequency",getMinDefenseFreq(33.33));

  $alphaAutoProfitBox.innerHTML = toPercentageDisplayFormat(100-getMinDefenseFreq(33.33));
  changePercentageFilled("auto profit",(100-getMinDefenseFreq(33.33)));

  if ($potSize.value !== "") {
    $betSize.value = getBetSize(33.33, Number($potSize.value)).toPrecision(4);
  } else {
    $potSize.value = 100;
    $betSize.value = 33.3;
  }
});

$bet50.addEventListener("click", function () {
  $betSlider.value = 50;

  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  changePercentageFilled("bet size",50);

  $oddsBox.innerHTML = (convertEquityToOdds(50));

  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(50));
  changePercentageFilled("equity required",getEquityRequiredPercentage(50));

  $outsRequiredBox.innerHTML = (getEquityRequiredPercentage(50)/100*44).toPrecision(3);

  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(50));
  changePercentageFilled("minimum defense frequency",getMinDefenseFreq(50));

  $alphaAutoProfitBox.innerHTML = toPercentageDisplayFormat(100-getMinDefenseFreq(50));
  changePercentageFilled("auto profit",(100-getMinDefenseFreq(50)));

  if ($potSize.value !== "") {
    $betSize.value = getBetSize(50, Number($potSize.value)).toPrecision(4);
  } else {
    $potSize.value = 100;
    $betSize.value = 50;
  }
});

$bet67.addEventListener("click", function () {
  $betSlider.value = 66.67;

  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  changePercentageFilled("bet size",66.67);

  $oddsBox.innerHTML = (convertEquityToOdds(66.67));

  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(66.66));
  changePercentageFilled("equity required",getEquityRequiredPercentage(66.66));

  $outsRequiredBox.innerHTML = (getEquityRequiredPercentage(66.66)/100*44).toPrecision(3);

  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(66.66));
  changePercentageFilled("minimum defense frequency",getMinDefenseFreq(66.66));

  $alphaAutoProfitBox.innerHTML = toPercentageDisplayFormat(100-getMinDefenseFreq(66.66));
  changePercentageFilled("auto profit",(100-getMinDefenseFreq(66.66)));

  if ($potSize.value !== "") {
    $betSize.value = getBetSize(66.67, Number($potSize.value)).toPrecision(4);
  } else {
    $potSize.value = 100;
    $betSize.value = 66.7;
  }
});

$bet75.addEventListener("click", function () {
  $betSlider.value = 75;

  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  changePercentageFilled("bet size",75);
  $oddsBox.innerHTML = (convertEquityToOdds(75));

  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(75));
  changePercentageFilled("equity required",getEquityRequiredPercentage(75));

  $outsRequiredBox.innerHTML = (getEquityRequiredPercentage(75)/100*44).toPrecision(3);

  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(75));
  changePercentageFilled("minimum defense frequency",getMinDefenseFreq(75));

  $alphaAutoProfitBox.innerHTML = toPercentageDisplayFormat(100-getMinDefenseFreq(75));
  changePercentageFilled("auto profit",(100-getMinDefenseFreq(75)));

  if ($potSize.value !== "") {
    $betSize.value = getBetSize(75, Number($potSize.value)).toPrecision(4);
  } else {
    $potSize.value = 100;
    $betSize.value = 75;
  }
});

$bet100.addEventListener("click", function () {
  $betSlider.value = 100;

  $betSizePercentageBox.innerHTML = $betSlider.value+"%";
  changePercentageFilled("bet size",100);

  $oddsBox.innerHTML = (convertEquityToOdds(100));

  $equityRequiredBox.innerHTML = toPercentageDisplayFormat(getEquityRequiredPercentage(100));
  changePercentageFilled("equity required",getEquityRequiredPercentage(100));

  $outsRequiredBox.innerHTML = (getEquityRequiredPercentage(100)/100*44).toPrecision(3);

  $minDefenseFreqBox.innerHTML = toPercentageDisplayFormat(getMinDefenseFreq(100));
  changePercentageFilled("minimum defense frequency",getMinDefenseFreq(100));

  $alphaAutoProfitBox.innerHTML = toPercentageDisplayFormat(100-getMinDefenseFreq(100));
  changePercentageFilled("auto profit",(100-getMinDefenseFreq(100)));

  if ($potSize.value !== "") {
    $betSize.value = getBetSize(100, Number($potSize.value)).toPrecision(4);
  } else {
    $potSize.value = 100;
    $betSize.value = 100;
  }
});
