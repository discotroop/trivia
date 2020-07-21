// sample key
// https://opentdb.com/api.php?amount=10&category=10&difficulty=medium

// max number = 50

// Set default call.

function generateKey(amount, category, difficulty) {

    // set default call
    let baseString = "https://opentdb.com/api.php?";
    // handle passed amount
    if (amount) {
        // set amount
    } else {
        // set default count to 10
        baseString = baseString + "amount=10";
    }

    if (category) {
        // handle passed category
    } else {
        // set default category
    }

    if (difficulty) {
        // handle difficulty
    } else {
        // handle no difficulty.
    }

    return baseString
}

export default generateKey