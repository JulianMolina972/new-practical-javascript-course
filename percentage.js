const $ = (id) => document.getElementById(id) 

const inputPrice = $('get-price')
const inputCoupon = $('coupon')
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

// const couponsObj = {
//   'fall': 30,
//   'winter': 40,
//   'summer': 20,
//   'sprint': 10
// }


const couponsList = [];
couponsList.push({
  name: 'fall', 
  discount:'30'
})

couponsList.push({
  name: 'winter', 
  discount:'40'
})

couponsList.push({
  name: 'summer', 
  discount:'20'
})

couponsList.push({
  name: 'sprint', 
  discount:'10'
})



calculate.addEventListener('click', calculateDiscount)


function calculateDiscount(event) {
  
  const price = Number(inputPrice.value)
  const coupon = inputCoupon.value  


  
  
  if (!price || !coupon){
    resultPrice.innerText = 'Please, enter the price and coupon'
    return
  }

  let discount;

  function couponsItem(couponItem) {
    return couponItem.name == coupon;
  }

  const couponInArray = couponsList.find(couponsItem)
  
  if (couponInArray) {
    discount = couponInArray.discount
  } else {
    resultPrice.innerHTML = 'Please, enter a valid coupon'
    return
  }

  

  // if(couponsObj[coupon]) {
  //   discount = couponsObj[coupon];
  // }else {
  //   resultPrice.innerHTML = 'Please, enter a valid coupon'
  //   return
  // }

  console.log({
    price,
    coupon,
    discount,
    couponInArray
  })
  
  // if (discount === 'fall'){
  //   resultPrice.innerHTML = (price * (100 - fall)) / 100
  // } else if (discount === 'winter') {
  //   resultPrice.innerHTML = (price * (100 - winter)) / 100
  // } else if (discount === 'summer') {
  //   resultPrice.innerHTML = (price * (100 - summer)) / 100
  // } else {
  //   resultPrice.innerHTML = 'Please, enter a valid coupon'
    
  // }

  resultPrice.innerHTML = (price * (100 - discount)) / 100
  
  
}
