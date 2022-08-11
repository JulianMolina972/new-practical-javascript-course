const $ = (id) => document.getElementById(id) 

const inputPrice = $('get-price')
const inputDiscount = $('get-discount')
const calculate = $('calculate')
const resultPrice = $('price-result')



let coupons = []


class Coupon {
  constructor(coupon, discount){
    this.coupon = coupon
    this.discount = discount
  }

}

let fall = new Coupon('fall', 30)
let winter = new Coupon('winter', 30)
let summer = new Coupon('summer', 40)
let sprint = new Coupon('sprint', 60)
let basic = new Coupon('basic',9)


coupons.push(fall, winter, summer, sprint, basic)

console.log(coupons)


// let discount = inputDiscount.value
// console.log(discount)
// if(discount === 'fall') {
//   console.log('ok')
// }

// coupons.forEach((item) => {
//   if(item.coupon === discount){
//     console.log(`El cupon tiene un descuento de: ${item.discount}`)
//   }
// })



calculate.addEventListener('click', calculateDiscount)


function calculateDiscount(event) {
  
  const price = Number(inputPrice.value)
  const discount = inputDiscount.value  
  console.log(typeof discount)
  console.log({
    price,
    discount
  })
  if (!price || !discount){
    resultPrice.innerText = 'Please, enter the price and coupon'
    return
  }
  
  // if (discount === 'fall'){
  //   resultPrice.innerHTML = (price * (100 - fall)) / 100
  // } else if (discount === 'winter') {
  //   resultPrice.innerHTML = (price * (100 - winter)) / 100
  // } else if (discount === 'summer') {
  //   resultPrice.innerHTML = (price * (100 - summer)) / 100
  // } else {
  //   resultPrice.innerHTML = 'Please, enter a valid coupon'
    
  // }
  
  coupons.forEach((item) => {
    if(item.coupon === discount){
      resultPrice.innerHTML = (price * (100 - item.discount)) / 100
    } else {
      resultPrice.innerHTML = 'Please, enter a valid coupon'
    }
  })
  

  
}
