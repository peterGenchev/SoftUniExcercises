function fishTank(input){

    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);
    let procentage = Number(input[3]);
  
    let volume = (lenght * widht * height) * 0.001;
    let space = procentage / 100;
    let litersNeed = volume * (1 - space);
    console.log(litersNeed)
  
  }