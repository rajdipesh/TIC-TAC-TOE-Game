// console.log("Hello world");
// console.log("DIPESH RAJ");
// x=null;
// console.log(x)
// let student={
//     name : "DIPESH RAJ",
//     age:23,
//     cgpa:8.77
// };
// console.log(student);
// student.cgpa=student.cgpa+1
// console.log(student.cgpa);
// //object create by the name of product
// const p={
//     penName : "ParkerJotter",
//     rating : 7002,
//     price :270
// };
//console.log(product);

// const profile ={
//     userName: "Shardha khapra",
//     followers: 569,
//     following: 4,
//     isfollow: false
// };
// console.log(profile);
// let A=5;
// let B=10;
// console.log("A+B =",  A+B);
//UNAEY OPERATOR
//  let a=5;
//  let b=6;
//  console.log("a= ",a," & b= ",b);
//  a--;
//  console.log("a= ",a);
//Assignment operator
// let a=5;
// let B=5;
// a+=4;//a=a-4 & a+=4  a=a+4
// console.log("a= ",a);
//console.log("5!=2",a!=B);
//conditional staement
// let age=18;
// if(age>=21)
// {
//    console.log("You can vote");
// }
// if(age<25){
//     console.log("You CANNOT vote");
// }
// let mode = "light";
// let color;

// if(mode==="dark"){
//     color = "black";
// }
// else{
//     color = "white";
// }

// console.log(color);

// let age =20;
// if(age>=18){
//     console.log("vote");
// }else{
//     console.log("not vote");
// }
//we check no. is odd or even
// let i=4;

// if(i%2==0){
//     console.log(i,"is Even");
// }else{
//     console.log(i,"is odd");
// }
//Ternary operator
// let age =20;
// age>18 ? console.log( "Adult") : console.log("Not adult");
//console.log(result);
//Check a no.is multiple 5 or not
// alert("Hello");
//prompt is used to take input from user 
// let num =prompt("Enter numner");
// if(num%5==0){
//     console.log(num,"ia a multiple of 5");
// }else{
//     console.log(num,"is not multiple of 5");
// }

//Assigning grades to the students
// let num =prompt("Enter Scores");
// let GRADE;
//    if(num>=90 && num<=100)
// {
//     //console.log(num,"GRADE 'A'");
//      GRADE ="A";
// }
//    else if(num>=70 && num<=89)
// {
//     //console.log(num,"GRADE 'B'");
//     GRADE ="B"
// }
//    else if(num>=60 && num<=69)
//    {
//     //console.log(num,"GRADE 'C'");
//     GRADE ="C";
//    }
//    else if(num>=50 && num<=59)
//    {
//     //console.log(num,"GRADE 'D'");
//     GRADE ="D";
//    }
//      else
//      {
//     //console.log(num,"GRADE 'F'");
//     GRADE="F";
//    }

//    console.log(num,GRADE);

//WE understand for loop
//  for(let i=0;i<=5;i++){
//      console.log(i);
//  }

//calculate sum of 1 to 5
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log(sum);
//for(let i=1;i>=0;i++){
//       console.log(i);   it will run infinite loop 
//}
//using of while loop
// let i=1
// while(i<=5){
//   console.log(i);
//   i++;
// }
//do-while loop
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);
     //for-of loop =it is only used for string and arrays
    //  let str ="dipeshRaj";
    //  let size=0;
    //  for(let val of str){
    //    console.log("value of i: ",val);
    //      size++;
    //  }

    //  console.log("string size: ", size);

 //for-in loops=used for object    by using for-in loops we can know key-value pairs
 //now we make object
//  let student ={
//     name:"Dipesh raj",
//     age:21,
//     cgpa:8.7,
//     isPass: true,
//  };

//  for(let key in student){
//     console.log("key: ",key,": value- ",student[key]);
//  }

    //print all even no. from 0 to 100
    //  for(let i=0;i<=100;i++){
    //      if(i%2!=0){
    //      console.log("Odd no.: ",i);
    //      }
    //  }
//creATE a game
// let gameNum =25;
// let userNum=prompt("Guess the Game Number: ");

// while(userNum!=gameNum){
//     userNum= prompt("You Entered Wrong Number Guess Again: ");
// }

// console.log("Congratulation You Have Entered The Right Number")

    //strings
    // let str="Dipesh raj";
    // console.log(str[8]);

//Template Literals
// let specialString=`This is a template literal`;
// console.log(specialString);

// let obj={
//     item: "pen",
//     price: 10,
// };
//when we have to write varible such as obj.item will be ${obj.item}
// let result=`the cost of ${obj.item} is ${obj.price}`;
//    console.log(result);
//console.log("item Name is",obj.item,"and Price is ",obj.price);

//String Method in JS is =str.toUpperCase()|str.toLowerCase|str.trim=Trim is used to removes whitespaces from start and last spaces
//console.log("apnacollege");
// let str="apnacollege";
// console.log(str.toUpperCase());
//Strings in JS is immutable

//for concat
//  let str1="DIPESH";
//  let str2="RAJ";

//  let result=str2.concat(str1);//in JS we cam concate by using + sign such as let result=str1+str2;
//  console.log(result);
//string.replace(" a"," b")
// let str ="hello";
// console.log(str.replace("h","y"));

//Generate a username based on the input
//let user=prompt("Enter Full Name");
//let userName="@"+user+user.length;
//console.log(userName);
//console.log("@"+user+user.length);

//arrays
// let marks=[20,30,40,50,90,80];
// console.log(marks);
//let names=["ram","shyam","sohan","mohan","krishna"];
//console.log(names);
//strings are immutable but arrays are immutable
// for(let i=0;i<names.length;i++){
   
//     console.log(names[i]);

// }
  //for-of loop
//   let cities=["Delhi","Jaipur","Mumbai","Patna","Banglore"];

//   for(let city of cities){
//     console.log(city.toLowerCase());
//   }

//find average marks of the entire class
 //let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let mark of marks){
//    // sum=sum+mark;
//    sum+=mark;
    
// }
// let avg=sum / marks.length;
// console.log(`Average marks of the class is ${avg}`);
// let sum=0;
// for(let mark=0;mark<marks.length;mark++){
    
//     sum=sum+marks[mark];
    
// }
// let avg=sum / marks.length;
// console.log(`average marks of entire class is ${avg}`);

  //change to store final price after applying offer
  //let items=[250,645,300,900,50];

//   let i=0;
//   for(let val of items){
//     let offer =val / 10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
//   }
// for(let val=0;val<items.length;val++){
//     let offer =items[val] /10;
//     items[val]=items[val]-offer;
//     //console.log(`value after offer ${items[val]}`);
// }
// console.log(items);
   //Array Methods=push():addd to end ||pop():delete from end & return ||toString():converts array to string 
//    let foodItems=["chips","potato","onion","lichi"];
//    foodItems.push("bajra");
// console.log(foodItems.toString());
    //shift():delete from start & return 
    //let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
   // companies.splice(0,1);
    //console.log(result);
    // let result=companies.splice(2,1,"ola");
    // console.log(result)
    // function addNumbers(num1,num2){
    //   return num1+num2
    // }
    // console.log(addNumbers(1,2));

    //Functions and Methods in function we have to return functionName
    // function myFunction(){
    //   console.log("Hello world");
    //   console.log("We are Learning JS:)");
    // }
    // myFunction();//it means function call

    // function myFunction(msg){//parameter passed
    //     //parameter ->input
    //     console.log(msg);

    // }
    // myFunction("I belive in God ");//argument 

    // function sum(a,b){
    //   console.log(a+b);
    // }
    // sum(5,5);

    //Make sum Function
//     function sum(a, b){
//       return a+b;
//  }

//  //multiplication function
//  function mul(a,b){
//   return a*b;
//  }
   //if we do not want make functions then we make Arrow functions instead of functions
   //and it can be store in any varibles
    
   //sum Arrow functions
  // const sum =(a,b) =>{
  //   console.log(a+b);
  // }
//  sum(3,5);
//create a function keyword that takes a Steing as an argument &returns the number of vowels in the string

// function countVowels(str){
//   let count =0;
//     for(const char of str){
//      if(
//         char =="a" || 
//         char =="e"|| 
//         char =="i" || 
//         char =="o" || 
//         char =="u")
//         {
//            count++;
//      }
//     }
//     console.log(count);
// }
//  countVowels("DiPESH");
    
//create an arrow function to perform the same task
//  const countVowels=(str) =>{
//   let count =0;
//   for(const char of str){
//     if(
//             char =="a" || 
//             char =="e"|| 
//             char =="i" || 
//             char =="o" || 
//             char =="u"){
//               count++;
//             }
//   }
//   console.log(count);
//  }
//  countVowels("iPESH");

    //forEach Loop in Arrays
   // let arr=[1,,2,3,4,5];
    // let arr=["DELHI","PATNA","SUPAUL"]
    // // arr.forEach(function printVal(val){
    // //   console.log(val);
    // // });

    // arr.forEach((val)=>{
    //   console.log(val.toLocaleLowerCase());
    //  })
    //forEach is called Higher order Function/Methods either it takes fix parameter or either fix return as output

    //print the square of each value using the foeEach loop
    // let arr=[1,2,3,4,5];
     
    // arr.forEach((val) => {
    //     console.log(val*val);
    // })

    //filter array
    // let arr =[1,2,3,4,5,6,7];

    // let evenNum=arr.filter((val) =>{
    //   return val%2==0;
    // })
    // console.log(evenNum)

    //filter out the marks of students thart scored 90+

    // let marks=[20,99,100,120,95,40,97];

    //  const scored=marks.filter((val) =>{ 
    //     return val>90;
    // });
    // console.log(scored);

    //  let n=prompt("Give your Input: ");

    //  let arr =[];

    //  for(let i=1;i<=n;i++){
    //    arr[i-1]=i;
    //  }
    //  console.log(arr);

    //  let sum= arr.reduce((prv,curr) =>{
    //       return prv+curr;
    //   });
    //   console.log(sum);

    //  let product=arr.reduce((prv,curr) =>{
    //             return prv*curr;
    //  });
    //  console.log(product);

    // console.dir(document.body);
    // console.log(document.body);
    // let heading= document.getElementById("color");//h1
    // console.dir(color);


    // let heading=document.getElementsByClassName("heading");
    // console.log(heading);
    // console.dir(heading);

    //query selector=It returns nodeList either it is Id,list or class it works for all
    // let element=document.querySelector("p");
    // console.log(element);

    // let element1=document.querySelectorAll("p");
    // console.log(element1);
    // //when we query of class then we use .classname
    // let element3=document.querySelector(".heading");
    // console.log(element3);

    // let element4=document.querySelectorAll(".heading");
    // console.log(element4);

    //in id query we can not use querySelectorAll
    //in id query we use #idname
    // let element5=document.querySelector("p");
    // console.log(element5)
    //we have to read about first child, last child in DOM and we have to read text node,comment node & element node on MDN website

    // let div=document.querySelector("div");
    // console.log(div);
    //in innerText only text come but innerHtml all tags also come
  //  let create=document.querySelector("h2");
  // // console.log(create.append(" from Apna College students."));
  // console.log(create.innerText);
  // create.innerText=create.innerText+" from Apna College students";
  //innerText is also used to append or add text and anything

  // let text=document.querySelectorAll(".box");
  // console.log(text);
  // text[0].innerText="new unique value 1";
  // text[1].innerText="new unique value 2";
  // text[2].innerText="new unique value 3";
  // let idx=1;
  // for(let div of text ){
  //   div.innerText=`neew unique value ${idx}`;
  //   idx++;
  // }

  // for(let i=1;i<=text;i++){
  //   i.innerText=`new unique value ${i}`;
  // }

  // let box=document.querySelector(".div");{
  //     console.log(box);
  // }
  //new element ko add krne ke liye tro steps process first we have to create
  //agar p, button kuch bhi add krna hi to pahle usko crete krenge
  //by let ele=document.createElement("div")
  //then we have to add with node name such as node.append(el) append jo hi wo add krta hi end of node inside


  // let newBtn=document.createElement("button");
  // newBtn.innerText="click me!";
  // console.log(newBtn);
  

  //let div=document.querySelector("div");
  //div.append(newBtn);
  //agar add krena start of node then
  //div.prepend(newBtn);
  //agr div ke just pahle to
  //div.before(newBtn)
  //agar div ke just outside 
  // div.after(newBtn);
  // console.log(div);

  //agr hmko paragraph ke bhi bhar then we have to access that tag and then follow all above process
// let p=document.querySelector("p");
// p.append(newBtn);

//agr js ka us krke hi hmko text badlna hi ya likhna to ye process follow krenge pahle create krenge then append

// let heading=document.createElement("h1");
// heading.innerHTML="<i>Hi!I am new.</i>"
// console.log(heading);
// //ab access krenge

// let body=document.querySelector("body");
// body.prepend(heading);

// let heading=document.createElement("h1");
// heading.innerHTML="<i>Hi!I am new.</i>";

// document.querySelector("body").prepend(heading);

//study about uses of appendChild() & removeChild() on mdn

// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";

// //agr style dena hi to node.style
// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";

// //console.log(newBtn);
// //ab insert
// let insert=document.querySelector("body");
// insert.prepend(newBtn);
//let btn1=document.querySelector("#btn1");

// btn1.onclick=()=>{
//      console.log("You have clicked button");
//      let a=5;
//      let b=5;
//      let sum=a+b;
//      console.log(sum);
     
// }

//eventListener ke through hm kitna bhi function print kra skte hi
//node.eventListener(event,function) such as
// btn1.addEventListener("click",(evt) =>{
//    console.log("button1 was clicked");
//    console.log("button2 was clicked");
//    console.log(evt);
//    console.log(evt.type);
// });

// let moddeBtn=document.querySelector("#mode");
//    let body=document.querySelector("body"); 
// //now we use eventListener
// let currMode="Light";
// moddeBtn.addEventListener("click",()=>{
//      if(currMode=="Light"){
//       currMode="dark";
//       body.classList.add("dark");
//       body.classList.remove("light");
//      }else{
//       currMode="Light";
//       body.classList.add("light");
//       body.classList.remove("dark");
//      }
//      console.log(currMode);
// });

// let para=document.querySelector("#para");
// let body=document.querySelector("body");
// let currMode="light";
// para.addEventListener("mouseover",()=>{
//      if(currMode=="light"){
//       currMode="dark";
//       body.classList.add("dark");
//       body.classList.remove("light");
//       para.classList.add("light");
//      }else{
//       currMode="light";
//       body.classList.add("light");
//       body.classList.remove("dark");
//       para.classList.add("dark");
//      }
// });


//TIC-TAC TOE GAME
//Aceess all button
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//palyerx,palayerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
 
   const resetGame=() =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
   };

boxes.forEach((box) =>{
  box.addEventListener("click",()=>{
    //console.log("box was clicked");
    if(turnO){
         //playerO
       box.innerText="O";
       turnO=false;
    }else{//playerX
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;
    //winner ke liye ek function bnayenge
    checkWinner();//call function
  });
});
//function declare to stop the game if winner is declared disable boxes
const disableBoxes=() =>{
   for(let box of boxes){
    box.disabled = true;
   }
};

const enableBoxes=() =>{
  for(let box of boxes){
   box.disabled = false;
   box.innerText ="";
  }
};

const showWinner=(winner) =>{
   msg.innerText=`Congratulations,Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   //disbled boex ko call krenge
   disableBoxes();
};

//now make function to check winner
const checkWinner=()=>{
    for(let pattern of winPatterns){
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;

       if(pos1Val!="" && pos2Val !="" && pos3Val !=""){
         if(pos1Val===pos2Val && pos2Val===pos3Val){
           //console.log("Winner",pos1Val);
           showWinner(pos1Val);
         }
       }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);