const rate = 0.056;
let investedAmount = 2500;
const originalInvestedAmount = investedAmount + 0.0;
let years = 2;
let currencyChange = 0.38;

console.log('rate: ', rate);
// https://kunde.comdirect.de/inf/anleihen/detail/uebersicht.html?BACKURL=%2Fitx%2Fdepotuebersicht&ID_NOTATION=128483148&REALDEPOT_MODE=true

do {
    investedAmount = investedAmount * (rate+1);
    console.log('year ', years, investedAmount);
    years--;
} while (years);


// no currency
console.log(investedAmount);

// currency change
const interest = investedAmount-originalInvestedAmount
console.log(originalInvestedAmount*(1+currencyChange)+interest );


console.log(`you ${investedAmount/originalInvestedAmount}-fied your money`);
console.log(`you ${(originalInvestedAmount*(1+currencyChange)+interest)/originalInvestedAmount }-fied your money`);