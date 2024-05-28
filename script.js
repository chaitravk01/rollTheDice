let images= ["images/die-1.jpg",
"images/die-2.jpg",
"images/die-3.jpg",
"images/die-4.jpg",
"images/die-5.jpg",
"images/die-6.jpg"
];
let dice = document.querySelectorAll ("img");
function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout (function(die){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        
        let dieOneValue= Math.floor(Math.random()*6);
        let dieTwoValue= Math.floor(Math.random()*6);
        console.log (dieOneValue.dieTwoValue);
        document.querySelector("#die-1").setAttribute
        ("src", images [dieOneValue]);
        document.querySelector("#die-2").setAttribute
        ("src", images [dieTwoValue]);
        document.querySelector("#total").innerHTML=
        "Your roll is "+((dieOneValue+1)+(dieTwoValue+1));
    },
    1000);
}
r0ll();