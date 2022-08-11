console.group('Square')

const squareSide = 3;
const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;


function calculateSquare (side) {
  return {
    perimeter: side * 4,
    area: side * side
  }
}

console.log(calculateSquare(squareSide))

console.groupEnd('Square')



console.group('Triangle Isosceles')
//triangle isosceles

const triangleBase = 7;
const triangleSide1 = 5;
const triangleSide2 = 9;



function calculateTriangleIsosceles(side1, side2, base) {
  if(side1 != side2 || base == side1 && side2 ) {
    return console.warn('It is not a triangle isosceles')
  } else {
    const height = Math.sqrt(Math.pow(side1, 2) - (Math.pow(base, 2) / 4));
    return {
      perimeter: side1 + side2 + base,
      area: (base * height) / 2
    }
  }
  

}

console.log(calculateTriangleIsosceles(triangleSide1, triangleSide2, triangleBase))

console.groupEnd('Triangle Isosceles')

console.group('Triangle Scalene')
//triangle scalene


//half perimeter


//height 

function calculateTriangleScalene(side1, side2, base) {
  if(side1 !== side2 && side1 !== base && side2 !== base) {
    //half perimeter
    const halfP = (base + side1 + side2) / 2
    //height 
    const h = (2 / base) * Math.sqrt(halfP*(halfP - base)*(halfP - side1)*(halfP- side2))
  
    return {
      perimeter: halfP * 2,
      area: (1 / 2) * base * h,
      height: h
  
    }
  } else {
    console.warn('It is not a triangle scalene')
  }
}

console.log(calculateTriangleScalene(triangleSide1, triangleSide2, triangleBase))

console.groupEnd('Triangle Scalene')

//circle

console.group('Circle')

const radius = 3;




function calculateCircle(radius) {
  const PI = Math.PI;
  const diameter = radius * 2;
  return {
    circumference: diameter * PI,
    circleArea: Math.pow(radius, 2) * PI
  }
}
console.log(calculateCircle(radius))

console.groupEnd('Circle')