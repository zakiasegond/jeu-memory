
console.log("hello");

var compare = [];
var tapis = [];
var dos1 = $("#dos1");
var dos2 = $("#dos2");
var dos3 = $("#dos3");
var dos4 = $("#dos4");
var dos5 = $("#dos5");
var dos6 = $("#dos6");

$("img").click(function()
{

	compare.push($(this).data("valeur"))
    

    var val = $(this).data("valeur")
    $(this).attr('src',val)

    });



tapis.push(dos1);
tapis.push(dos2);
tapis.push(dos3);
tapis.push(dos4);
tapis.push(dos5);
tapis.push(dos6);
console.log (tapis);




function shuffle()
{      
	var j = 0;
    var valI = '';
    var valJ = valI;
    var l = tapis.length - 1;
    while(l > -1)
    {
        j = Math.floor(Math.random() * l);
        valI = tapis[l];
        valJ = tapis[j];
        tapis[l] = valJ;
        tapis[j] = valI;
        l = l - 1;
    }
    $("#affich").html(tapis);// s'affiche en ligne avcec cette fonction..... a chercher pour les remettre sur 2 lignes (voir peut etre dans le CSS)
    
    return tapis; 
};

shuffle();

$("#p1").hide();
$("#p2").hide();








