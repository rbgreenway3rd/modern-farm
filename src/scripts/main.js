console.log("Welcome to the main module")

import { createPlan } from "./plan.js" 
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"


const yearlyPlan = createPlan()

console.log(yearlyPlan)

// test-code: checks createCrop functions
// import { createAsparagus } from "./seeds/asparagus.js"
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
// end test-code ---

// test-code: checks logic for addPlant and usePlants functions
// import { addPlant, usePlants, cropsArray } from "./field.js"
// const testSeed = {
    // type: "test seed",
    // height: 5,
    // output: 36
// }
// addPlant(testSeed)
// usePlants(testSeed)
// console.log(cropsArray)
// end test-code ---

// test-code: checks plantSeeds function
plantSeeds(yearlyPlan)