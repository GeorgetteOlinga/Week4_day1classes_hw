// node --watch notes/objects.js

/*
    let sweden = {
        // key: value,
        capital: 'Stockholm',
        continent: 'Europe',
        population: 11000000,
        isCold: true,
        languages: {
            majority: ['Swedish', 'English'],
            minority: ['Finnish']
        },
        getWeather() {
            console.log("It's cold and dark")
        },
        getOfficialLangauge() {

        }
    }

    console.log(sweden.capital)
    let n = sweden.population
    console.log(sweden.isCold)
    console.log(sweden.languages.majority[1])
    console.error("i'm an error!")
    sweden.getWeather()
*/

let students = [
    "Georgette", 
    "Kristie", 
    "Doug",
    ['Ethan', 'Jordan']
]

/*
    METHOD means a FUNCITON inisde of an object
    PROPERTY/ATTRIBUTE means a VARIABLE inside of an object

    function name(params*) {code}
*/

class Country {
    // we start with {}
    constructor(name, languages, weather) {
        this.name = name
        this.languages = languages
        this.weather = weather
    }

    printWeather() {
        console.log(this.weather)
    }

    printOfficialLangauge() {
        console.log(this.languages.majority[0])
    }
}

let sweden = new Country(
        "Sweden", 
        {
            majority: ['Swedish', 'English'],
            minority: ['Finnish']
        }, 
        'Cold and dark'
    )

let singapore = new Country(
    "Singapore",
    {
        majority: ['Mandarin'],
        minority: ['Malay']
    },
    'Hot and humid'
)

singapore.printWeather()
sweden.printWeather()
sweden.printOfficialLangauge()