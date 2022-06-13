// function detectCollision(objects, point) {
//     for (let i = 0; i < objects.length; i++) {  
//       let object = objects[i]  
//       if (point.x >= object.x && point.x <= object.x + object.width &&  
//           point.y >= object.y && point.y <= object.y + object.height)  
//         return object  
//     }  
//   } 

let detectCollision = (objects, point) => {
    for(let item of objects){
        if(point.x >= item.x &&
            point.x <= item.x + item.width &&
            point.y >= item.y &&
            point.y <= item.y + item.height)
            return item
    }
}

  const myObjects = [  
    {x:  10, y: 20, width: 30, height: 30},  
    {x: -40, y: 20, width: 30, height: 30},  
    {x:   0, y:  0, width: 10, height:  5} 
  ]  

// let [obj1, obj2, obj3] = myObjects
//   let {x: x1, y: y1, width: w1, height: h1} = obj1
//   let {x: x2, y: y2, width: w2, height: h2} = obj2
//   let {x: x3, y: y3, width: w3, height: h3} = obj3

// for(let item of myObjects){
//     let {x, y, width, height} = item
//     console.log(x, y, width, height)
//     console.log(`------------`)
// }
    
  console.log(detectCollision(myObjects, {x: 4, y: 2}))