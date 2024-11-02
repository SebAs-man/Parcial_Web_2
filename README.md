# Sobre el proyecto

El objetivo es crear una página web dinámica con la siguiente estructura:

![alt imagen-de-referencia][reference]

[reference]: ./src/assets/reference.png/

No obstante, debe cumplir con algunas reglas importantes:

* Cuando el usuario cambie de página los resultados de la página anterior deben ser eliminados de la tabla, y los detalles de la foto deben ser reemplazados por la foto del primer resultado.
* Cuando el usuario realice una búsqueda por otra fecha, los datos de la tabla deben ser reemplazados por los datos de la nueva consulta, no es válido conservar los datos anteriores y seguir agregando datos a la tabla de resultados.
* Considere que el usuario no va a exceder el límite de resultados, por ejemplo, que siempre va a buscar en una fecha donde existan fotos, y que no va a exceder el número máximo de páginas por consulta.

> [!IMPORTANT]
> La página debe cargar los resultados de 25 en 25 según la página solicitada.

# Sobre la API

La API para consumir se encuentra en [este enlace](https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=wwLNtSl7Oqz90ubKgOo7ZzoFbQC02NxZSwXXpdCZ), la cual cuenta tanto con la información requerida, como con las imágenes a mostrar.

# Sobre el desarrollo

Este proyecto se llevó a cabo durante durante la semana del 28 de octubre al 02 de noviembre del 2024 por **Sebastián Mantilla**. Se utilizó React y TailWind como frameworks JavaScript y CSS respectivamente para el desarrollo del presente.
