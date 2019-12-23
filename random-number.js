
function randomIntFromInterval(min = 0, max = 100) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  console.log(randomIntFromInterval());

  export {randomIntFromInterval as default};



