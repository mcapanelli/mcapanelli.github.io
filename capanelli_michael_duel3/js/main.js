//******** Michael Capanelli 04/16/2014 The Duel Part III ******

(function(){
//Fighter information
    var fighter1 = {

        name: 'Kabal',
        health: 100,
        damage: 20
    };

    var fighter2 = {

        name: 'Kratos',
        health: 100,
        damage: 20
    };
// Adding fighter information using DOM manipulation
    document.getElementById('kabal').innerHTML = fighter1.name + " " + fighter1.health;
    document.getElementById('kratos').innerHTML = fighter2.name + " " + fighter2.health;
//Round count
    var round = 0;
// Fight Function
    document.getElementById('fight_btn').onclick = function(e){

        var minDamage1 = fighter1.health * .5;
        var minDamage2 = fighter2.health * .5;

        var f1 = Math.floor(Math.random()*(fighter1.damage - minDamage1)+ minDamage1);
        var f2 = Math.floor(Math.random()*(fighter2.damage - minDamage2)+ minDamage2);

        //inflict damage

        fighter1.health -= f1;
        fighter2.health -= f2;


        document.getElementById('kabal').innerHTML = fighter1.name + " " + fighter1.health;
        document.getElementById('kratos').innerHTML = fighter2.name + " " + fighter2.health;


        var results = winnerCheck();



        if(results === "no winner"){
            round++;

            document.getElementById('round').innerHTML = '*ROUND*' + round +'OVER';


        }else{
            document.getElementById('scores').innerHTML = results;

        }



// winner check function

        function winnerCheck(){

            this.result = "no winner";


            if(fighter1.health < 1 && fighter2.health < 1){
                result = "You both die!!";
                document.getElementById('fight_btn').onclick = null;
                document.getElementById('round').innerHTML = 'Game Over';

            }else if(fighter1.health<1){
                result = fighter2.name+ " " + "Wins!";
                document.getElementById('fight_btn').onclick = null;
                document.getElementById('round').innerHTML = 'Game Over';

            }else if(fighter2.health <1){
                result = fighter1.name + " " + "Wins!";
                document.getElementById('fight_btn').onclick = null;
                document.getElementById('round').innerHTML = 'Game Over';
        }

            return result;



        }

        e.preventDefault();
        return false;


    };


})();