const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.get('/obtener-personaje/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`https://swapi.py4e.com/api/people/${id}/`);
    const data = response.data;

    // mapeo de atributos
    const personajeEnEspanol = {
      nombre: data.name,
      altura: data.height,
      peso: data.mass,
      color_piel: data.skin_color,
      color_cabello: data.hair_color,
      color_ojos: data.eye_color,
      fecha_nacimiento: data.birth_year,
      género: data.gender,
    };

    res.status(200).json(personajeEnEspanol);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el personaje' });
  }
});

app.post('/crear-registro', async (req, res) => {
  try {
    const { nombre, altura, peso, color_piel, color_cabello, color_ojos, fecha_nacimiento, género } = req.body;

    // objeto swapi
    const datos = {
      name: nombre,
      height: altura,
      mass: peso,
      skin_color: color_piel,
      hair_color: color_cabello,
      eye_color: color_ojos,
      birth_year: fecha_nacimiento,
      gender: género,
    };

    const response = await axios.post('https://swapi.py4e.com/api/people/', datos);

    if (response.status === 201) {
      res.status(200).json({ mensaje: 'Registro creado con éxito en SWAPI' });
    } else {
      res.status(500).json({ mensaje: 'Error al crear el registro en SWAPI' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el registro' });
  }
});

module.exports.app = app;
