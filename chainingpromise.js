let stocks = {
  Fruits: ["Strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed!"));
    }
  });
};
order(2000, () => console.log(`${stocks.Fruits[0]} was selected!`))
  .then(() => {
    return order(0000, () => console.log("Production has started!"));
  })

  .then(() => {
    return order(2000, () => console.log("Fruits are chopped!"));
  })

  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected!`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("Order is ready , Please collect!");
    });
  });
