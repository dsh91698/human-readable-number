const first_ten_numbers = number =>
  [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`][number];

const tens10_numbers = number =>
  [`ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`][number - 10];

const twentys_numbers = number =>
  ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][(number/10 - 2)];
 


module.exports = function toReadable (number) {
switch (number.toString().length) {
case 1:
 return first_ten_numbers(number);
break;
  case 2:
    if (number<20) {
      return tens10_numbers(number);
    } else if (number >= 20 && parseInt(number.toString()[1])===0) {
      console.log(number, twentys_numbers(number))
      return twentys_numbers(number);
    }
 };
}
