import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const plant of row) {
            switch(plant) {
                case "Asparagus":
                    addPlant(createAsparagus());
                    break;
                case "Corn":
                    addPlant(createCorn());
                    break;
                case "Potato":
                    addPlant(createPotato());
                    break;
                case "Soybean":
                    addPlant(createSoybean());
                    break;
                case "Sunflower":
                    addPlant(createSunflower());
                    break;
                case "Wheat":
                    addPlant(createWheat());
                    break;
                default:
                    console.log(`This farm does not possess resources required to grow ${plant}`);


            }
        }
    }
}