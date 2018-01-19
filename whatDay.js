function whatDay(dat) {
  var enterdate = dat.split('-');
  var Year1 = parseInt(enterdate[0]);
  var Month1 = parseInt(enterdate[1]);
  var Day1 = parseInt(enterdate[2]);

  var Today = new Date();
  var Year = Today.getFullYear();
    if(Year <= 99) Year += 1900
  var Month = Today.getMonth()+1;
    if(Month < 10) Month = '0'+ Month;
  Month = parseInt(Month);
  var Day = Today.getDate();

    if(Year1 > Year) {
      console.log('future');
    } else if(Year1 < Year) {
      console.log('past');
    } else {
      if(Month1 > Month) {
        console.log('future');
      } else if(Month1 < Month) {
        console.log('past');
      } else {
        if(Day1 > Day) {
          console.log('future');
        } else if(Day1 < Day) {
           console.log('past');
        } else  {
            console.log('today');
        }
      }
    }
}
