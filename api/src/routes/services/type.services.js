const axios = require("axios");
const { Type } = require('./../../db');

const getTypes = async (req, res) => {
  try {
    let apiType = await axios.get("https://pokeapi.co/api/v2/type");
    let apiTypeInfo = apiType.data;
    let types = apiTypeInfo.results.map((e) => ({
      name: e.name,
      img: `https://typedex.app/images/ui/types/dark/${e.name}.svg`,
    }));
    types = types.filter((t) => t.name !== "shadow" && t.name !== "unknown");
    //console.log(types);
    types.forEach((type) => {
      Type.findOrCreate({
        where: {
          name: type.name,
        },
      });
    });
    const allTypes = await Type.findAll();
    return res.status(200).send(allTypes);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getTypes,
};