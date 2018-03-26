const divide = (a, b) => {
  if(b === 0){
    throw new RangeError('Divide by zero error!')
  }
  return a / b;
};

export default divide;
