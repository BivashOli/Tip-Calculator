let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 1;

let tip = 0;
let total = 0;
let roundedTotal = 0;

function update(){
    tip = (bill * (tipPercentage/100));
    total = (+bill + +tip)/numberOfPeople;
    document.getElementById('tip').innerHTML = 'Tip: $' + Math.round(100*(tip/numberOfPeople))/100;
    document.getElementById('total').innerHTML = 'Total: <b>$' + Math.round(100*total)/100 + "</b>";
}

function round(){
    if(document.getElementById('roundCheckBox').checked){
        roundedTotal = Math.round(total);
        document.getElementById('total').innerHTML = 'Total: <b>$' + roundedTotal + "</b>";
    }else{
        document.getElementById('total').innerHTML = 'Total: <b>$' + total + "</b>";
    }
}

function billChange(){
    bill = document.getElementById('billText').value;
    update();
}

function tipPercentageChange(){
    tipPercentage = document.getElementById('tipPercentageText').value;
    update();
}

function numberOfPeopleChange(){
    numberOfPeople = document.getElementById('numberOfPeopleText').value;
    update();
}