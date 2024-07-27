import choose_option from "./chosen_option.mjs";
import validate_input from "./input_validator.mjs";
import current_score from "./scoring.mjs";

const gameController = (function() {

    //end button disabled
    document.querySelector('#end').disabled = true;

    //stores the score
    let score = {
        user_score: 0,
        cpu_score: 0,
        current_user_move_icon: '',
        current_cpu_move_icon: '',
        current_user_move: '',
        current_cpu_move: '',
        rounds: 0
    };
    let icon = ['✊', '✌️', '🤚'];
    

    //plays the game
    function playRound() {
        
        //end button enabled 
        document.querySelector('#end').disabled = false;
        
        //validate what the player chooses
        let valid_input = validate_input();
        
        //cancels a round
        if (valid_input === null) {
            alert("Round cancelled");
            return;
        }
        
        //selects the both the user and the PC's moves
        let moves = choose_option(valid_input);
        
        //scores points to the winner in each round
        let round_result = current_score(moves);
        
        
        // Update the score
        score.user_score += round_result.user_score;
        score.cpu_score += round_result.cpu_score;
        score.current_user_move_icon = icon[valid_input-1];
        score.current_cpu_move_icon = icon[['Rock','Scissors','Paper'].indexOf(moves.cpu)]; 
        score.current_user_move = moves.user;
        score.current_cpu_move = moves.cpu;    
        score.rounds++;

        
        displayResult(round_result);
    }
       //handles how and where the score is displayed in the UI
    function displayResult(round_result) {

        
        alert(`
            Round Result: ${round_result.status}
            
            Current Score 
            USER: ${score.user_score} | CPU: ${score.cpu_score}
            USER: ${score.current_user_move}  |  CPU: ${score.current_cpu_move}`);

            document.querySelector('#user h2').innerHTML = score.user_score;
            document.querySelector('#cpu h2').innerHTML = score.cpu_score;
            document.querySelector('#counter h2').innerHTML = score.rounds;
            document.querySelector('#user h1').innerHTML = score.current_user_move_icon;
            document.querySelector('#cpu h1').innerHTML = score.current_cpu_move_icon;
           document.querySelector('.user_choice_container h3').innerHTML = score.current_user_move;
            document.querySelector('.computer_choice_container h3').innerHTML = score.current_cpu_move;
        }
     //ends the game and clears the score
    function endGame() {

        //disable end button
        document.querySelector('#end').disabled = true;

        let finalMessage = `Game Over!\n\n`;
        finalMessage += `Final Score:\n`;
        finalMessage += `User: ${score.user_score}\n`;
        finalMessage += `CPU: ${score.cpu_score}\n`;
        finalMessage += `Total Rounds: ${score.rounds}\n\n`;
        
        if (score.user_score > score.cpu_score) {
            finalMessage += "Congratulations! You win the game!";
        } else if (score.user_score < score.cpu_score) {
            finalMessage += "Sorry, you lost the game. Better luck next time!";
        } else {
            finalMessage += "It's a tie game!";
        }
         
        //final results message to the player
        alert(finalMessage);

        // Reset the score for a new game
        score.user_score = 0;
        score.cpu_score = 0;
        score.rounds = 0;
        score.current_user_move = '🏁';
        score.current_cpu_move = '🏁';
        score.current_user_move = '-';
        score.current_cpu_move = '-';

            document.querySelector('#user h2').innerHTML = score.user_score;
            document.querySelector('#cpu h2').innerHTML = score.cpu_score;
            document.querySelector('#counter h2').innerHTML = score.rounds;
            document.querySelector('#user h1').innerHTML = score.current_user_move;
            document.querySelector('#cpu h1').innerHTML = score.current_cpu_move;
            document.querySelector('#user h3').innerHTML = score.current_user;
            document.querySelector('#cpu h3').innerHTML = score.current_cpu;
    }

    return {
        playRound,
        endGame
    };
})();

// Event listeners
document.querySelector('#play').addEventListener('click', gameController.playRound);
document.querySelector('#end').addEventListener('click', gameController.endGame);