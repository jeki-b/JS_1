let newArr = [1, 5, 6]

const reducer = (previousValue, currentValue) => {
    return previousValue == currentValue;
};

console.log(newArr.reduce(reducer));