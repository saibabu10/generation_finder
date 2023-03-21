// // let num=2000
// // if(num%4==0&&num%400==0)
// // {
// // console.log("leap year")
// // }
// // else if(num%100!=0)
// // {
// //     console.log("Not a leap year")
// // }
// // else
// // {
// //     console.log("not a leap year")
// // }
// let c=10;
// switch(c)
// {
// case 10:
//     console.log("the value is 10")
//     break
//     case 20:
//         console.log("the value is 20")
//         break
//         case 30:
//             console.log("the value is 30")
//             break
//             default: 
//                 console.log("invalid number")
// }
// let num=5
// let range=10
// for(let itr=1;itr<=range;itr++)
// {
// //     console.log(num+" X "+itr+" = "+num*itr)
// // }
// let num=10
// let sum =0 
// let start=1
// while(start<=10)
// {
//     sum+=start
//     start++
// }
// console.log(sum)
// let num=10
// let value1=0
// let value2=1
// console.log(value1)
// console.log(value2)
// for(let start=3;start<=num;start++)
// {
//     let value3=value1+value2
//     console.log(value3)
//     value1=value2
//     value2=value3
// }
// function add(a,b)
// {
//   let c=a+b
//   return c
// }
// let a=10,b=20
// console.log(add(a,b))
const add=(a,b)=>
{
    let c=a+b;
    return c;
}
const sum=add(50,30)
console.log(sum);