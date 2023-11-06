let randomizedImages = assignRandomNumbers();
let images = document.querySelectorAll("img");
let totalNumberOfClicks = 0;
let tempImageID = "";

function initialize() {
  assignImages();
  console.log(randomizedImages);
  console.log(images)
}

function assignRandomNumbers() {
  const arr = [];
  for (let i = 1; i <= 8; i++) {
    arr.push(i, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function assignImages() {
  for (let i = 0; i < images.length; i++) {
    images[i].src = `0.png`;
    images[i].addEventListener("click", revealImage);
    images[i].setAttribute("data-id", i);
  }
}

const score = document.getElementById("score");
clickable = 0;
firstImageId = "";
secondImageId = "";
firstImage = "";
winNum = 0;
function revealImage(event) {
  if (winNum <= 8) {
  var currentImage = event.target;
  var imageID = currentImage.getAttribute("data-id");
    if (currentImage.src.includes("0.png")) {
  
    if (clickable == 0) {
      firstImageId = imageID;
      firstImage = currentImage;
    }
    if (clickable == 1) {
      secondImageId = imageID;
    }
    if (clickable < 2) {
      clickable = clickable + 1;
      totalNumberOfClicks++;
      console.log("Reveal Image Triggered");
      console.log(totalNumberOfClicks);
      tempImageID = imageID;
      currentImage.src = `${randomizedImages[tempImageID]}.png`;
      score.innerHTML = `Number of Clicks: ${totalNumberOfClicks}`;
    }
    if (clickable == 2) {
      setTimeout(() => {
        if (randomizedImages[firstImageId] == randomizedImages[secondImageId]) {
          console.log("Match Found");
          clickable = 0;
          var audio = new Audio('mixkit-correct-answer-fast-notification-953.wav');
          audio.play();
          winNum++;
          console.log(winNum);
          if (winNum >= 8) {
            var audio = new Audio('Valorant Victory  Match Win - Official Theme  Episode 5 Act I.mp3');
            audio.play();
          }
        } else {
          console.log("Match Not Found");
          currentImage.src = "0.png";
          firstImage.src = "0.png";
          clickable = 0;
          var audio = new Audio('buzzer-or-wrong-answer-20582.mp3');
          audio.play();
        }
      }, 1500);
    }
    }
  }
}


// function assignImages() {
//   for (let i = 0; i < images.length; i++) {
//     // images[i].src = `${randomizedImages[i]}.png`;

//     images[i].src = `0.png` //changed every image to image 0
//     //we need to create smth that can assign each image to a value number, then if it matches it will reveal it and stay revealed.
//     images[i].addEventListener("click", revealImage);
//   }
// }

// function revealImage(event) {
//   var CurrentImage = document.getElementById(event.target.id);
//   console.log("Reveal Image Triggered");
//   totalNumberOfClicks++;
//   console.log(totalNumberOfClicks);
//   console.log(CurrentImage);
//   switch (totalNumberOfClicks % 2) {
//     case 0:
//       break;

//     case 1:
//       tempImageID = CurrentImage.id;

//       break;
//   }
//   CurrentImage.src = `${randomizedImages[tempImageID]}.png`;
//   console.log(`${randomizedImages[tempImageID]}`);

// }
