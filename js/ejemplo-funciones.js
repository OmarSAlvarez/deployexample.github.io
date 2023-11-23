'use strict'
//alert(typeof val1); Nos arroja un valor tipo Object
//alert(typeof val2);
function btnSumar(){
    var val1 = document.getElementById('txtval1').value;
    var val2 = document.getElementById('txtval2').value;
    var suma = 0;
    suma = parseInt(val1) + parseInt(val2);
    document.form1.txtRes.value = suma;
}