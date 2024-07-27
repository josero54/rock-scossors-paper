
/* chooses one of the options available based on the
value that the user entered, and chooses one of the options randomly 
for the computer*/
const choose_option = function (valid_choice) {
    const choices = {'user':'','cpu':''}
    const moves = ['Rock', 'Scissors', 'Paper'];
    choices.user = moves[valid_choice -1 ];
    choices.cpu = moves[Math.floor(Math.random()*3)];
    
    if (typeof choices.user !== 'undefined') {
        return choices;
    }
    else{
        choices.user = '-';
        choices.cpu = '-';
        return choices;
    }   
}


export default choose_option;