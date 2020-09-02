"use strict";

{
  let products = [
    { name: "きゅうり", type: "野菜", quantity: 0, price: 1 },
    { name: "バナナ", type: "フルーツ", quantity: 30, price: 9 },
    { name: "セロリ", type: "野菜", quantity: 30, price: 9 },
    { name: "オレンジ", type: "フルーツ", quantity: 3, price: 5 },
  ];

  let pro = products.filter(function (product) {
    return (
      product.type === "野菜" && product.quantity > 0 && product.price < 10
    );
  });

  console.log(pro);

  let post = { id: 4, title: "初めての投稿" };

  let comments = [
    { postId: 4, content: "いい記事ですね！" },
    { postId: 3, content: "勉強になりました" },
    { postId: 4, content: "なるほど" },
  ];

  function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
      return comment.postId === post.id;
    });
  }
  const com = commentsForPost(post, comments);
  console.log(com);

  let users = [
    {name: '太郎'},
    {name: '次郎'},
    {name: '三郎'},
  ];

  let us = users.find((user) => {
    return user.name === '次郎'
  });

  console.log(us);

  let posts = [
    { id: 1, title: '古い投稿'},
    { id: 2, title: '新しい投稿'}
  ];

  let comment = {
    postId: 2, content: 'イイね'
  }

  function postForComment(posts, comment) {
    return posts.find(function(post) {
      return post.id === comment.postId;
    });
  }

  let pos = postForComment(posts, comment);
  console.log(pos);


  let computers = [
    { name: 'Apple', ram: 24},
    { name: 'Compaq', ram: 4},
    { name: 'Acer', ram: 32}
  ];

 computers.every(function(computer) {
   return computer.rom >= 16;
 });

let numbers = [10, 20, 30];
let sum = 0;

let num = numbers.reduce(function(sum, number) {
  return sum + number;
}, 50);

console.log(num);

let primaryColors = [
  { color: 'red'},
  { color: 'yellow'},
  { color: 'blue'}
];


let pri = primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color)
  return previous;
}, []);

console.log(pri);

function balancedParens(string) {
  return !string.split('').reduce(function(previous, char){
    if (previous > 0){return previous;}
    if (char === '('){return previous + 1; }
    if (char === ')'){return previous - 1; }
  },0);
}

let bal = balancedParens('()');

console.log(bal);

function getMassage(){
  const year = new Date().getFullYear();

  return `今年は${year}年です`;
}

const man =  getMassage();
console.log(man);

const add = function(a,b) {
  return a + b;
}
console.log(add(1,2));

const numb = [1, 2, 3];

let mam = numb.map((number) => {
  return 2 * number;
});

console.log(mam);

const team = {
  members:['太郎', '花子'],
}

}
