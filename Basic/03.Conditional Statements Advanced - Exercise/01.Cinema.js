function cinema (input){


    let movie = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let income = r * c


    switch (movie){
        case "Premiere" : income = r * c * 12;break;
        case "Normal" : income = r * c * 7.50;break;   
        case "Discount" : income = r * c * 5.00;break;    
        
    }
  


console.log(`${income} leva`)

}