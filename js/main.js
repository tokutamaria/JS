'use strict';

{
let products = [
  {name: 'きゅうり', type: '野菜',quantity: 0, price: 1},
  {name: 'バナナ', type: 'フルーツ',quantity: 30,price: 9},
  {name: 'セロリ', type: '野菜', quantity: 30, price: 9},
  {name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5},
];

let pro = products.filter(function(product) {
  return product.type === '野菜' && product.quantity > 0 && product.price < 10;
});

console.log(pro);
}

