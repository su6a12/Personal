function friendly(str) {
  var date1 = str[0];
  var date2 = str[1];
  var year1 = parseInt(date1.substr(0, 4));
  var month1 = parseInt(date1.substr(5, 2));
  var day1 = parseInt(date1.substr(8, 2));
  var year2 = parseInt(date2.substr(0, 4));
  var month2 = parseInt(date2.substr(5, 2));
  var day2 = parseInt(date2.substr(8, 2));
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  if (year1 === year2) {
    if (month1 === month2) {
      if (day1 === day2) {
        //same days
        return [months[month1-1]+' '+day1+dayEnding(day1)+', '+year1];
      } else {
        //same month, same year
      return [months[month1-1]+' '+ day1+dayEnding(day1), day2+dayEnding(day2)];
      }
    }
    else
      //different months
      return [months[month1-1]+' '+day1+dayEnding(day1), months[month2-1]+' '+day2+dayEnding(day2)+', ' +year1];
  }
  else if (year2 - year1 >= 2) {
    return [months[month1-1]+' '+day1+dayEnding(day1)+', '+year1, months[month2-1]+' '+day2+dayEnding(day2)+', '+year2];
  }
  else if (year2 - year1 === 1) {
    if (month1 > month2) {
      return [months[month1-1]+' '+day1+dayEnding(day1), months[month2-1]+' '+day2+dayEnding(day2)];
    }
    else {
      return [months[month1-1]+' '+day1+dayEnding(day1)+', '+year1, months[month2-1]+' '+day2+dayEnding(day2)+', '+year2]; 
    }
  }
  
  function dayEnding(day) {
    if ((day % 10) === 1)    //get last digit
      return "st";
    else if ((day % 10) === 2)
      return "nd";
    else if ((day % 10) === 3)
      return "rd";
    else
      return "th";
  }
}

friendly(['2015-07-01', '2015-07-04']);
