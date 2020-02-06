function areThereDuplicates() {
    const lookup = {};
    for (let num in arguments){
      lookup[arguments[num]] = (lookup[arguments[num]] || 0) + 1;
    }
    for (let key in lookup){
      if (lookup[key] > 1){
        return true;
      }
    }
    return false;
}

module.exports = areThereDuplicates;