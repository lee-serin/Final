function ready(){
    var checkbox = document.querySelectorAll("input[type=checkbox]");
    console.log(checkbox)
    checkbox.forEach(element => {

        
        element.addEventListener( 'change', function() {
            if(this.checked) {
                console.log(this.value)
                let elem = document.createElement('li');
                elem.innerHTML = this.value;
                list.append(elem);

                control.onclick(() => {
                    str.strike        
                });
            } else {
                
            }
        
        });
    });
    
};

document.addEventListener("DOMContentLoaded", ready);