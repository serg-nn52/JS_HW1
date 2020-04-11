var container = document.getElementById('container');
var but = document.querySelectorAll('a');

function editColor(){
       container.style.backgroundColor = 'gray';
        for(var i=0; i < but.length; i++) {
            but[i].style.backgroundColor = 'green';
            but[i].style.color = 'black';
            but[i].style.fontSize = '10px';
            but[i].style.borderRadius = '20px';
        }
}

function getFlex(){
    document.body.innerHTML = '<div class="fl"><div class="f"></div><div class="f"></div><div class="f"></div></div>';
}