const year = 2022
const holidays = ['01/06', '04/01', '12/25', '12/05'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.
//let hours = 0
//holidays.map(holiday => {
//    [month, day] = holiday.split('/')
 //   const date = new Date(+year, month -1, +day)
  //  if(!(date.getDay()=== 0 || date.getDay() === 6)){
   //     hours = hours + 2
   // }
//})
//console.log(hours);


// domingo : 0, lunes: 1, martes:2, miercoles: 3, jueves: 4, viernes: 5, sabado: 6


function countHours(year, holidays){
    let hours = 0;
    holidays.map(holiday =>{
    [month, day] = holiday.split('/')
    const date = new Date(+year, month -1, +day)
    if(!(date.getDay()=== 0 || date.getDay() === 6)){
        hours = hours + 2
    }
    })
    return hours
}

console.log(countHours(year, holidays)) // 2 días -> 4 horas extra en el año