// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
// - ให้เขียนฟังก์ชันชื่อ `calculateTotalPrice` ที่รับ `products` และ `promotionCode` เป็น Argument
// - โดยที่ฟังก์ชันจะ Return ผลลัพธ์ออกมาเป็น มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้าสินค้า โดยที่จะต้องสามารถคำนวนมูลค่าพร้อมโค้ดส่วนลดได้ตามเงื่อนไขต่อไปนี้
       
//     | โค้ดส่วนลด        | ส่วนลด                              |
//     | ---             | ---                                 |
//     | `"SALE20"`      | ลด 20% จากมูลค่ารวมของสินค้า**ในตะกร้า** |
//     | `"SALE50"`      | ลด 50% จากมูลค่ารวมของสินค้า**ในตะกร้า** |
//     | ไม่มี             | ไม่ได้รับส่วนลด                         |
// - ตัวอย่างเช่น
//     - ถ้า `promotionCode` มีค่าเป็น `""` ฟังก์ชันจะ Return ค่า `85`
//     - ถ้า `promotionCode` มีค่าเป็น `"SALE20"` ฟังก์ชันจะ Return ค่า `68`
//     - ถ้า `promotionCode` มีค่าเป็น `"SALE50"` ฟังก์ชันจะ Return ค่า `42.5`


function calculateTotalPrice(inCart,couponCode){
  let totalPriceBeforeCode=0;
  let totalPriceAfterCode=0;
  let discount=0;
    for(let i=0;i<inCart.length;i++){
      totalPriceBeforeCode+=inCart[i].price*inCart[i].quantity;
    }
    //console.log(totalPriceBeforeCode);

    if(couponCode==="SALE20") {discount=20;}
    else if(couponCode==="SALE50") {discount=50;}
    else {discount=0;}
    //console.log(discount);

    totalPriceAfterCode=totalPriceBeforeCode*((100-discount)/100);     
    return totalPriceAfterCode;
}

console.log(calculateTotalPrice(products,promotionCode));