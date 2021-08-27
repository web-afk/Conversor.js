# Conversor.js

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

conversor.MedidasdeLongitud.mili(argumento1, argumento2, argumentoOpcional); //convierte milimetro a cualquier medida, incluyendo los mismos decimetros

conversor.MedidasdeLongitud.centi(argumento1, argumento2, argumentoOpcional); //convierte centimetros a cualquier medida, incluyendo los mismos centimetros

conversor.MedidasdeLongitud.deci(argumento1, argumento2, argumentoOpcional); //convierte decimetros a cualquier medida, incluyendo los mismos decimetros

conversor.MedidasdeLongitud.metro(argumento1, argumento2, argumentoOpcional); //convierte metros a cualquier medida, incluyendo los mismos metros

conversor.MedidasdeLongitud.deca(argumento1, argumento2, argumentoOpcional); //convierte decametros a cualquier medida, incluyendo los mismos decametros

conversor.MedidasdeLongitud.hecto(argumento1, argumento2, argumentoOpcional); //convierte hectometros a cualquier medida, incluyendo los mismos hectometros

conversor.MedidasdeLongitud.kilo(argumento1, argumento2, argumentoOpcional); //convierte kilometros a cualquier medida, incluyendo los mismos kilometros
```
