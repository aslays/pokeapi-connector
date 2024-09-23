
const axios = require('axios');

exports.getAllPokemons = async (req, res) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const pokemons = response.data.results;
  
      res.json({
        results: pokemons
      });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching Pokémon data' });
    }
  };

// Obtener un pokémon específico por su ID
exports.getPokemonById = async (req, res) => {
    try {
      const { id } = req.params; // Extraer el ID de los parámetros de la URL
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      
      // Extraer los tipos del Pokémon
      const types = response.data.types.map(type => {
        return {
          slot: type.slot,
          type: {
            name: type.type.name,
            url: type.type.url
          }
        };
      });
  
      // Responder con el nombre y tipos del Pokémon
      res.json({
        name: response.data.name,
        types: types
      });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching Pokémon data' });
    }
  };
  

// Obtener un pokémon con traducciones en español y japonés
exports.getPokemonAndTypesById = async (req, res) => {
    try {
      const { id } = req.params;
      const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      
      // Obtener los tipos del Pokémon y sus traducciones
      const types = await Promise.all(
        pokemonResponse.data.types.map(async (type) => {
          const typeResponse = await axios.get(type.type.url); // Obtener más detalles del tipo
  
          // Filtrar los nombres del tipo en español y japonés
          const names = typeResponse.data.names.filter(name =>
            name.language.name === 'es' || name.language.name === 'ja'
          );
  
          return {
            slot: type.slot,
            type: {
              name: type.type.name,
              url: type.type.url,
              names: names.map(t => ({
                language: {
                  name: t.language.name,
                  url: t.language.url
                },
                name: t.name
              }))
            }
          };
        })
      );
  
      res.json({
        name: pokemonResponse.data.name,
        types: types
      });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching Pokémon data' });
    }
  };
  
  
