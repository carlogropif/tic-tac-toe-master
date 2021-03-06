console.log('Hey, js file is connected!');

// wait for the DOM to finish loading
$(document).ready(function() {
  var symbol = "O";
  //thank you for using good variable names
  var hasWon = false;
  var allTurns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];

   function playerTurn(symbol, id){
     //neat jquery usage. could you have also assigned a class to each space
     //and checked the class for each spot? Then you could avoid the weird "#" concatenation.
     //this works though!
     var spotTaken = $("#"+id).text();
     //Freeze the board when someone won
     if(hasWon){
       return false;
     }
     //you really like to use unicode values
     else if(spotTaken == '\xa0') {
       //Place the X and O at the correct position in the array
       allTurns.splice(parseInt(id), 1, symbol);
       //Display the symbol in the box
       $("#"+id).text(symbol);
       return true;
     }
  }

   $('.btn').click(function(){
      window.location.reload();
 });

 //nice!
   function checkWin(turnArray, turn){
     if((turnArray[0] === turn && turnArray[1] === turn && turnArray[2] === turn) ||
        (turnArray[0] === turn && turnArray[3] === turn && turnArray[6] === turn) ||
        (turnArray[0] === turn && turnArray[4] === turn && turnArray[8] === turn) ||
        (turnArray[1] === turn && turnArray[4] === turn && turnArray[7] === turn) ||
        (turnArray[2] === turn && turnArray[4] === turn && turnArray[6] === turn) ||
        (turnArray[2] === turn && turnArray[5] === turn && turnArray[8] === turn) ||
        (turnArray[3] === turn && turnArray[4] === turn && turnArray[5] === turn) ||
        (turnArray[6] === turn && turnArray[7] === turn && turnArray[8] === turn)
      ){
       hasWon = true;
       alert("Player " + turn + " has won the game!");
     }

}

  $('.box').click(function(){

        // Store the location with the ID
        var slot = $(this).attr('id');
        //Player's turn function
        var successfulClick = playerTurn(symbol, slot);
        if (successfulClick) {
          checkWin(allTurns, symbol);
          if(symbol === "O"){
            symbol = "X";
          } else if (symbol === "X") {
            symbol = "O";
          }
        }
        //Check if there is a win
        checkWin(allTurns, symbol);
      });

});
