export const cropsArray = [];

export const addPlant = (seeds) => { 
    if (Array.isArray(seeds)) {
        for (const seed of seeds) {
            cropsArray.push(seed);
        }
    }
    else {
        cropsArray.push(seeds);
    }
}

export const usePlants = () => {
    return cropsArray;
}
