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

  let users = [{ name: "太郎" }, { name: "次郎" }, { name: "三郎" }];

  let us = users.find((user) => {
    return user.name === "次郎";
  });

  console.log(us);

  let posts = [
    { id: 1, title: "古い投稿" },
    { id: 2, title: "新しい投稿" },
  ];

  let comment = {
    postId: 2,
    content: "イイね",
  };

  function postForComment(posts, comment) {
    return posts.find(function (post) {
      return post.id === comment.postId;
    });
  }

  let pos = postForComment(posts, comment);
  console.log(pos);

  let computers = [
    { name: "Apple", ram: 24 },
    { name: "Compaq", ram: 4 },
    { name: "Acer", ram: 32 },
  ];

  computers.every(function (computer) {
    return computer.rom >= 16;
  });

  let numbers = [10, 20, 30];
  let sum = 0;

  let num = numbers.reduce(function (sum, number) {
    return sum + number;
  }, 50);

  console.log(num);

  let primaryColors = [
    { color: "red" },
    { color: "yellow" },
    { color: "blue" },
  ];

  let pri = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
  }, []);

  console.log(pri);

  function balancedParens(string) {
    return !string.split("").reduce(function (previous, char) {
      if (previous > 0) {
        return previous;
      }
      if (char === "(") {
        return previous + 1;
      }
      if (char === ")") {
        return previous - 1;
      }
    }, 0);
  }

  let bal = balancedParens("()");

  console.log(bal);

  function getMassage() {
    const year = new Date().getFullYear();

    return `今年は${year}年です`;
  }

  const man = getMassage();
  console.log(man);

  const add = function (a, b) {
    return a + b;
  };
  console.log(add(1, 2));

  const numb = [1, 2, 3];

  let mam = numb.map((number) => {
    return 2 * number;
  });

  console.log(mam);

  const team = {
    members: ["太郎", "花子"],
  };

  function createBookShop(inventory) {
    return {
      inventory,
      inventoryValue() {
        return this.inventory.reduce((total, book) => total + book.price, 0);
      },
      priceForTitle: function (title) {
        return this.inventory.find((book) => book.title === title).price;
      },
    };
  }

  const inventory = [
    { title: "ハリーポッター", price: 1000 },
    { title: "JavaScript入門", price: 1500 },
  ];

  const bookShop = createBookShop(inventory);

  let boo = bookShop.inventoryValue();
  let rice = bookShop.priceForTitle("ハリーポッター");

  console.log(boo);
  console.log(rice);

  function User(id) {
    this.id = id;
  }

  function generateId() {
    return Math.random() * 99999;
  }

function createAdminUser(user) {
  user.admin = true;

  return user;
}

createAdminUser(new User(generateId()));


function addNumbers(...numbers) {
  return numbers.reduce(function(sum, number) {
    return sum + number;
  },0);
}

let A = addNumbers(1,2,3,4,5,6,7,8);
console.log(A);

function validateShoppingList(...items) {
  if (items.indexOf('牛乳') < 0) {
    return ['牛乳', ...items];
  }
  return items;
}
let V = validateShoppingList('オレンジ','パン','牛乳');
console.log(V);

let expense = {
  type: '交際費',
  amount: '4500 JPY'
};

const {type, amount} = expense;
console.log(type);
console.log(amount);

let saveFile = {
  extension: 'jpg',
  name: 'profile',
  size: 14040
}

function fileSummary({name, extension, size}) {
  return `${name}.${extension}の容量は${size}です。`
}

let F = fileSummary(saveFile);
console.log(F);

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const[ame,ame2] = companies;
console.log([ame,ame2]);

const campanies = [
  {name: 'Google', location: 'マウンテンビュー'},
  {name: 'Facebook', location: 'メンロパーク'},
  {name: 'Uber', location: 'サンフランシスコ'},
];

class Car {
  constructor(options){
    this.title = options.title;
  }

  drive() {
    return 'ウィーン';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return 'ブブー!!';
  }
}

const toyota = new Toyota({color: 'レッド', title: 'アクア'});
console.log(toyota);
console.log(toyota.honk());

const colors = [ 'red', 'green' , 'blue'];
const numberss = [1,2,3,4,5,5,5];
let total = 0;

for (let color of colors) {
  console.log(color);
}

for(let number of numberss) {
  total += number;

}

console.log(total);

function* yes() {

}
console.log(yes());


function* shopping() {

  const stuffFromStore = yield 'お金';

  const cleanClothes = yield '汚れた服';

  return [stuffFromStore, cleanClothes];
}

const gen =shopping();
gen.next('日用品');

gen.next('綺麗な服');

console.log(gen);

function* Colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const ge = Colors();
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());

const myColors = [];
for (let color of Colors()) {
  myColors.push(color);
}

console.log(myColors);


const testingTeam = {
  lead: '紀子',
  tester: '貴志',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield globalThis.tester;
  }
}

const engineeringTeam = {
   testingTeam,
  size: 3,
  department: '開発部', 
  lead: '太郎',
  manager: '花子',
  engineer: '次郎'
};

//----デリゲーション

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield team.testingTeam;
}

// function* TestingTeamIterator(team) {
//   yield team.lead;
//   yield team.tester;
// }

//---

const names = [];
for(let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

console.log(names);

}
