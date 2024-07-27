/* This function validates what the user enters through 
a prompt to make sure they select 1- Rock   2- Scissors   
3- Paper until valid option is selected. */
const validate_input = function () {
    let option;
     while (option === undefined) {
        const player_choice = prompt("choose -->   1- Rock        2- Scissors       3- Paper: ");
        option = try_choice(player_choice);
    }
        return option;
        
    /*determines one of the options available was selected or
    keeps asking the user to enter a valid option.*/
    function try_choice (input) {
        if (input === null) {
            // returns null for cancelled input.
            return null; 
        } //checks if the input was valid.
        if (/^[1-3]$/.test(input)) {
            const a = parseInt(input);
            return a;
            //runs if the user entered an invalid choice.
        } else {
            alert('Invalid choice, Try Again!');
            return undefined;
        }
    };    
};


export default validate_input;