# Fredy-API

**Descripción:** Proyecto de API Serverless para adaptar y transformar los modelos de la API SWAPI a español y realizar operaciones CRUD en una base de datos. 

## Requisitos Previos

- Node.js y npm instalados en tu entorno de desarrollo.
- Credenciales de AWS configuradas (si utilizas servicios de AWS).

## Instalación

1. Clona este repositorio:

   ```shell
   git clone <URL del repositorio>

2. Navega al directorio del proyecto:

    cd fredy-api
3. Instala las dependencias:

    npm install

## Uso

### Adaptar y Transformar Modelos SWAPI

- **Obtener un Personaje de SWAPI**

  - **Método**: GET
  - **Ruta**: `/obtener-personaje/:id`
  - **Parámetro de Ruta**: `id` (ID del personaje)
  - **Respuesta Exitosa**:

    ```json
    {
      "nombre": "Nombre del Personaje",
      "altura": "Altura en centímetros",
      "peso": "Peso en kilogramos",
      "color_piel": "Color de la piel",
      "color_cabello": "Color del cabello",
      "color_ojos": "Color de los ojos",
      "fecha_nacimiento": "Fecha de nacimiento",
      "género": "Género"
    }
    ```

### Crear un Registro en SWAPI

- **Método**: POST
- **Ruta**: `/crear-registro`
- **Cuerpo de la Solicitud**:

  ```json
  {
    "nombre": "Nombre del Personaje",
    "altura": "Altura en centímetros",
    "peso": "Peso en kilogramos",
    "color_piel": "Color de la piel",
    "color_cabello": "Color del cabello",
    "color_ojos": "Color de los ojos",
    "fecha_nacimiento": "Fecha de nacimiento",
    "género": "Género"
  }

### Respuesta Exitosa

La respuesta exitosa para la creación de un registro en SWAPI es un objeto JSON que contiene un mensaje de confirmación:

    ```json
    {
    "mensaje": "Registro creado con éxito en SWAPI"
    }

### Notas Adicionales

- Este proyecto utiliza Express.js como marco de trabajo para gestionar las rutas y controladores HTTP.
- Asegúrate de tener las credenciales de AWS configuradas si planeas utilizar servicios de AWS.

### Contribución

Si deseas contribuir al proyecto, crea una solicitud de extracción (pull request) y sigue las guías de estilo y convenciones de codificación.

### Contacto

Para preguntas o comentarios, contacta a [Fredy Torpoco Mucha] en [fredytorpocomucha@gmail.com].
