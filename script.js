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

    function containsNumberBiggerThan10(array) {
        const biggerThanTen =  element => element  > 10;
        console.log("Opdracht C")
        console.log(array.some(biggerThanTen))
    }

    
    containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
  // result should be true
  containsNumberBiggerThan10([1,2,1,2,1,2])
  // result should be false

   //OPDRACHT D

function isItalyInTheGreat7(array) {
    console.log("Opdracht D:")
    console.log(array.includes('Italy'))
    }
isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
isItalyInTheGreat7(['Canada', 'France','Germany','Japan','United Kingdom','United States']) 

// result should be true

//OPDRACHT E.forEach

newArray = []

function tenfold(array){
    array.forEach((item, index, arr) => {
        newArray.push(item * 10)
            })
       
    //    console.log(newArray)
       return newArray
    }
console.log("Opdracht E.forEach:")
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//OPDRACHT E.map

function tenfold2(array) {
    let newArray2 = array.map(x => x* 10)
    return newArray2
}

console.log("Opdracht E.map:")
console.log(tenfold2([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]





