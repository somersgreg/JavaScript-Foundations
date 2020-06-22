// function creditScore (p,i,n) {
//         var creditScore;
//     if (creditScore > 740) {
//         monthlyRate = Math.round(numerator / denominator) * 0.95;
//         console.log (name, "your monthly rate is $", monthlyRate);
//     }
//     else if (creditScore < 660) {
//         monthlyRate = Math.round(numerator / denominator) * 1.05;
//         console.log (name, "your monthly rate is $", monthlyRate);
        
//     }
//     else if (creditScore > 660 && creditScore < 740) {
//         monthlyRate = Math.round(numerator / denominator);
//         console.log (name, "your monthly rate is $", monthlyRate);
//     }
// }
//     creditScore();

// function mortgageCalculator(name, P, I, N, creditScore){
//     monthlyInterestRate = (I / 12);
//     periods = (N * 12);
//     N1 = Math.pow(1 + monthlyInterestRate, periods);
//     numerator = Math.abs(P * N1 * monthlyInterestRate);
//     denominator = (N1 - 1);
//     monthlyRate = numerator/denominator;
//     if (creditScore < 660) {
//         monthlyRate = monthlyRate * 1.05;
//         I = I * 1.05;
//     } else if (creditScore > 740) {
//         monthlyRate = monthlyRate * 0.95;
//         I = I * 0.95;
//     } else {
//         monthlyRate = monthlyRate;
//     }
//     monthlyRate = monthlyRate.toFixed(2);
// }

function mortgageCalculator(p, i, n, c) {

    if (c>740){i=i*0.95;}
    else if (c<660){i=i*1.05}

    let Pow = Math.pow(1+i/12,n*12)
    let M = p*(Pow*(i/12))/(Pow-1)
    return (M.toFixed(2))
}    
console.log(mortgageCalculator(200000, 0.05, 30, 580))