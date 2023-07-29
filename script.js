let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Part 1
  const mainTitleElement = document.getElementById("main-title");
  mainTitleElement.textContent = "Welcome to Dom's Homepage";
  //Part 2
  document.body.style.backgroundColor = "lightblue";

  // Part 3
  const list = document.querySelector(".side-bar>ul");
  const lastElement = list.children[list.children.length - 1];
  list.removeChild(lastElement);
  //Part 4
  const specialTitles = document.querySelectorAll(".special-title");
  for (let i = 0; i < specialTitles.length; i++) {
    specialTitles[i].style.fontSize = "2rem";
  }

  // Part 5
  const pastRaces = document
    .querySelectorAll(".side-bar")[1]
    .getElementsByTagName("ul")[0];
  pastRaces.removeChild(pastRaces.children[3]);

  // Part 6
  let newRace = document.createElement("li");
  newRace.textContent = "Miami";
  pastRaces.appendChild(newRace);

  // Part 7
  let blogPost = document.createElement("div");
  blogPost.setAttribute("class", "blog-post purple");

  let blogPostH2 = document.createElement("h1");
  //add text
  blogPostH2.textContent = "Miami";
  blogPost.appendChild(blogPostH2);

  let blogPostP = document.createElement("p");
  blogPostP.textContent = "I picked up Taher and drove to the sunset".toLocaleUpperCase();
  blogPost.appendChild(blogPostP);

  document.querySelector(".main").appendChild(blogPost);

  // Part 8
  let quoteTitle = document.getElementById("quote-title");
  quoteTitle.addEventListener("click", randomQuote, false);

  // Part 9
  let blogposts = document.querySelectorAll(".blog-post");
  let blogpostArr = [];
  for (let i = 0; i < blogposts.length; i++) {
    blogpostArr.push(blogposts[i]);
  }
  blogpostArr.forEach(function (post) {
    post.addEventListener(
      "mouseout",
      function (e) {
        post.setAttribute("class", "blog-post purple");
      },
      false
    );
    post.addEventListener(
      "mouseenter",
      function (e) {
        post.setAttribute("class", "blog-post red");
      },
      false
    );

    let blogChildren = [];
    for (let i = 0; i < post.children.length; i++) {
      blogChildren.push(post.children[i]);
    }
    blogChildren.forEach(function (child) {
      child.style.pointerEvents = "none";
    });
  });
});

