//atividade 1
function tabuada(){
    let multiplo = 5;
    for(var i = 1; i <= 10; i++){
    let calculo = (i * multiplo);
    console.log (calculo.toString());
    }
  }

//atividade 2
function atv2(){
    let n = [54, 78, 56, 98, 0, 12, 11, 37];
    
    for(i = 0; i < n.length; i++){
        let temperatura = n[i];
        let celsius = (temperatura - 32) / 1.8;
        console.log(temperatura + "° Fahrenheit são " + celsius.toFixed(0) + "° em Celsius.");
     }
    }