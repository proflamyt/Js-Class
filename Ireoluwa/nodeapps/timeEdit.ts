 exports.convert = function (year:number, month?:number, day?:number){
 
   let date1 = new Date()
   let date2 = new Date(`${month}/${day}/${year}`)
   var time_difference = date1.getTime() - date2.getTime();

   var minute_difference = time_difference / (60 * 24);
 return minute_difference;
}