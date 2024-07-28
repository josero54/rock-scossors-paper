const validate_input = function () {
    return new Promise((resolve) => {
        const dialog = document.querySelector('#input_notice'); 
        const rock_btn = document.querySelector('#rock_btn');
        const scissors_btn = document.querySelector('#scissors_btn');
        const paper_btn = document.querySelector('#paper_btn'); 

        function handleChoice(choice) {
            dialog.close();
            resolve(choice);
        }

        rock_btn.addEventListener('click', () => handleChoice(1));
        scissors_btn.addEventListener('click', () => handleChoice(2));
        paper_btn.addEventListener('click', () => handleChoice(3));

        dialog.showModal();
    });
};

export default validate_input;