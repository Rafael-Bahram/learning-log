let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let salarySum = {
    John:100,
    Ann:160,
    Pete:130
};
let sum = 0;
for(let key in salarySum){
    sum += salarySum[key];
}
alert(sum);