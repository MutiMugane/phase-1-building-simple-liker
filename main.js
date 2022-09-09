// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeBtn = document.querySelector(".like");
let likeIcon = document.querySelector("#like-glyph");
  //count = document.querySelector("#count");

  let clicked = false;

  likeBtn.addEventListener("click", () => {
    if (!clicked) {
      clicked = true;
      likeIcon.innerHTML = FULL_HEART ;
      count.textContent++;
    } else {
      clicked = false;
      likeIcon.innerHTML =EMPTY_HEART  ;
      count.textContent--;
    }
  });



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
