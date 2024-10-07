// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
//ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า

let minQuantityOfAllFruit=inventory[0].quantity
let minQuantityOfAllFruitName=inventory[0].name;    

for(let i=0;i<inventory.length;i++){

  if(minQuantityOfAllFruit>inventory[i].quantity){
    minQuantityOfAllFruit=inventory[i].quantity;
    minQuantityOfAllFruitName=inventory[i].name
    
  }
  //console.log(inventory[i].quantity)
}

console.log("สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ "+minQuantityOfAllFruitName+" ซึ่งมี "+minQuantityOfAllFruit+" ชิ้น");
