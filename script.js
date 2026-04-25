// ============================================================
//  Assignment #31-34 — JavaScript DATE METHODS
// ============================================================


// ── Q1: Current date and time ────────────────────────────────
let now = new Date();
console.log(now);


// ── Q2: Current month in words ───────────────────────────────
let months = ["January","February","March","April","May","June",
              "July","August","September","October","November","December"];

let currentMonth = months[now.getMonth()];
console.log("Current month:", currentMonth);


// ── Q3: First 3 letters of current day ───────────────────────
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let shortDay = days[now.getDay()].slice(0, 3);
console.log("Today is", shortDay);


// ── Q4: Fun day check ────────────────────────────────────────
let dayNumber = now.getDay();

if (dayNumber === 0 || dayNumber === 6) {
    console.log("It's Fun day!");
} else {
    console.log("It's a working day.");
}


// ── Q5: First 15 or last days ────────────────────────────────
let dateNumber = now.getDate();

if (dateNumber < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}


// ── Q6: Minutes since Jan 1, 1970 ────────────────────────────
let milliseconds = now.getTime();
let minutes = milliseconds / 1000 / 60;

console.log("Elapsed milliseconds since Jan 1, 1970:", milliseconds);
console.log("Elapsed minutes since Jan 1, 1970:", minutes);


// ── Q7: AM or PM ─────────────────────────────────────────────
let currentHour = now.getHours();

if (currentHour < 12) {
    console.log("Its AM");
} else {
    console.log("Its PM");
}


// ── Q8: Last day of 2020 ─────────────────────────────────────
let laterDate = new Date(2020, 11, 31); 
console.log("Later date:", laterDate);


// ── Q9: Days since 1st Ramadan (June 18, 2015) ───────────────
let ramadan = new Date(2015, 5, 18);
let diffDays = Math.floor((now - ramadan) / 1000 / 60 / 60 / 24);
console.log(diffDays, "Days have passed since 1st Ramadan, 2015");


// ── Q10: Seconds since Jan 1, 2015 ───────────────────────────
let start2015 = new Date(2015, 0, 1);
let secondsElapsed = Math.floor((now - start2015) / 1000);
console.log(secondsElapsed, "Seconds had passed since beginning of 2015");


// ── Q11: Current time & 1 hour ago ───────────────────────────
let currentDate = new Date();
console.log("Current date:", currentDate);

currentDate.setHours(currentDate.getHours() - 1);
console.log("1 hour ago, it was:", currentDate);


// ── Q12: 100 years back ──────────────────────────────────────
let dateNow = new Date();
console.log("Current date:", dateNow);

dateNow.setFullYear(dateNow.getFullYear() - 100);
console.log("100 years back, it was:", dateNow);


// ── Q13: Birth year calculator ───────────────────────────────
let userAge = 23;
let birthYear = new Date().getFullYear() - userAge;
console.log("Your age is", userAge);
console.log("Your birth year is", birthYear);


// ── Q14: K-Electric Bill ─────────────────────────────────────
let customerName   = "Fizza Nadeem Khan";
let billMonth      = months[now.getMonth()];
let units          = 410;
let chargesPerUnit = 16;
let surcharge      = 350;

let netAmount   = (units * chargesPerUnit).toFixed(2);
let grossAmount = (Number(netAmount) + surcharge).toFixed(2);

console.log("Q14: ---- K-Electric Bill ----");
console.log("Customer Name:", customerName);
console.log("Month:", billMonth);
console.log("Number of units:", units);
console.log("Charges per unit:", chargesPerUnit);
console.log("Net Amount Payable (within Due Date):", netAmount);
console.log("Late payment surcharge:", surcharge.toFixed(2));
console.log("Gross Amount Payable (after Due Date):", grossAmount);
