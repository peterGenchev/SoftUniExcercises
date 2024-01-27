function foodDelivery(input){
    let chickenMenuOrder = Number(input[0])
    let fishMenuOrder = Number(input[1])
    let vegMenuOrder = Number(input[2])

    let chickenMenu = chickenMenuOrder * 10.35;
    let fishMenu = fishMenuOrder * 12.40;
    let vegMenu = vegMenuOrder * 8.15;
    

    let price = fishMenu + chickenMenu + vegMenu;
    let deserPrice = price * 0.20;
    let allPrice = price + deserPrice + 2.50;
    console.log(allPrice)

}