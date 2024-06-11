/* cannot be empty */

const fieldsets = document.querySelectorAll('fieldset');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkFields();
})

const mailFormat = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

function checkFields() {



    for (let fieldset of fieldsets) {

        let name = fieldset.children[0].name;
        let message = fieldset.children[2];
        let input = fieldset.children[0];
    
        if (input.value) {
            if (input.name == 'Email') {
                if (input.value.match(mailFormat)) {
                    fieldset.classList.remove('error');
                } else {
                    fieldset.classList.add('error');
                    message.innerHTML = 'Looks like this is not an ' + name ;
                }
            } else{
                fieldset.classList.remove('error');
            }
      
        } else {
            fieldset.classList.add('error');
            message.innerHTML = name + ' cannot be empty';
        }

    }

}



