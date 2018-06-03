$(document).ready(function() {

//Generate random target number between two specific numbers (19-120)
var random = Math.floor(Math.random()*120+19)

 /* Generate random numbers for each egg (1-12) Needs to be a Math.random for each
 so they generate randomly */
var num1 = Math.floor(Math.random()*12+1)
var num2 = Math.floor(Math.random()*12+1)
var num3 = Math.floor(Math.random()*12+1)
var num4 = Math.floor(Math.random()*12+1)

var userTotal = 0;
var wins = 0;
var losses = 0;


//Hooking up variables to display
$('.randomNumber').html('Assigned Egg Amount: ' + random);
$('.wins').html('Wins: ' + wins);
$('.losses').html('Losses: ' + losses);
$('.finalTotal').html('Your Eggs: ' + userTotal);

//Game Reset
function reset(){
     random = Math.floor(Math.random()*120+19);
     $('.randomNumber').html('Assigned Egg Amount: ' + random);
     num1 = Math.floor(Math.random()*12+1);
     num2 = Math.floor(Math.random()*12+1);
     num3 = Math.floor(Math.random()*12+1);
     num4 = Math.floor(Math.random()*12+1);
     userTotal = 0;
     $('.finalTotal').html('Your Eggs: ' + userTotal);
     }

//Add one to the winner total
function winner(){
    wins++;
    $('.wins').html('Wins: ' + wins);
    reset();
    }

//Add one to the loser total
function loser(){
    losses++;
    $('.losses').html('Losses: ' + losses);
    reset()
    }

//Click event for the White Egg
  $('#whiteegg').click(function(){
    userTotal = userTotal + num1;
    $('.finalTotal').html('Your Eggs: ' + userTotal);
        if (userTotal === random){
          winner();
        }
        else if (userTotal > random){
          loser();
        }
  })

//Click event for the Yellow Egg
  $('#yellowegg').click(function(){
    userTotal = userTotal + num2;
    $('.finalTotal').html('Your Eggs: ' + userTotal);
        if (userTotal === random){
          winner();
        }
        else if (userTotal > random){
          loser();
        }
  })

//Click event for the Orange Egg
  $('#orangeegg').click(function(){
    userTotal = userTotal + num3;
    $('.finalTotal').html('Your Eggs: ' + userTotal);
        if (userTotal === random){
          winner();
        }
        else if (userTotal > random){
          loser();
        }
  })

  //Click event for the Pink Egg
    $('#pinkegg').click(function(){
      userTotal = userTotal + num4;
      $('.finalTotal').html('Your Eggs: ' + userTotal);
          if (userTotal === random){
            winner();
          }
          else if ( userTotal > random){
            loser();
          }
    })

});
