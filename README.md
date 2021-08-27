# Conversor.js

## Instalar

para instalar con npm se debe:

```
npm i conversor-multiple
```

## Inicializar

Para inicializar el conversor se da la siguiente instrucción, la variable puede tener cualquier nombre :

```js
let conversor = require("conversor-multiple");
```

Con esto usted puede acceder al conversor.

## Conversor de longitudes

Si usted desea convertir entre longitudes acceda a ellas de esta manera :

```js
let conversor = require("conversor-multiple");

conversor.MedidasdeLongitud;
```

Con esto usted accede a las conversiones de longitud, esta contiene diferentes metodos para la conversión las cuales se mostraran :

```js
let conversor = require("conversor-multiple");

conversor.MedidasdeLongitud.mili(argumento1, argumento2, argumentoOpcional); //convierte milimetro a cualquier medida, incluyendo los mismos milimetros

conversor.MedidasdeLongitud.centi(argumento1, argumento2, argumentoOpcional); //convierte centimetros a cualquier medida, incluyendo los mismos centimetros

conversor.MedidasdeLongitud.deci(argumento1, argumento2, argumentoOpcional); //convierte decimetros a cualquier medida, incluyendo los mismos decimetros

conversor.MedidasdeLongitud.metro(argumento1, argumento2, argumentoOpcional); //convierte metros a cualquier medida, incluyendo los mismos metros

conversor.MedidasdeLongitud.deca(argumento1, argumento2, argumentoOpcional); //convierte decametros a cualquier medida, incluyendo los mismos decametros

conversor.MedidasdeLongitud.hecto(argumento1, argumento2, argumentoOpcional); //convierte hectometros a cualquier medida, incluyendo los mismos hectometros

conversor.MedidasdeLongitud.kilo(argumento1, argumento2, argumentoOpcional); //convierte kilometros a cualquier medida, incluyendo los mismos kilometros
```

Cada metodo contiene los mismos argumentos que son :
argumento1: es la medida que se quiere convertir.
argumento2: es el nombre de la medida a la que se quiere convertir.
argumentoOpcional: es por si se quieren convertir medidas exponenciales, se explicara mejor más adelante.

Por ejemplo digamos que quiero convertir 100 metros a centimetros,
para hacer esto primero elijo el metodo el cual sera metro, porque convierte metros a cualquier medida, en el primer argumento coloco el numero a convertir que sera 100 y en el seguno coloco la medida a convertir que sera una cadena de texto 'cm', simbolizando centimetros, lo cual se haría asi:

```js
conversor.MedidasdeLongitud.metro(100, "cm"); //resultado : [ 10000, 'El resultado es : 10000cm' ]
```

Como se pude ver el resultado devuelve un arreglo que contiene un numero como resultado y un string con el resultado, tambien ver que el segundo argumento de la función ya esta definido, los valores que este puede tomar es:<br>
<strong>'mm'</strong> para milimetros,<br>
<strong>'cm'</strong> para centimetros,<br>
<strong>'m'</strong> para metros,<br>
<strong>'dam'</strong> para decametros,<br>
<strong>'hm'</strong> para hectometros,<br>
<strong>'km'</strong> para kilometros

El resultado se puede guardar en una variable que sera el arreglo, ejemplo:

```js
let centimetros = conversor.MedidasdeLongitud.metro(100, "cm");
console.log(centimetros[0]); //se mostrara 10000 (como número)
console.log(centimetros[1]); //se mostrara El resultado es : 10000cm (como string)
```

El tercer argumento es completamente opcinal y es por si se quieren convertir medidas a una potencia a otras medidas de la misma potencia, por ejemplo si se quieren convertir 100m^2 a cm^2, se haria asi:

```js
conversor.MedidasdeLongitud.metro(100, "cm", 2); //resultado : [ 100000, 'El resultado es : 100000cm^2' ]
```

y asi si se desea aumentar las potencias.

## Otros métodos

El conversor contiene otros métodos fuera de las conversiones como es el caso de :

```js
conversor.comp();
conversor.verificar();
```

que se usan para calcular en los metodos, a excepción de :

```js
conversor.mos();
```

que mostrara en un console.log() el argumento que se pase, solo puede ser un argumento

Espero les guste este conversor, luego haré otras conversiones ademas de longitudes.
