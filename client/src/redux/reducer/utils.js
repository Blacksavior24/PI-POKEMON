const error = (array) => {
    if (array.length <= 0) {
      window.location.href = "http://localhost:3000/404";
    }
};
export const filterPokemons = (filterBy, array) => {
    switch (filterBy) {
      case "All":
        return array;
  
      case "FromApi":
        array = array.filter((poke) => typeof poke.id === "number");
        error(array);
        return array;
  
      case "FromDb":
        array = array.filter((poke) => typeof poke.id === "string");
        error(array);
        return array;
  
      case filterBy:
        array = array.filter((poke) =>
          poke.types.find((t) => t.name === filterBy)
        );
        error(array);
        return array;
  
      default:
        return array;
    }
};
export const sortPokemons = (sortBy, array) => {
    switch (sortBy) {
      case "a-z":
        return array.sort((a, b) => a.name.localeCompare(b.name));
      case "z-a":
        return array.sort((a, b) => b.name.localeCompare(a.name));
      case "strong":
        return array.sort((a, b) => {
          if (a.attack < b.attack) return 1;
          if (a.attack > b.attack) return -1;
          return 0;
        });
      case "weak":
        return array.sort((a, b) => {
          if (a.attack > b.attack) return 1;
          if (a.attack < b.attack) return -1;
          return 0;
        });
      default:
        return array;
    }
};