import { beers } from "./datos.js"
// 1. Convert the following named function to an arrow function:
const printMessage = (message) => console.log(message)

// 2. Convert the following named function to an arrow function:
const createMultiplication = (num1, num2) => num1 * num2

// 3. Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], apply a map to that array and pass as an argument the named function shown in the previous exercise. Show by console the new array obtained.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const multiplier = 2

const result = array.map(num => createMultiplication(num, multiplier))
//.map aplica a num(num es un parametro, no una funcion) a cada elemento del array 
console.log(result)

//4 Generate a function that receives an array of beers as a parameter and returns a new array with the 10 most alcoholic beers.
const mostAlcoholic = (beers) => beers.sort((a, b) => b.abv - a.abv).slice(0, 10) // sort ordena los elementos de menor a mayor con la func de comparacion de abv (-). devuelve numeros positivos o negativos o 0 si son iguales. slice corta el array y devuelve los objetos de la posicion 0 hasta la 9

// 5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers.
const leastBitter = (beers) => beers.sort((a, b) => a.ibu - b.ibu).slice(0, 10)

// 6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered.
const beerByName = (beers, name) => beers.find((beer) => beer.name === name)
//console.log(beerByName(beers, prompt('Enter a beer: ')))

// 7. Generate a function that receives as a parameter an array of beers, a value and that returns the first object whose ibu property is equal to the entered value, in case there is no beer with that ibu that displays a message in the console that says “ There is no beer with an ibu of (value entered).”
const beerByIbu = (beers, ibuValue) => {
    const beer = beers.find((beer) => beer.ibu === ibuValue)
    if (beer) {
        return beer
    } else {
        console.log(`There is no beer with an ibu of ${ibuValue}.`)
    }
}

// 8. Generate a function that receives the name of a beer as a parameter and returns the position in the array of that beer. If the beer is not found, a message must be printed through the console saying “(Name of the beer entered) does not exist.”
const beerPosition = (beers, beerName) => {
    const position = beers.findIndex((beer) => beer.name === beerName)
    //findindex tiene un cb que devuelve true o false 
    // console.log(position);
    if (position !== -1) {// si la posicion es distinto de -1 es porque el elemento existe en el array ya que se encontro en la posicion 0 y el array empieza en la posicion 0
        console.log(`${beerName} exists in the array.`)
        return position
    } else {
        console.log(`${beerName} does not exist.`)
    }
}

// 9. Generate a function that receives as a parameter the array of beers and an alcohol value. The function must return a new array with the beers that do not exceed the alcohol level. Each element of the new array must be an object that has the properties name, alcohol (abv) and "bitterness" (ibu)
const beerByAlcohol = (beers, alcoholValue) => {
    return beers.filter((beer) => beer.abv <= alcoholValue)// filter devuelve un nuevo array con los elementos que cumplan la condicion dada en el cb
        .map((beer) => ({//cada objeto(beer) se transforma en un nuevo objeto con las propiedades q busco
            name: beer.name,
            alcohol: beer.abv,
            bitterness: beer.ibu
        }))
}
const alcoholLevel = 40
console.log(beerByAlcohol(beers, alcoholLevel))

// 10. Generate a function that receives as parameters an array of beers, a property name and a boolean value. It should return a new array with 10 beers ordered by the property entered as the second argument, ascending if the third is true or descending if it is false.

const orderBeers = (beers, property, ascending) => {
    const compared = (a, b) => {
        if (ascending) {
            return a[property] - b[property]
        } else {
            return b[property] - a[property]
        }
    }
    beers.sort(compared)// ordena elementos de < a > o de > a < con la func de comparacion
    return beers.slice(0, 10)
}

console.log(orderBeers(beers, "ibu", true));
console.log(orderBeers(beers, "ibu", false));
