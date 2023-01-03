const circleArea = (r) => console.log(`Yarıçapı ${r} olan dairenin alanı : ${(Math.PI * Math.pow(r,2)).toFixed(2)}`);

const circleCircumference = (r) => console.log(`Yarıçapı ${r} olan dairenin çevresi : ${(2 * Math.PI * r).toFixed(2)}`);


module.exports = {
  circleArea,
  circleCircumference,
};

//export {circleArea,circleCircumference,}
