function depositCalculator (input){
    let depositSum = Number(input[0])
    let period = Number(input[1])
    let percent = Number(input[2])
  
    let lihva = (depositSum * percent) / 100
    let lihvaOneMonth = lihva / 12
    let lihvaSum = depositSum + period * lihvaOneMonth
    console.log(lihvaSum)
  
  }