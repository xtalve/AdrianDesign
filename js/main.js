window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "9") {
        //Play Music
        document.getElementById('ammp3').play();
    }
}

function hidespinner(){
    document.getElementById('loading-spinner').style.display='none';
}
$('#Word1').fadeIn('slow');

i = 0;
$(document).ready(function(){
    $("body").keypress(function(){
        $("span").text(i += 1);
    });
});
