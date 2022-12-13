//https://www.codewars.com/kata/58ca658cc0d6401f2700045f

const findMultiples = (integer, limit) => {
    const arr = [];
    for(let i = integer;i<= limit;i+=integer){
     arr.push(i);    
    };
      return arr;
  };
  