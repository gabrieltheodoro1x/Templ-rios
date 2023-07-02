const btn = document.querySelector('#text-submit');

btn.addEventListener("click", function(e){
    e.preventDefault();

    const name = document.querySelector('#text-input');
    const value = name.value;

    if(value == "c"){
        let a = document.getElementById("text").innerHTML = "Você acertou";
    }
    else {
        let a = document.getElementById("text").innerHTML = "";
    }

});


