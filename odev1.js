const arguments = process.argv.slice(2)
let calcCircleArea = radius => console.log(`Yarıçapı ${radius} olan dairenin alanı : ${(Math.PI *  Math. pow(radius,2)).toFixed(2)}`);

calcCircleArea(arguments[0] *1)
//node odev1 2 