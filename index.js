const hqStreetNumber = 42;
const block = 264;

function distanceFromHqInBlocks(streetNumber) {
    const distance = Math.abs(streetNumber - hqStreetNumber);
    return distance;
}

function distanceFromHqInFeet(blockNumber) {
    const distance = distanceFromHqInBlocks(blockNumber) * block;
    return distance;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const distance = Math.abs(startBlock - endBlock) * block;
    return distance;
}

function calculatesFarePrice(start, destination) {
    let price;
    const distance = Math.abs(start - destination) * block;

    if (distance < 400) {
        price = 0;
    }
    else if (distance > 400 && distance < 2000) {
        price = (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance < 2500) {
        price = 25;
    }
    else if (distance > 2500) {
        price = "cannot travel that far"
    }
    return price;
}
