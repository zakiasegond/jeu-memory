var comparer = [];

function shuffle()
{      
	var j = 0;
    var valI = '';
    var valJ = valI;
    var l = comparer.length - 1;
    while(l > -1)
    {
        j = Math.floor(Math.random() * l);
        valI = comparer[l];
        valJ = comparer[j];
        comparer[l] = valJ;
        comparer[j] = valI;
        l = l - 1;
    }
    $("#plateau").html(comparer);
    //console.log(comparer);//
    return comparer; 
};



$("img").click(function()
{

	comparer.push($(this).data("valeur"))
    

    var val = $(this).data("valeur")
    $(this).attr('src',val)

    console.log(comparer);
    });




	




// image1.src = "joker-noir.png";
// arr.push(image1);
// image2.src = "R-coeur.png";
// arr.push(image2);
// image3.src = "D-pique.png";
// arr.push(image3);
// image4.src = "01-trefle.png";
// arr.push(image4);


shuffle();

