function vacation(people, typeOfGroup, dayOfWeek) {
    let price = 0;
    let totalPrice = 0;
   
    if (dayOfWeek == "Friday") {
      switch (typeOfGroup) {
        case "Students":
          price = 8.45;
          break;
        case "Business":
          price = 10.9;
          break;
        case "Regular":
          price = 15;
          break;
      }
    } else if (dayOfWeek == "Saturday") {
      switch (typeOfGroup) {
        case "Students":
          price = 9.8;
          break;
        case "Business":
          price = 15.6;
          break;
        case "Regular":
          price = 20;
          break;
      }
    } else if (dayOfWeek == "Sunday") {
      switch (typeOfGroup) {
        case "Students":
          price = 10.46;
          break;
        case "Business":
          price = 16;
          break;
        case "Regular":
          price = 22.5;
          break;
      }
    }
   
    if (typeOfGroup === "Students" && people >= 30) {
      totalPrice = people * price * 0.85;
    } else if (typeOfGroup === "Business" && people >= 100) {
      totalPrice = (people - 10) * price;
    } else if (people >= 10 && people <= 20) {
      totalPrice = people * price * 0.95;
    } else {
      totalPrice = people * price;
    }
   
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
  }
   
  vacation(30, "Students", "Sunday");