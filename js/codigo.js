(function () {
    'use strict'
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
    //Recorremos los forms y evitamos en envío sin validacion
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {            
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            alert('FORM VALIDADO')
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()


  function tiempo(){
    let time=new Date();
    let hora=time.getHours();
    let minutos=time.getMinutes();
    let segundos=time.getSeconds();
    if(hora<10){hora="0"+hora}
    if(minutos<10){minutos="0"+minutos}
    if(segundos<10){segundos="0"+segundos}
    
    document.getElementById("time").innerHTML=hora +" : "+ minutos +" : " +segundos;
    setTimeout(tiempo,1000);
    }
    tiempo();

    function encimai0(){
      document.getElementById("card0").style.backgroundColor="#ffca2c";
      document.getElementById("card0").style.color="#ffffff";
  }
  function fuerai0(){
      document.getElementById("card0").style.backgroundColor="#ffffff";
      document.getElementById("card0").style.color="#000000";
  }

  function encimai1(){
    document.getElementById("card1").style.backgroundColor="#ffca2c";
    document.getElementById("card1").style.color="#ffffff";
}
function fuerai1(){
    document.getElementById("card1").style.backgroundColor="#ffffff";
    document.getElementById("card1").style.color="#000000";
}

function encimai2(){
  document.getElementById("card2").style.backgroundColor="#ffca2c";
  document.getElementById("card2").style.color="#ffffff";
}
function fuerai2(){
  document.getElementById("card2").style.backgroundColor="#ffffff";
  document.getElementById("card2").style.color="#000000";
}


function encimai3(){
  document.getElementById("card3").style.backgroundColor="#ffca2c";
  document.getElementById("card3").style.color="#ffffff";
}
function fuerai3(){
  document.getElementById("card3").style.backgroundColor="#ffffff";
  document.getElementById("card3").style.color="#000000";
}

function cambiarcolor(){
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);    

  document.getElementById("logocab").style.backgroundColor="rgb("+r+","+g+","+b+")";
  setTimeout(cambiarcolor,1000);
}
cambiarcolor();