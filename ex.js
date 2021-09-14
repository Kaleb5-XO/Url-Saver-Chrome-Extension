
//-------------------------------------------------------------
// localStorage.setItem("Hello","Kaleb")
// localStorage.setItem("bro","Howdy")
// localStorage.clear()
// console.log(localStorage.getItem("Hello"))
// console.log(localStorage.getItem("bro"))
// const containerEl = document.querySelector(".container")
// containerEl.innerHTML = "<button onclick ='renderO()'>BUY!</button>"

// function renderO(){
//     containerEl.innerHTML += "<p>thank you for buying!</p>"
// }

// const receipient = "Elon Musk"
// const sender = "Kaleb"
// // const email = "Hey " + recipient + "!how is it going? Cheers kimbal"
// const email = `Hey ${receipient} 
//     !how is it going? 
// Cheers ${sender}`

// console.log(email)

// myLeads = JSON.parse(myLeads)
// myLeads.push("Hello Kaleb,how are you?")

// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)
// console.log(typeof myLeads)

// const credits = 0
// if(credts > 0){
//     console.log("let's play")
// }
// else{
//     console.log("sorry, you have no credits")
// }

// console.log(Boolean(""))//false
// console.log(Boolean("0"))//true
// console.log(Boolean(100))//true
// console.log(Boolean(null))//false
// console.log(Boolean([0]))//true
// console.log(Boolean(-0))//false

// const welcomeEl = document.querySelector("#welcome-el")
// let userName = "Kaleb"
// let intro = "Welcome back"
// let emo = '👋'

// function greetUser(greeting,name,emoji){
//     welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
// }
// greetUser(intro,userName,emo)

// function add(a,b){
//     return a + b
// }

// console.log(add(4,3))
// console.log(add(9,102))

// const mayr = ["kaleb","is",22]
// function getFirst(arr){
//     return arr[0]
// }
// console.log(getFirst(mayr))

// const player = "Kaleb"
// const opponent = "Nicola"
// const game = "Amazing Fighter"
// let points = 0
// let hasWon = false

// points += 100
// hasWon = true

// if(hasWon){
//     console.log(`${player} got ${points} points and Won!!!`)
// }
// else{
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }
// let myCourses = ["Learn CSS Animation","UI Design Fundamentals","Intro to Clean Code"]

// function logOut(array){
//     for(let i =0;i<array.length;i++){
//         console.log(array[i])
//     }
// }

// logOut(myCourses)
// let Uname = "Kaleb"
// localStorage.setItem("name",Uname)
// console.log(localStorage.getItem("name"))

// let data = [
//     {
//         player:"Peter", 
//         score:52
//     },
//     {
//         player:"Mary",
//         score:53
//     }
// ]
// const Exbtn = document.querySelector("#ex-btn") 
// Exbtn.addEventListener("click",function(){
//     console.log(data[1].score)
// })
// let description = "largest countries"
// let values = ["China","India","USA"]

// function generateSentence(desc,arr){
//     let list = ''
//     // const lastIndex = arr.length - 1
//     for(let i = 0;i<arr.length-1;i++){ // secon way remove -1
//         list += arr[i]+", "
//         // if(i === lastIndex){
//         //     list += arr[i]+"."
//         // }
//         // else{
//         //     list += arr[i]+", "
//         // }
//     }
//     list += arr.at(-1) + "."
//     return `The ${arr.length} ${desc} are ${list}`
// }

// console.log(generateSentence(description,values))

// const ImgEl = document.querySelector("#imgWrp")
// const imgs = [
//     "a.png",
//     "b.png"
// ]

// function renderOut(){
//     let list = ''
//     for(let i = 0; i < imgs.length; i++){
//         list += `<img alt="pictures" src ="${imgs[i]}" width="100px" height="100px" style="border-radius:50%;margin-right:10px;">` 
//     }
//     ImgEl.innerHTML = list
// }
// renderOut()