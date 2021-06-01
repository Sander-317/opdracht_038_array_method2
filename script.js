const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Hier komt jouw functie
   function findSpiderMan(array) {  
       return array.name === "Spiderman"
   }
    
    console.log(superheroes.find(findSpiderMan)) 
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}