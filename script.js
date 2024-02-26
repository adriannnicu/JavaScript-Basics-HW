console.log('Ex 1');
var frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
var backEnd = ['Node', 'Express', 'MongoDB'];


var fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

console.log('Ex 2');
var shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
    console.log(shoppingCart);
} 

var modifyTea = shoppingCart.indexOf('Tea');
if (modifyTea !== -1) {
    shoppingCart[modifyTea] = 'Green Tea';
    console.log(shoppingCart);
}

var honeyAllergic = true;
if (honeyAllergic) {
    var filteredCart = shoppingCart.filter(item => item !== 'Honey');
    console.log(filteredCart);
} else {
    console.log(shoppingCart);
}

console.log('Ex 3');
var userMonth = 'June';
var season;
if(userMonth === "December" ||userMonth === "January" || userMonth === "February" ) {
    season = "Winter"; 
} else if(userMonth === "March" ||userMonth === "April" || userMonth === "May" ) {
    season = "Spring"; 
} else if(userMonth === "June" ||userMonth === "July" || userMonth === "August" ) {
    season = "Summer"; 
} else if(userMonth === "September" || userMonth === "October" || userMonth === "November" ) {
    season = "Autumn"; 
}

console.log("The season is " + season + ".");

console.log('Ex 4');

var inkLevel = {
    cyan: 23,
    magenta: 12,
    yellow: 22,
}

var colors = Object.keys(inkLevel);
var lowestColor = colors[0];

for (var i = 1; i < colors.length; i++) {
    if (inkLevel[colors[i]] < inkLevel[lowestColor]) {
        lowestColor = colors[i];
    }
}

if (inkLevel[lowestColor] !== 0) {
    console.log(`You can print ${inkLevel[lowestColor]} pages.`); 
} else {
    console.log('You can print any page.'); 
}
