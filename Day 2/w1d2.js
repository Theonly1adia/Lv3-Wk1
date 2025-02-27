const _ = require('lodash');
//_.random is a method where the comoputer gives you a random number or variable

let candy = ['Snickers', 'Skittles', 'M&Ms', 'Twix', 'Starbursts'];
let randomCandy = candy[_.random(0, candy.length -1)];
console.log('You got:' +randomCandy);

//_.sortby method is used to sort the elements based on on certain criteria

let people = [
    {name: 'Mike', age:28},
    {name: 'Tina', age:50},
    {name: 'Steven', age:20}
];

let sortedPeople = _.sortBy(people, 'age')

console.log(sortedPeople);

//_.last method gives you the last item in a list(array).

let colors =['Red', 'Blue', 'Orange', 'Teal', 'Yellow']
console.log(_.last(colors));