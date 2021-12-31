const first_ten_numbers = number =>
  [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`][number];

const tens10_numbers = number =>
  [`ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`][number - 10];

const tens_numbers = number =>
  ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][number - 10];
 


module.exports = function toReadable (number) {
switch (number.toString().length) {
case 1:
 return first_ten_numbers(number);
break;
  case 2:
    if (number) {
      return tens10_numbers(number);
    }
 };
}
