const carCollection = [];

const collectionLenght = 20;

const BTN = document.querySelector('.button')

const brandNamePool = [
    'Audi', 'Acura', 'Alfa Romeo', 'Aston Martin', 'Bentley',
    'BMW', 'Bugatti', 'Buick', 'Buick', 'Chevrolet', 'Chrysler', 'Citroen',
    'a Horse =)', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Geely', 'GMC',
    'Tesla', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Lexus', 'Maserati',
    'Mazda', 'McLaren', 'Mercedes-Benz', 'Kia', 'Koenigsegg', 'Lamborghini', 'Land Rover',
    'Mini', 'Mitsubishi', 'Nissan', 'Pagani', 'Peugeot', 'Porsche', 'Ram', 'Renault', 'Subaru',
    'Rolls Royce', 'Toyota', 'Volvo'
];

const modelTypesPool = [
    'City car', 'Supermini', 'Hatchback', 'Mini-MPV', 'MPV', 'Saloon',
    'Estate', 'Four-door Coupe', 'Crossover', 'SUV', 'SUV-Coupe', '4x4 and off-roader',
    'Coupe', 'Capriolet', 'Roadster', 'Grand Tourer', 'Van', 'Pickup'
]

const randomizerForBrand = () => {
    return Math.floor(Math.random() * Math.floor(brandNamePool.length));
};

const randomizerForProductionYear = () => {
    const productionYearSuffix = Math.floor(Math.random() * Math.floor(41))
    return 1980 + productionYearSuffix
};

const randomizerForModel = () => {
    return Math.floor(Math.random() * Math.floor(modelTypesPool.length));
};

const carCollectionGenerator = (length, arr) => {
    for (let i = 0; i < length; ++i) {
        arr.push({
            brandName: brandNamePool[randomizerForBrand()],
            model: modelTypesPool[randomizerForModel()],
            productionYear: randomizerForProductionYear()
        });
    }
};

//Task #1

carCollectionGenerator(collectionLenght, carCollection);

console.group('----- Task #1 -----');
console.log(carCollection);
console.groupEnd()

//Task #2

const groupByBrandNames = _.groupBy(carCollection, by => by.brandName);
const groupByModelTypes = _.groupBy(carCollection, by => by.model);
const groupByProductionYear = _.groupBy(carCollection, by => by.productionYear)

console.group('----- Task #2 -----');
console.log(groupByBrandNames);
console.log(groupByModelTypes);
console.log(groupByProductionYear);
console.groupEnd()

//Task #3

BTN.onmousedown = () => {
    BTN.classList.remove('shadow')
};

BTN.onmouseup = () => {
    BTN.classList.add('shadow')
};

BTN.onclick = () => {
    const prodYear = prompt('Enter Production Year', 2000);
    if (prodYear > 2020 || prodYear < 1980) {
        alert('Please enter year value \nbetween 1980 and 2020 years')
    } else {
        const filtered = _.filter(carCollection, n => n.productionYear == prodYear)
        console.group('----- Task #3 -----');
        console.log(filtered);        
        console.groupEnd()
    }
};

//Task #4 

const youngestOne = _.max(carCollection, n => n.productionYear);
const oldestOne = _.min(carCollection, n => n.productionYear);

console.group('----- Task #4 -----');
console.log('Oldest car in collection');
console.log(oldestOne);
console.log('Youngest car in collection');
console.log(youngestOne);
console.groupEnd()