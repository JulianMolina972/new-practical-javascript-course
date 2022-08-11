/*
En matemáticas y estadística, la media geométrica de una cantidad arbitraria de números (por decir n números) es la raíz n-ésima del producto de todos los números; es recomendada para datos de progresión geométrica, para promediar razones, interés compuesto y números índice.
*/

//Tasa de crecimiento porcentual anual de las ganancias en las empresas comerciales del año 2017 al 2021
const growthRate = [
  {year : 2017, value: 53},
  {year : 2018, value: 67},
  {year : 2019, value: 89},
  {year : 2020, value: 46},
  {year : 2021, value: 90}
]

function geometricMedian(data) {
  const value = data.map(item => item.value)
  const multiplicationValue = value.reduce((a,b) => a * b)
  const n = data.length
  const geoMedian =  (Math.pow(multiplicationValue, 1/n)).toFixed(2)
  return geoMedian;
}

console.log(geometricMedian(growthRate));