const Conversor = {

    mos(valor){
        console.log(valor);
    },

    comp(numero, aMedida, multip){
        let resto = (!multip ? '' : `^${multip}`);
        let resultado = `El resultado es : `;
        if(numero === `Digite Bien los valores`){
            resultado = numero;
        }
        else if(multip === 'tiempo'){
            let arr = [...aMedida]
            if(arr[arr.length-1]==='s'){
                aMedida+='es';
            }
            else{
                aMedida += 's';
            }
            resultado += `${numero} ${aMedida} aprox.`;
        }
        else{
            resultado += `${numero}${aMedida}${resto}`;
        }
        let arr = [numero,resultado];
        return arr;
    },

    verificar(valor){
        let resultado;
        if(!valor){
            resultado = valor = 10;
        }
        else {
            resultado = 10**valor;
        }
        return resultado;
    },

    MedidasdeLongitud : {

        mili(Medida, aMedida,multi){

            let multip = Conversor.verificar(multi);

            let numero = (aMedida==='mm'? Medida : aMedida==='cm'? Medida/multip : aMedida === 'dm'? Medida/(multip*10) : aMedida === 'm' ? Medida/(multip*100) : aMedida === 'dam'? Medida/(multip*1000) : aMedida === 'hm' ? Medida/(multip*10000) : aMedida === 'km' ? Medida/(multip*100000) : `Digite Bien los valores`);

            let resultadoGeneral = Conversor.comp( numero , aMedida , multi);

            return resultadoGeneral;
        },
        centi(Medida, aMedida,multi){

            let multip = Conversor.verificar(multi);

            let numero = (aMedida==='mm'? Medida*multip : aMedida==='cm'? Medida : aMedida === 'dm'? Medida/multip : aMedida === 'm' ? Medida/(multip*10) : aMedida === 'dam'? Medida/(multip*100) : aMedida === 'hm' ? Medida/(multip*1000) : aMedida === 'km' ? Medida/(multip*10000) : `Digite Bien los valores`);

            let resultadoGeneral = Conversor.comp( numero , aMedida , multi);

            return resultadoGeneral;
        },
        deci(Medida, aMedida,multi){

            let multip = Conversor.verificar(multi);

            let numero = (aMedida==='mm'? Medida*multip*10 : aMedida==='cm'? Medida*multip : aMedida === 'dm'? Medida : aMedida === 'm' ? Medida/multip : aMedida === 'dam'? Medida/(multip*10) : aMedida === 'hm' ? Medida/(multip*100) : aMedida === 'km' ? Medida/(multip*1000) : `Digite Bien los valores`);

            let resultadoGeneral = Conversor.comp( numero , aMedida , multi);

            return resultadoGeneral;
        },
        metro(Medida, aMedida,multi){

            let multip = Conversor.verificar(multi);

            let numero = (aMedida==='mm'? Medida*multip*100 : aMedida==='cm'? Medida*multip*10 : aMedida === 'dm'? Medida : aMedida*multip === 'm' ? Medida : aMedida === 'dam'? Medida/multip : aMedida === 'hm' ? Medida/(multip*10) : aMedida === 'km' ? Medida/(multip*100) : `Digite Bien los valores`);

            let resultadoGeneral = Conversor.comp( numero , aMedida , multi);

            return resultadoGeneral;
        },
        deca(Medida, aMedida,multi){

            let multip = Conversor.verificar(multi);

            let numero = (aMedida==='mm'? Medida*multip*1000 : aMedida==='cm'? Medida*multip*100 : aMedida === 'dm'? Medida : aMedida*multip*10 === 'm' ? Medida*multip : aMedida === 'dam'? Medida : aMedida === 'hm' ? Medida/multip : aMedida === 'km' ? Medida/multip*10 : `Digite Bien los valores`);

            let resultadoGeneral = Conversor.comp( numero , aMedida , multi);

            return resultadoGeneral;
        },
        hecto(Medida, aMedida,multi){

            let multip = Conversor.verificar(multi);

            let numero = (aMedida==='mm'? Medida*multip*10000 : aMedida==='cm'? Medida*multip*1000 : aMedida === 'dm'? Medida : aMedida*multip*100 === 'm' ? Medida*multip*10 : aMedida === 'dam'? Medida*multip : aMedida === 'hm' ? Medida : aMedida === 'km' ? Medida/multip : `Digite Bien los valores`);

            let resultadoGeneral = Conversor.comp( numero , aMedida , multi);

            return resultadoGeneral;
        },
        kilo(Medida, aMedida,multi){

            let multip = Conversor.verificar(multi);

            let numero = (aMedida==='mm'? Medida*multip*100000 : aMedida==='cm'? Medida*multip*10000 : aMedida === 'dm'? Medida : aMedida*multip*1000 === 'm' ? Medida*multip*100 : aMedida === 'dam'? Medida*multip*10 : aMedida === 'hm' ? Medida*multip : aMedida === 'km' ? Medida : `Digite Bien los valores`);

            let resultadoGeneral = Conversor.comp( numero , aMedida , multi);

            return resultadoGeneral;
        }
    }
}

const rest = {
    Matematicas : {
        factorial(a){
            let resultado = 1;
            for(let i =a; i>0;i--){
                resultado*=i;
            }
            let arr = [resultado,`El factorial de ${a} es: ${resultado}`];
            return arr;
        }
    },
    Basico : {
        Suma : {
            sumasNor(){
                let argumentos = [].slice.call(arguments);
                let result = argumentos.reduce((a,b)=> a+b ,0);
                let all = Conversor.comp(result,'');
                return all;
            },
            sumasInv(a,b){
                let resultado;
                if(a!==undefined && !b){
                    resultado = (a*(a+1))/2;
                    
                }
                else if(a!==undefined && b!==undefined){
                    resultado =  ((b*(b+1))/2) - ((a*(a+1))/2);
                }
                let all = Conversor.comp(resultado,'');
                return all;
            },
        },
    },

    JavaScript :{
        Ordenar(arr,how){
            let num1;
            let num2;
            if(how === 'az' || how === undefined){
                num1 = -1;
                num2 = 1;
            }
            else if(how === 'za'){
                num1 = 1;
                num2 = -1;
            }
            else console.log('Verifique los valores');
            

            let newArr = arr.sort((a,b)=>{
                if(b > a) return num1;
                else if(a > b) return num2;
                return 0;
            });

            return newArr;
        },
    },
    medidasDeTiempo : {

        segundo(Medida, aMedida){
            let numero = (aMedida === 'segundo' ? Medida : aMedida === 'minuto' ? Medida/60 : aMedida === 'hora' ? Medida/(60*60) : aMedida === 'dia' ? Medida/(60*60*24) : aMedida === 'semana' ? Medida/(60*60*24*7) : aMedida === 'quincena' ? Medida/(60*60*24*15) : aMedida === 'mes' ? Medida/(60*60*24*7*4) : aMedida === 'trimestre' ? Medida/(60*60*24*7*4*3) : aMedida === 'semestre' ? Medida/(60*60*24*7*4*6) : aMedida === 'año' ? Medida/(60*60*24*365) : aMedida === 'bienio' ? Medida/(60*60*24*365*2) : aMedida === 'trieñio' ? Medida/(60*60*24*365*3) : aMedida === 'lustro' ? Medida/(60*60*24*365*5) : aMedida === 'decada' ? Medida/(60*60*24*365*10) : aMedida === 'siglo' ? Medida/(60*60*24*365*100) : aMedida === 'milenio' ? Medida/(60*60*24*365*1000) : 'Digite bien los valores');

            let resultadoGeneral = Conversor.comp( numero , aMedida, 'tiempo');

            return resultadoGeneral;
        },

        minuto(Medida, aMedida){
            let numero = (aMedida === 'segundo' ? Medida*60 : aMedida === 'minuto' ? Medida : aMedida === 'hora' ? Medida/(60) : aMedida === 'dia' ? Medida/(60*24) : aMedida === 'semana' ? Medida/(60*24*7) : aMedida === 'quincena' ? Medida/(60*24*15) : aMedida === 'mes' ? Medida/(60*24*7*4) : aMedida === 'trimestre' ? Medida/(60*24*7*4*3) : aMedida === 'semestre' ? Medida/(60*24*7*4*6) : aMedida === 'año' ? Medida/(60*24*365) : aMedida === 'bienio' ? Medida/(60*24*365*2) : aMedida === 'trieñio' ? Medida/(60*24*365*3) : aMedida === 'lustro' ? Medida/(60*24*365*5) : aMedida === 'decada' ? Medida/(60*24*365*10) : aMedida === 'siglo' ? Medida/(60*24*365*100) : aMedida === 'milenio' ? Medida/(60*24*365*1000) : 'Digite bien los valores');

            let resultadoGeneral = Conversor.comp( numero , aMedida, 'tiempo');

            return resultadoGeneral;
        }
    },
}

module.exports = Conversor;