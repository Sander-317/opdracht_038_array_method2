//OPDRACHT A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Hier komt jouw functie
   function findSpiderMan(array) {  
       return array.name === "Spiderman"
   }
   console.log("Opdracht A")
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
    console.log("Opdracht B:")
    console.log(newArray)

    newArray = []

    function doubleArrayValues(array){
        array.forEach((item, index, arr) => {
            newArray.push(item * 2)
                })
           
        //    console.log(newArray)
           return newArray
        }
    console.log("Opdracht B.forEach:")
    console.log(doubleArrayValues([1, 2, 3]))
    
    
    // result should be [2, 4, 6]

    //OPDRACHT B.map 

    function doubleArrayValues2(array) {
        let newArray2 = array.map(x => x* 2)
        return newArray2
    }
    console.log("Opdracht B.map:")
    console.log(doubleArrayValues2([1, 2, 3]))

    //OPDRACHT C

    
    // let filteredArray = false

    // function containsNumberBiggerThan10(array) {
        // let filterdArray =  
        // array.filter((callbackFn) => { 
            // item > 10
            //  if (item > 10)
        //         filteredArray = true     
        // return filteredArray
            //  else
            //   filteredArray = false
            //     return filteredArray
        // })
        // return 
    // }
// console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
// console.log(containsNumberBiggerThan10([1,2,1,2,1,2]))


// containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 

// console.log(filteredArray)
  // result should be true
//   containsNumberBiggerThan10([1,2,1,2,1,2])
  // result should be false
//   console.log(filteredArray)

//OPDRACHT D


