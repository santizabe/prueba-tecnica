# PRUEBA TECNICA

La prueba consiste en desarrollar una interfaz para un buscador de vuelos

Se debe poder colocar los parámetros de búsqueda y listar los resultados de vuelos

Los vuelos se pueden filtrar solo por nombre del aeropuerto.

Una vez se seleccione el vuelo deseado al darle el botón comprar debe ir a un screen donde se
ingresen los datos personales de los pasajeros, y por último guardar todos los de la reserva en
una base de datos.

El Front end debe estar desarrollado en React JS, el diseño queda a criterio del desarrollador puede ser un
diseño muy sencillo, lo importante es evaluar la funcionalidad de la aplicación
Debe crear un api en Laravel + MySql para guardar toda la información de la reservación.

Puntos a evaluar: Clean code, semántica y nomenclatura de las variables, buenas prácticas.

Test: 

Origen: Jose Maria Cordova
Destino: Ernesto Cortissoz
Pasajeros: 1
Vuelo: solo ida
Fecha de vuelo: Octubre 26.

Se envian los datos por parametros de busqueda a la URL que los despliega.
La URL hace la peticion al api https://travelflight.pdtcomunicaciones.com/api/flights y lista los 10 primeros vuelos retornados.

Se selecciona el vuelo y se envia a la vista con los datos personales. Al enviar el formulario, se hace la peticion a la base de datos y se almacenan los datos.