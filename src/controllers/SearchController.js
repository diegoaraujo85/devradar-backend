const api = require("../services/api");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(request, response) {
    const { longitude, latitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    //buscar todos os devs num raio de 10km
    //filtrar por tecnologias
    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location:{
        $near:{
          $geometry:{
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 100000,
        }
      },
    });

    return response.json({ devs });
  }
};
