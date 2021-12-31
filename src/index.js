const first_ten_numbers = number =>
  [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`][number];
const tens_numbers = number =>
  [`ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`][number-10];


module.exports = function toReadable (number) {
switch (number.toString().length) {
case 1:
 return first_ten_numbers(number);
break;
case 2: 
return tens_numbers(number);
 };
}
