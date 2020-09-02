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
}
