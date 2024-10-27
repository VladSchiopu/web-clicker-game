var val1 = 0;
var val2 = 1;
var i = 0;
var ok = 0;
var j;
var k = 0;
var increment;
var pulion = 0;
var mult = 2;
var val3 = 33;
var val4 = 33;
var pow = 2;
var aux = 0;
var ochiei = 1;
var ochiei2 = 1;

var litere = [" ", "K", "M", "B", "T", "q", "Q", "s", "S", "O", "N", "D"];


function add1() {


    if (i < 2) {

        increment = 0.001;


        if (ok == 0 && val1 == 9) {
            var add2 = document.getElementById("add2");
            add2.style.visibility = "visible";

            var add2u = document.getElementById("add2u");
            add2u.style.visibility = "hidden";

            var mult1u = document.getElementById("mult1u");
            mult1u.style.visibility = "visible";

        }




        for (j = 0; j <= ok; j++) {
            increment = increment * 1000;
        }


        val1 = val1 - (-(val2 / increment));


        if (val1 > 999) {


            if (ochiei == 1) {


                var mult1 = document.getElementById("mult1");
                mult1.style.visibility = "visible";

                var mult1u = document.getElementById("mult1u");
                mult1u.style.visibility = "hidden";

                var mult2u = document.getElementById("mult2u");
                mult2u.style.visibility = "visible";

                ochiei = 0;

            }
            val1 = val1 / 1000;
            ok++;
            val1 = val1.toFixed(3);
            i++;

            var num = document.getElementById("nr");
            num.innerHTML = "$" + val1 + litere[i];

        } else {



            if (ok > 0) {
                var num = document.getElementById("nr");
                num.innerHTML = "$" + val1.toFixed(3) + litere[i];

            } else {

                var num = document.getElementById("nr");
                num.innerHTML = "$" + val1 + litere[i];

            }




        }
    } else if (i == 2) {

        pulion = pulion + val2;

        if (pulion > 999)

        {
            pulion = 0;

            val1 = val1 - (-0.001);


            var num = document.getElementById("nr");
            num.innerHTML = "$" + val1.toFixed(3) + litere[i];

        }
    }


}




function add2() {

    val2++;
    var num = document.getElementById("add1");
    num.innerHTML = "+" + val2;
}




function mult1() {




    if (i < 11) {

        val1 = val1 * mult;

        if (val1 > 999) {
            val1 = val1 / 1000;
            val1 = val1.toFixed(3);
            i++;

            var num = document.getElementById("nr");
            num.innerHTML = "$" + val1 + litere[i];
        } else {
            var num = document.getElementById("nr");
            num.innerHTML = "$" + val1.toFixed(3) + litere[i];
        }

    } else if (k == 0) {

        val1 = val1 * mult;

        while (val1 >= 10) {

            val1 = val1 / 10;
            val3++;


        }




        var num = document.getElementById("nr");
        num.innerHTML = "$10^" + val3 + litere[k];


        if (val3 >= 100 && val3 <= 110) {

            var pow1 = document.getElementById("pow1");
            pow1.style.visibility = "visible";

            var pow1u = document.getElementById("pow1u");
            pow1u.style.visibility = "hidden";

            var pow2u = document.getElementById("pow2u");
            pow2u.style.visibility = "visible";


        }




    } else if (k == 1) {

        aux = 0;

        val1 = val1 * mult;

        while (val1 >= 10) {

            val1 = val1 / 10;
            aux++;

        }
        val3 = val3 - (-aux / 1000);
        val3 = val3.toFixed(3);



        var num = document.getElementById("nr");
        num.innerHTML = "$10^" + val3 + litere[k];




    }



    if (i == 11 && ochiei2 == 1) {

        var mult2 = document.getElementById("mult2");
        mult2.style.visibility = "visible";


        var mult2u = document.getElementById("mult2u");
        mult2u.style.visibility = "hidden";


        var pow1u = document.getElementById("pow1u");
        pow1u.style.visibility = "visible";

        ochiei2 = 0;

    }




}




function mult2() {

    mult++;
    var num = document.getElementById("mult1");
    num.innerHTML = "×" + mult;
}




function pow1() {


    if (k == 5) {

        var pow2 = document.getElementById("pow2");
        pow2.style.visibility = "visible";

        var pow2u = document.getElementById("pow2u");
        pow2u.style.visibility = "hidden";

    }


    if (k < 11) {

        val3 = val3 * pow;

        if (val3 > 999) {
            val3 = val3 / 1000;
            val3 = val3.toFixed(3);
            k++;

            var num = document.getElementById("nr");
            num.innerHTML = "$10^" + val3 + litere[k];
        } else if (k == 0) {
            var num = document.getElementById("nr");
            num.innerHTML = "$10^" + val3 + litere[k];
        } else {

            var num = document.getElementById("nr");
            num.innerHTML = "$10^" + val3.toFixed(3) + litere[k];


        }


    } else {

        val3 = val3 * pow;

        while (val3 >= 10) {

            val3 = val3 / 10;
            val4++;


        }




        var num = document.getElementById("nr");
        num.innerHTML = "$10^10^" + val4;



        if (val4 >= 100) alert("U WON , YAYYYYY!!!!!!!!!!!!!!!!!!!!")


    }




}



function pow2() {

    pow++;
    var num = document.getElementById("pow1");
    num.innerHTML = "^" + pow;
}