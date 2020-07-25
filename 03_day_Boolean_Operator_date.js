// Initialising arrays and also to determine the length of the arrays
//Array of numbers
const numbers = [20, 100, 10.5, 254.7, 500]

//array of String fruits
const fruits = ['Banana', 'Orange', 'Mango', 'Lemon', 'Pineapple']

//array of web technologies
const webTech = ['HTML', 'CSS', 'JS', 'React', 'Angular', 'VueJs', 'Ionic', 'ReactNative']

//array of mobile technologies
const mobileTech = ['Java', 'Kotlin', 'Flutter', 'ReactNative', 'Swift']

//array of countries
const countries = ['Nigeria', 'Ghana', 'USA', 'Belgium', 'UK', 'Canada']

//print the array and the length

console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);
console.log('Fruits:', fruits);
console.log('Number of Fruits:', fruits.length);
console.log('Web Technologies:', webTech);
console.log('Number of web Technologies:', webTech.length);
console.log('Mobile Technologies:', mobileTech);
console.log('Number of Mobile Technologies:', mobileTech.length);
console.log('Contries:', countries);
console.log('Number of Countries:', countries.length);

//array containing different data types

const array = [
    'Folarin Isaac',
    22,
    true,
     {country: 'Nigeria', city: 'Lagos'},
     {skills: ['HTML', 'CSS','JAVA', 'JAVASCRIPT', 'Pyhton']},
]
console.log(array);

//Creating an array using split
let companiesString = 'Facebook, Amazon, Microsoft, IBM ,Azzure, Google, Oracle, Apple'
const companies = companiesString.split(',')
console.log(companies)

//Accessing array items using index
const webLang = ['HTML', 'CSS','JavaScript', 'React', 'Angular']//list of web technologies
console.log(webLang)
console.log(webLang.length)
console.log(webLang[0])
console.log(webLang[3])

let lastIndex = webLang.length - 1
console.log(webLang[lastIndex])

console.log(countries)
console.log(countries.length)
console.log(countries[1])

let lastCountry = countries.length - 1
console.log(countries[lastCountry])

//Modifying array length
countries[0] = 'Russia'
countries[lastIndex] = 'Finland'
console.log(countries)