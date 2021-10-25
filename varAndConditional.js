let jonSnowAttack = 25
let jamieLannisterAttack = 35

if(jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow hasbetter attack than Jamie Lannister.")
} elseif (jonSnowAttack=== jamieLannisterAttack) {
    console.log("Jon Snow and Jamie Lannister")
}

//if (jonSnowAttack > jamieLannisterAttack){
 //   console.log("JOn Snow has better attack han Jamie Lannister.")
//} elseif (jonSnowAttack === jamieLannisterAttack) {

//}
    

//console.log("JonSnow nd Jamie Lannister have the same attack.")
 







   
//} else {
    //console.log("Jamie Lannister has better attack than Jon Snow.")
//} 


let jonSnowHealth = 100
let jonSnowDefense = 0

if(jonSnowHealth <= jamieLannisterAttack){
    console.log("Jon Snow has been slain.")
} else{
    //JonSnowHealth -= jamieLannisterAttack
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log ("Jon Snow's health is down to $(jonSnowHealth)")
}

jonSnowDefense += 25

if(jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log("JOnSnow has been slain.")

} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log ("JOn Snow's Health is down to $(JOnSnowHealth)")
} 


elseif (jonSnowHealth + 50) >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth+= 50

}let coinLandsHead = false

//if (coinLandsHeads === true){
 //console.log("The fight continues1")
//}else{ 
  //  console.log("Jon is allowed to run away")
//}

if(coinLandsHead !== false){
    console.log("The fight continues")
}else{
    console.log("Jon is allowed to runaway.")
}
//for (let i = 0, i < 5, i++){
  //  if(jonSnowHealth <= 0 ){
    //    console.log("Jon Snow has been slain.")
    //}else{
      //  jonSnowHealth -= (jamieLannisterAttack = jonSnowDefense)
        //console.log ("on Snow's health is ${jonSnowhealth}")
   // }

//}
while (jonSnowHealth > 0){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log("Jon Snow's health is ${jonSnowHealth}")
    if (jonSnowHealth <=0){
        console.log("Jon Snow has been slain.")
    }
}

let backpack = []

backpack.push("sword")//put the sword in this array that we created
//we will get his food and shield
backpack.push("shield")
backpack.push("food")
//we will use the technique called splicing that will add the material 
//when  needed as backpack is full
console.log(backpack)//we would be able to see the backpack content

backpack.splice(0,1)//Arrays are 0 index starts counting from 0 and second nuber is 
//how many items we need to remove.
//["sword", "shield", "food"]
//   0        1         2 index

let furCoat = "fur coat"

backpack.push(furCoat)

console.log(backpack)

// removes the last element
backpack.pop()

let itemCount = backpack.length //it counts the number of items in an array

//there are 3 items in the list as we took out one and replaced

backpack.push("flint", "blanket", "knife", "toothbrush")

var backpack2 = backpack.splice(2, 5)

console.log(backpack2[0])

for(let i = 0; i<backpack.length; i++){
    console.log(backpack[i])
}// if we want first 3 items 
//for (let i = 0; i<3; i++){
    //console.log(backpack[i])
//}

if (backpack.length >= 3){
    for (let i = 0; i<3; i++){
        console.log(backpack[i])
    }
}else {
    for(let i = 0; i< backpack.length; i++)

    console.log(backpack[i])
}
let guessMe = 54
while (guessMe < 100){
    console.log("")

    if(guessMe % 4 == 0 || guessMe % 5 == 0){
        console.log("guessMe is divisible by 4 or 5. Added 25")
        guessMe +=25

    } else if (guessMe % 3 == 0){
        console.log(" guessMe is divisible by 3. Subtract 27")
        guessMe -=27
    } else {
        console.log("Added 3.")
        guessMe +=3
    }
    guessMe+=22
    console.log("guessMe is now ${guessMe}")
}
//Modulo is a kind of remainder
//Modulo can be used to check whther the number is equal or odd
//let num = 56
//if (num % 2 === 0){
    //console.log("its even")
//} else {
    //console.log ("its odd")
//}
