function ready(){
    // (document.forms.america).onchange = function (){
    //     console.log(document.forms.america)
    //     console.log(this.value);
    //     let task = document.forms.america;
    //     let elem = document.createElement('li');
    //     elem.innerHTML = task;
    //     elem.append(list);
    //     for (let t of task) {
    //         console.log(t)
    //         if (t.selected) {
    //             console.log(t.value)
    //         }
    //     }

    // }
    var checkbox = document.querySelectorAll("input[type=checkbox]");
    console.log(checkbox)
    checkbox.forEach(element => {
        element.addEventListener( 'change', function() {
            if(this.checked) {
                console.log(this.value)
                let elem = document.createElement('li');
                elem.innerHTML = this.value;
                list.append(elem);
            } else {
                
            }
        });
    });

}

document.addEventListener("DOMContentLoaded", ready);