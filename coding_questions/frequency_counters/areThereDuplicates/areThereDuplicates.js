function areThereDuplicates() {
    // Adds every variable number of arguments to a lookup
    const lookup = {};
    for (let n in arguments) {
        lookup[arguments[n]] = (lookup[arguments[n]] || 0) + 1;
    }
    // Checks if any key is more than 1
    for (let key in lookup) {
        if (lookup[key] > 1) {
            return true;
        }
    }
    return false;
}

module.exports = areThereDuplicates;
