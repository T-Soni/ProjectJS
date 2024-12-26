// console.log("2" > 1);
// console.log("02" > 1); 
//unexpected results

//comparisons convert null to a number treating it as 0, then compares
console.log(null > 0);
console.log(null >= 0);
//equality check is different
console.log(null == 0);

//undefined gives false for all checks with 0


// === even checks for data type => strict check
console.log("2" === 2);



