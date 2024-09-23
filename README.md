# PokeAPI Connector

Este es un proyecto que implementa una API RESTful en Node.js utilizando Express. La API se conecta a la [PokeAPI](https://pokeapi.co/docs/v2) para obtener información sobre Pokémones y procesar la data requerida.

## Requisitos

- Node.js (versión 12 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/pokeapi-connector.git
   cd pokeapi-connector


2. npm install

3. npm start (puerto 3999 por defecto)

4. Listar los primeros 100 Pokémones
    URL: /api/pokemon

    Método: GET

    Descripción: Devuelve una lista de los primeros 100 Pokémones con su nombre y URL.

    Respuesta:

    ```bash
    {
    "results": [
        { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" },
        { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" },
        ...
    ]
    }

5. Obtener un Pokémon por su ID

    URL: /api/pokemon/:id

    Método: GET

    Descripción: Devuelve el nombre de un Pokémon y sus tipos, dado su ID.

    Parámetro:

    id: El ID del Pokémon.
    Respuesta:

    {
  "name": "bulbasaur",
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ]
}


6. Obtener un Pokémon y traducciones de sus tipos
    URL: /api/pokemonAndTypes/:id

    Método: GET

    Descripción: Devuelve el nombre de un Pokémon, sus tipos y las traducciones de los tipos en español y japonés.

    Parámetro:

    id: El ID del Pokémon.
    Respuesta:


    {
  "name": "bulbasaur",
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/",
        "names": [
          {
            "language": {
              "name": "es",
              "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "name": "Planta"
          },
          {
            "language": {
              "name": "ja",
              "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "name": "くさ"
          }
        ]
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/",
        "names": [
          {
            "language": {
              "name": "es",
              "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "name": "Veneno"
          },
          {
            "language": {
              "name": "ja",
              "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "name": "どく"
          }
        ]
      }
    }
  ]
}
