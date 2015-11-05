function Flower(name, color, petals, smellsPretty, stemLength){
    this.name = name;
    this.color = color;
    this.petals = petals;
    this.smellsPretty= smellsPretty;
    this.stemLength = stemLength;
    this.sniff = function(){
        console.log("Sniff Sniff Sniff!");
    };
    // Demonstrates use of arguments with methods
    this.smellsGood = function(answer) {
        if (answer) {
            return 'This flower smells amazing!';
        } else {
            return 'What a noxious weed!';
        }
    };
    // Demonstrates use of local object variables
    this.describe = function(answer) {
        alert("This flower is " + this.color + ".");
    };
    /// Demonstrates object to object interaction
    this.compare =  function(otherFlower) {
        return("My " + this.color + " " + this.name + " is much prettier than your " +
          otherFlower.color + " " + otherFlower.name + " :P");
    };
    this.render = function() {
        $('body').append("<p>My pretty " + this.stemLength + "-stemmed " + this.name + " is " + this.color +
          " and has " + this.petals + " pristine petals.</p>");
    };

    //cross-pollination solutions
    this.crossPollinate = function(otherFlower) {
        return new Flower(
            this.name + "-" + otherFlower.name,
            this.color + "-" + otherFlower.color,
            (this.petals + otherFlower.petals) / 2,
            this.smellsPretty === true && otherFlower.smellsPretty === true,
            this.stemLength + "-"+ otherFlower.stemLength
        );
    };
}

var chrysanthenum = new Flower("chrysanthenum", "pink", 65, false, "short");
var rose = new Flower("rose", "red", 32, true, "long");
var lily = new Flower("lily", "yellow", 6, true, "medium");
var daisy = new Flower("daisy", "white", 10, false, "short"); 

var vase = [chrysanthenum, rose, lily, daisy];

console.log('chrysanthenum:', chrysanthenum);
console.log('rose:', rose);
console.log('lily:', lily);
console.log('daisy:', daisy);

console.log("Comparing daisy and rose: ", daisy.compare(rose));
console.log("Breeding daisy and rose: ", daisy.crossPollinate(rose));

$(document).ready(function() {
    vase.forEach(function(flower) {
        flower.render();
    });
    $('body').append('<p>Comparing daisy and rose: </p>');
    $('body').append(daisy.compare(rose));
    $('body').append('<p>Breeding daisy and rose: </p>'); 
    var daisyRose = daisy.crossPollinate(rose);
    daisyRose.render();
});


