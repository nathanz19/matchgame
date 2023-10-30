let randomizedImages = assignRandomNumbers();
let images = document.querySelectorAll("img");
let totalNumberOfClicks = 0;
let tempImageID = ""

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
    // images[i].src = `${randomizedImages[i]}.png`;
    
    images[i].src = `0.png` //changed every image to image 0
    //we need to create smth that can assign each image to a value number, then if it matches it will reveal it and stay revealed.
    images[i].addEventListener("click", revealImage);
  }
}

function revealImage(event) {
  var CurrentImage = document.getElementById(event.target.id);
  console.log("Reveal Image Triggered");
  totalNumberOfClicks++;
  console.log(totalNumberOfClicks);
  console.log(CurrentImage);
  switch (totalNumberOfClicks % 2) {
    case 0:
      break;

    case 1:
      tempImageID = CurrentImage.id;
      
      break;
  }

}
