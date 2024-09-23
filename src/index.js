const express = require('express');
const app = express();
const port = process.env.PORT || 3999;

// Importar rutas
const pokemonRoutes = require('./routes/pokemonRoutes');

// Usar las rutas
app.use('/api', pokemonRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
