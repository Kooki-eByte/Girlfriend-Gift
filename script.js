// giphy links in a array
let queryURLArr = [
  "https://api.giphy.com/v1/gifs/search?api_key=3r8OTeEvptDRXOQTQhqUOjKDdPjJyObL&limit=1&q=i+love+you",
  "https://api.giphy.com/v1/gifs/search?api_key=3r8OTeEvptDRXOQTQhqUOjKDdPjJyObL&limit=1&q=you+are+the+best",
  "https://api.giphy.com/v1/gifs/search?api_key=3r8OTeEvptDRXOQTQhqUOjKDdPjJyObL&limit=1&q=heart",
  "https://api.giphy.com/v1/gifs/search?api_key=3r8OTeEvptDRXOQTQhqUOjKDdPjJyObL&limit=1&q=my+love",
  "https://api.giphy.com/v1/gifs/search?api_key=3r8OTeEvptDRXOQTQhqUOjKDdPjJyObL&limit=1&q=my+princess",
];

let gifArr;
let ranNum = Math.floor(Math.random() * queryURLArr.length);
// html elements in vars
let loveBtn = $(".loveBtn");
let gifDiv = $(".giphyDiv");
let imgOne = $("#img1");
let imgTwo = $("#img2");
let isImgMade = false;

function createElement(gif) {
  if (!isImgMade) {
    let newGif = $("<img>");
    newGif.attr("src", gif);
    newGif.attr("id", "img-gif");
    gifDiv.append(newGif);
    isImgMade = true;
  } else {
    $("#img-gif").attr("src", gif);
  }
}

loveBtn.on("click", () => {
  let theGif =
    "https://media1.giphy.com/media/yc2pHdAoxVOrJ2m5Ha/giphy.gif?cid=5c9d8c60nw0jpk86zbnsi4kbfn16s9nj60ff6fiwjbebxipy&rid=giphy.gif";
  console.log(theGif);
  createElement(theGif);
});
// $.ajax({
//   url: queryURLArr[ranNum],
//   method: "GET",
// }).then(function (response) {
//   console.log(response.data);
//   //   newGif.attr("src", response.data[0].images.original.url);
//   let theGif = response.data[0].images.original.url;
//   loveBtn.on("click", () => {
//     console.log(theGif);
//     createElement(theGif);
//   });
// });

imgOne.on("click", () => {
  alert(
    "The day I went back to see the bestest friend in the world to me, the love of my life. You babess! Thank you for everything you do and so much more my love. Only we could really make things work out the way we do despite any trials"
  );
});

imgTwo.on("click", () => {
  alert(
    "Being together with you is a dream come true baby, You are the one i need, the one i want, and the one that fits in my heart. So please stay with me forever baby! you are my world and i do all this for us to grow and have a happy life now and forever more! You are my baby girl and i couldnt be any more happier because now i have you next to me either like this or next to me in my heart and soul! I love you my princess!!!"
  );
});
