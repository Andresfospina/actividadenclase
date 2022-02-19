function validar() {
        let nombre = document.getElementById('nombres').value
        let edad = document.getElementById('edad').value
        let genero = document.getElementById('genero').value


                if (edad>=18) {

                    alert('Puede Ingresar')
                    if(genero=="Femenino"){
                        alert('Debe pagar 20.000')
                    }

                    else if(genero=="Masculino"){
                        alert('Debe pagar 35.000')
                    }

                    else{
                        alert('Debe seleccionar genero')

                    }

                 }

                 
                  else{
                        alert('No puede ingresa usted es menor de edad ')

                 }


        for (let a = 0; a < 20; a+=2){
            let ciclo = 'De dos en dos $(a)' 
            console.log(ciclo)
        }

        for (let m = 0; m < 20; m+=3){
            let ciclo2 = 'De tres en tres $(m)' 
            console.log(ciclo2)
        }

}

