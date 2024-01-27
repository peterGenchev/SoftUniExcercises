function suppliesForSchool(input){

    let pancil = Number(input[0]);
    let marker = Number(input[1]);
    let liquid = Number(input[2]);
    let discount =Number(input[3]);
    
    let panPack = pancil * 5.80;
    let markPack = marker * 7.20;
    let liquidDesk = liquid * 1.20;
    let price = panPack + markPack + liquidDesk;
    let discPrice = (discount / 100) * price;
    let totalPrice = price - discPrice;
    console.log(totalPrice)
  }