function color1Fun(){
    document.getElementById('c1st').style.display = "none";
    document.getElementById('c2st').style.display = "block";
    document.getElementById('top_bg').style.background = "#131d2d";
    document.getElementById('color_change').style.background = "#1ccda0";
    document.getElementById('c2st').style.background = "white";
    document.getElementById('input_body').style.background = "#2d3951";
    document.getElementById('show_filed').style.background = "black";
    document.getElementById('show_filed').style.color = "#1ccda0";
    document.getElementById('calculator').style.boxShadow = "black 0rem 0rem 1.2rem";
}
function color2Fun(){
    document.getElementById('c2st').style.display = "none";
    document.getElementById('c1st').style.display = "block";
    document.getElementById('top_bg').style.background = "rgb(235, 241, 242)";
    document.getElementById('color_change').style.background = "black";
    document.getElementById('c1st').style.background = "white";
    document.getElementById('input_body').style.background = "rgb(235, 241, 242)";
    document.getElementById('show_filed').style.background = "#fff";
    document.getElementById('show_filed').style.color = "black";
    document.getElementById('calculator').style.boxShadow = "#fff 0rem 0rem 1.2rem";
}
// calculator function
{

    function clearFun(){
        document.getElementById('show_filed').value = " ";
    }
    function inputFun(pera){
        document.getElementById('show_filed').value += pera;
    }
    function result(){
        let a = document.getElementById('show_filed').value;
        let b = eval(a);
        document.getElementById('show_filed').value = b;
    }
}