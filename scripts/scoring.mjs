const current_score = function(plays) {
    // compares the user and the CPU plays and determines a winner.
    const result = `${plays.user}-${plays.cpu}`;
    
    let points = {
        'user_score': 0,
        'cpu_score': 0,
        'status':''
    };
    
    switch(result) {
        case 'Rock-Scissors':
            points.user_score = 100;
            points.status = 'You Win!'
            return points;
        case 'Scissors-Paper':
            points.user_score = 150;
            points.status = 'You Win!'
            return points;
        case 'Paper-Rock':
            points.user_score = 200;
            points.status = 'You Win!'
            return points;
        case 'Rock-Rock':
            points.status = "It's a draw!"
            return points;
        case 'Scissors-Scissors':
            points.status = "It's a draw!"
            return points;
        case 'Paper-Paper':
            points.status = "It's a draw!"
            return points;
        case 'Scissors-Rock':
            points.cpu_score = 100;
            points.status = 'You Lose!'
            return points;
        case 'Paper-Scissors':
            points.cpu_score = 150;
            points.status = 'You Lose!'
            return points;
        case 'Rock-Paper':
            points.cpu_score = 200;
            points.status = 'You Lose!'
            return points;
        case '---':
            points.status = 'Canceled';
            return points;
        default:
            result.status = "It's a draw!"
            return points;
    }
}


export default current_score;