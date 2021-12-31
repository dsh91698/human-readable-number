function spread_tens_number_to_array(number) {
  let digits = [...new String(number)];
  let tens = parseInt(digits[0]) * 10;
  let oanes = parseInt(digits[1]);
  return [tens, oanes];
};


const first_ten_numbers = number =>
  [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`][number];

const tens10_numbers = number =>
  [`ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`][number - 10];

const twentys_numbers = number =>
  ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][((number / 10) - 2)];


function spread_hundreds(number) {
  let digits = [...new String(number)];
  var hundreds = parseInt(digits[0]);
  if (parseInt(digits[1]) === 0) {
    var tens = 0;
  } else if (parseInt(digits[1]) >= 2) {
    var tens = parseInt(digits[1]) * 10;
    // var oanes = 
  } else {
    var tens = parseInt(digits[1] + digits[2]);
    var oanes = 0;
    return [hundreds, tens, oanes];
  };
  var oanes = parseInt(digits[2]);
  console.log ([hundreds, tens, oanes])
  return [hundreds, tens, oanes];
}


module.exports = function toReadable(number) {
  switch (number.toString().length) {
    case 1: // process first 10 numbers
      return first_ten_numbers(number);
    case 2: // process two-digit numbers
      if (number < 20) {
        return tens10_numbers(number);
      } else if (number >= 20 && parseInt(number.toString()[1]) === 0) {
        //console.log(number, twentys_numbers(number))
        return twentys_numbers(number);
      } else {
        let arr_20 = spread_tens_number_to_array(number);
        let _10th = twentys_numbers(arr_20[0]);
        let _01th = first_ten_numbers(arr_20[1]);
        return _10th + ' ' + _01th;
      };
    case 3: // process tree digit numbers
      let arr_100 = spread_hundreds(number);
      let HRN = '';
      let _100th = first_ten_numbers(arr_100[0]);
      HRN = _100th + ' hundred';
      if (arr_100[1] === 0 && arr_100[2] === 0) { return HRN.trim(); } // case 100, 200 .. etc
      if (arr_100[1] === 0 && arr_100[2] > 0) {
        HRN = HRN + ' ' + first_ten_numbers(arr_100[2]); 
        return HRN; }// case 101 ... etc
      if (arr_100[1] > 0 && arr_100[1] < 20) {
        HRN = HRN + ' ' + tens10_numbers(arr_100[1]);
        return HRN;
      } // case 112, 211 ... etc
      if (arr_100[1] > 0 && arr_100[1] > 19) {
        HRN = HRN + ' ' + twentys_numbers(arr_100[1]) + ' ' + first_ten_numbers(arr_100[2]);
        return HRN.replace('zero', '').trim();
      } // case 120, 233 ... etc


        
      // let _10th = twentys_numbers(arr_100[1]);
      // if (arr_100[1]) {
      //   HRN = HRN + ' ' + _10th
      // } else {
      //   HRN = HRN + ' ' + tens10_numbers(arr_100[1]);
      //   return HRN.trim();
      // };
      // let _01th = first_ten_numbers(arr_100[2]);
      // if (arr_100[2]) { HRN = HRN + ' ' + _01th };
      // return HRN.trim();

  };
}
