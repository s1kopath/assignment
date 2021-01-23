// https://github.com/s1kopath/assignment-3
// Converter kilometer to Meter
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        console.log('invalid input');
    }
    else{
        let meter = kilometer * 1000;
        return meter;
    }
}

let calculatekilometerToMeter = kilometerToMeter(7);
console.log(calculatekilometerToMeter);



//Budget Calculator
function budgetCalculator(watch, phone, laptop){
    let totalbudget = 0;
    if(watch < 0 || phone < 0 || laptop <0){
        console.log('invalid input');
    }
    else{
        let watchValue = watch * 50;
        let phoneValue = phone * 100;
        let laptopValue = laptop * 500;
        let totalbudget = watchValue + phoneValue + laptopValue;
        return totalbudget;
    }
}

let checkBudget = budgetCalculator(2,5,3);
console.log(checkBudget);



//Hotel cost dcalculator
function hotelCost(days){
    let Cost = 0;
    if(days < 0){
        console.log('invalid input');
    }
    else if(days <= 10){
        Cost = days * 100;
        return Cost;
    }
    else if(days <= 20){
        let firstTenDays = 10 * 100;
        let remainingDays = days - 10;
        let secondTenDays = remainingDays * 80;
        Cost = firstTenDays + secondTenDays;
        return Cost;
    }
    else{
        let firstTenDays = 10 * 100;
        let secondTenDays = 10 * 80;
        let remainingDays = days - 20;
        let moreDays = remainingDays * 50;
        Cost = firstTenDays + secondTenDays + moreDays;
        return Cost;
    }
}

let getHoltelCost = hotelCost(52);
console.log(getHoltelCost);



//Largest name from Array.
function megaFriend(Names){
    let larger = Names[0];
    let checkArray = Array.isArray(Names);
    if(checkArray != true){
        console.log('Invalid input');
    }
    else{
        for(let i = 0; i < Names.length; i++){
            let size = Names[i];
            if(size.length > larger.length){
               larger = size;
            }
        }
    }
    return larger;
}

let array = ['Kamal', 'Safi', 'Rokonujjaman'];
let getMegaFriend = megaFriend(array);
console.log(getMegaFriend);
