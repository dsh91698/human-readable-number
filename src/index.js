const first_ten_numbers = number =>
  [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`][number];

const tens10_numbers = number =>
  [`ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`][number - 10];

const twentys_numbers = number =>
  ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][(number / 10 - 2)];

function hundreds(number) {
  let hundreds = 'one hundred'; // dummy

  return hundreds;
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
        return 'twenty one'; // dummy 
      }
    case 3: // process tree digit numbers
      return hundreds(number);
  };
}
