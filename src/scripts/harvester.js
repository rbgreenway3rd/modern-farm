export const harvestPlants = (plants) => {
    const harvestedPlants = []
    for (const plant of plants) {
        if (plant.type === "Corn") {
            for (let i = plant.output/2; i > 0; i--) {
                harvestedPlants.push(plant);
            }
        }
        else {
            for (let i = plant.output; i > 0; i--) {
                harvestedPlants.push(plant);
            }
        }
    }
    return harvestedPlants
}