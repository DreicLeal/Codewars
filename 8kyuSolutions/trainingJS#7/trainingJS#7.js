// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

const saleHotdogs = (hotDogSales) => {
  if(hotDogSales >= 10){
    return hotDogSales*90;
  };
  return hotDogSales <5? hotDogSales*100:hotDogSales*95;
};
// console.log(11)