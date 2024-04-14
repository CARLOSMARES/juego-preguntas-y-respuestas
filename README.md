# Este proyecto es creado para ["La Hackaton Del Dev"](https://www.lahackathondeldev.com/)

# Juego de Preguntas y Respuestas

Este es un proyecto de ejemplo que utiliza Angular para el frontend, Node.js con Express para el backend, y MongoDB para la base de datos. El proyecto está diseñado para ser ejecutado de forma local utilizando Docker y Docker Compose para una configuración simplificada.

## Repositorio

El repositorio de este proyecto se encuentra en [GitHub](https://github.com/CARLOSMARES/juego-preguntas-y-respuestas).

## Requisitos

- [Docker](https://www.docker.com/)

## Configuración

1. Clona este repositorio:

    ```shell
    git clone https://github.com/CARLOSMARES/juego-preguntas-y-respuestas.git
    cd juego-preguntas-y-respuestas
    ```

2. Construye e inicia los contenedores utilizando Docker Compose:

    ```shell
    docker-compose up --build
    ```

    Esto construirá e iniciará los contenedores para el frontend, backend y la base de datos.

3. Abre tu navegador web y accede a `http://localhost:4200` para ver la aplicación en funcionamiento.

## Estructura del proyecto

- `frontend/`: Contiene el código fuente de la aplicación frontend desarrollada con Angular.
- `backend/`: Contiene el código fuente de la API backend desarrollada con Node.js y Express.
- `db/`: Contiene los scripts y configuraciones relacionados con la base de datos MongoDB.
- `docker-compose.yml`: Archivo de configuración para Docker Compose, que define los servicios de frontend, backend y base de datos.

## Características

- **Frontend**: Aplicación web desarrollada con Angular.
- **Backend**: API REST desarrollada con Node.js y Express.
- **Base de datos**: Base de datos MongoDB para almacenar datos.
- **Docker**: Se utiliza Docker y Docker Compose para la gestión de contenedores y la configuración de servicios.

## Cómo contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama nueva con tu característica o corrección de errores:

    ```shell
    git checkout -b mi-nueva-rama
    ```

3. Realiza tus cambios y haz commits:

    ```shell
    git add .
    git commit -m "Descripción de los cambios"
    ```

4. Envía los cambios a tu repositorio fork:

    ```shell
    git push origin mi-nueva-rama
    ```

5. Crea un Pull Request desde tu rama hacia la rama principal de este repositorio.

## Licencia

Este proyecto está bajo la Licencia GPL3. Puedes ver más detalles en el archivo [LICENSE](LICENSE).
