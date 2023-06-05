# prueba_js
ejercicios para demostrar los conocimientos adquiridos de javascript  

------------------------------------------------------------------------------

## 1. Contando con los dedos
![alt text](https://i0.wp.com/blog.frontiersin.org/wp-content/uploads/2017/07/shutterstock_648898522.jpg?resize=565%2C565&ssl=1)  


Demuestra que sabes contar hasta 10.

### Crea un array con los números del 1 al 10. Puedes hacerlo a mano o con un bucle.  

------------------------------------------------------------------------------

## 2. Contando monedas
![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUL1bKsDGwRSesrLTjU4RvETV7ueYDFp-2zrVB-gbZY_Hd2FwEuQOYrSa1xAUG3c0zu4&usqp=CAU)  
Ahora que has demostrado que sabes contar, la kuadrilla te ha pedido que hagas un programa que ayude a contar el bote disponible para la siguiente ronda de txikitos.  
Para ello, te pasan una lista con la cantidad de dinero que tiene cada persona, esperando que tú les des la suma de todos ellos.  
### Crea una función que reciba un array numérico y devuelva la suma de todos los elementos. 

Ejemplo: sumarArray([1, 2, 3, 4]) devolverá 10.  

------------------------------------------------------------------------------

## 3. Solo para mayores
![alt text](https://www.saferspaces.org.za/cache/ce_img_cache/local/520d1943832aab5c/og_bouncers.jpg)    

Trabajas de guardia de seguridad en una discoteca. Tienes que comprobar que los clientes tienen la edad mínima para entrar.  

### Crea una función que reciba un array con las edades de los clientes y devuelva un array con los que tienen la edad mínima.  

Ejemplo: comprobarEdad([15, 18, 20, 30]) devolverá [18, 20, 30]  
Si no hay nadie con la edad mínima, la función devolverá un array vacío.  
Ejemplo: comprobarEdad([15, 16, 17]) devolverá []  
Si no sabes cómo devolver el array, muestra por pantalla cada elemento que cumpla la condición.  

------------------------------------------------------------------------------   

## 4. (Opcional) Máquina de censura 1.0
![alt text](https://librotea.com/wp-content/uploads/2022/06/27/17/18/Sherlock_Holmes_detectives_Libros.jpg)    
Vamos a crear una máquina de censura. Esta primera versión nos avisará si una palabra está en la lista de censuradas  
### Crea una función que reciba una palabra y un array y busque la palabra en el array.  
### Si la encuentra, devolverá true. Si no, devolverá false.  

Ejemplo: buscarPalabra("hola", ["hola", "adiós"]) devolverá true  
Ejemplo: buscarPalabra("hola", ["adiós", "buenas"]) devolverá false  

------------------------------------------------------------------------------

## 5. (Opcional) Máquina de censura 1.1  
![alt text](https://i.kym-cdn.com/photos/images/newsfeed/000/242/011/8bc.jpg)    
Vamos a añadir otra funcionalidad a la máquina.
Esta vez queremos que nos permita ocultar palabras que no se deberían usar en público.  
Para ello, vamos a cambiar todas las letras de la palabra por "\*".  
### Crea una función que reciba una palabra y cambie todos sus caracteres por "\*".  

Ejemplo: censurarPalabra("hola") devolverá "\*\*\*\*"  
Ejemplo: censurarPalabra("estupendo") devolverá "\*\*\*\*\*\*\*\*\*"  

------------------------------------------------------------------------------

## 6. (Opcional) Máquina de censura 2.0
![alt text](https://nsarchive.gwu.edu/sites/default/files/thumbnails/image/3_9.jpg) 
Ya sabemos censurar palabras y buscarlas en un array. Ahora vamos a combinar las dos cosas para poder censurar frases completas.  
### Crea una función que reciba una frase y un array con las palabras que se deben censurar.  
### La función devolverá la frase censurada.  

Ejemplo: censurarFrase("buenos días", ["días"]) devolverá "buenos *****"  
Ejemplo: censurarFrase("los jueves voy al cine y los viernes a la playa", ["cine", "playa"]) devolverá "los jueves voy al **** y los viernes a la *****"  

