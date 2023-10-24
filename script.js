function initialize(){
  
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
