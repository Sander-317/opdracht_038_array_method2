//OPDRACHT A

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


    //OPDRACHT B.foreach
    // doubleArrayValues([1, 2, 3]) 

    const arrayOld = [1,2,3]
    let newArray = []

    arrayOld.forEach((item) => {
        newArray.push(item * 2)
    })

    console.log(newArray)

    newArray = []

    function doubleArrayValues(array){
        array.forEach((item, index, arr) => {
            newArray.push(item * 2)
                })
           
        //    console.log(newArray)
           return newArray
        }
    
    console.log(doubleArrayValues([1, 2, 3]))
    
    
    // result should be [2, 4, 6]

