Aquí tienes un README para el proyecto de una API que usa las tecnologías TypeScript, Mongoose, MongoDB, Docker y Express. El README describe el repositorio y la estructura del proyecto, así como las funcionalidades de la API.

---

# Juego de Preguntas y Respuestas API

Este es un proyecto de API construido con **TypeScript**, **Mongoose**, **MongoDB**, **Docker** y **Express**. Esta API permite registrar usuarios, crear preguntas con múltiples respuestas posibles (incluyendo la respuesta correcta), y relacionar preguntas con usuarios y sus respuestas.

El repositorio del proyecto está alojado en GitHub: [CARLOSMARES/juego-preguntas-y-respuestas](https://github.com/CARLOSMARES/juego-preguntas-y-respuestas).

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso de la API](#uso-de-la-api)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/CARLOSMARES/juego-preguntas-y-respuestas.git
    cd juego-preguntas-y-respuestas
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables de entorno:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/nombre-base-de-datos
    ```

2. Modifica el archivo `.env` según tus necesidades.

## Ejecución

1. **Localmente**:

    Inicia el servidor localmente:
    ```bash
    npm run start
    ```

2. **Con Docker**:

    Ejecuta el script `docker.sh` para levantar las imágenes de Docker:
    ```bash
    ./docker.sh
    ```

## Estructura del Proyecto

La estructura del proyecto sigue el siguiente esquema:

```
juego-preguntas-y-respuestas/
├── src/
│   ├── config/
│   │   └── ...
│   ├── interfaces/
│   │   └── ...
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── tsconfig.json
│   └── docker.sh
├── README.md
└── ...
```

- `src/`: Contiene el código fuente del proyecto.
- `config/`: Contiene la configuración para conectarse a MongoDB.
- `interfaces/`: Contiene las interfaces para las colecciones de MongoDB.
- `docker.sh`: Script para ejecutar los comandos de Docker y levantar las imágenes necesarias.

## Uso de la API

La API ofrece las siguientes funcionalidades:

- **Registro de usuario**: Permite registrar un nuevo usuario.
- **Registro de preguntas**: Permite registrar una nueva pregunta con cinco respuestas posibles, incluyendo la respuesta correcta.
- **Relación usuario-pregunta-respuesta**: Permite relacionar preguntas con usuarios y las respuestas de estos.

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes alguna mejora o corrección, por favor abre un _pull request_.

## Licencia

Este proyecto está bajo la [licencia GPL3](LICENSE).

---
