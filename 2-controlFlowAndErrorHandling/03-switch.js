/*

switch statements execute a block of code depending on different cases.
use break and default keywords
  both keywords are optional

*/

let officeCharacter = 'Michael';

switch (officeCharacter){
    case "Michael": 
        console.log('My mind is going a mile an hour');
        break;
    case "Dwight":
        console.log('Perfectendschlag');
        break;
    case "Jim":
        console.log('Bears. Beets. Battlestar Galactica');
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

let dessert = 'milk shake';

switch (dessert){
    case "pie": 
        console.log('Pie, pie, me oh my!');
        break;
    case "cake":
        console.log('Cake is great!');
        break;
    case "ice cream":
        console.log('I scream for ice cream!');
        break;
    default:
        console.log(`${dessert} is not on the menu.`);
}



