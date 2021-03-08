let fruits = new Map([

    ["apple", "green"],
  
    ["strawberry", "red"],
  
    ["blueberry",    "blue"]
  
  ]);
  
  fruits.forEach((value, key, map) => {
      console.log(`Key - ${key}, value - ${value}`); 
  });