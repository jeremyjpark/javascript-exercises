var makeChange = function(target, coins) {
    if (target === 0) {
        return [];
    }

    var targetLarger = false;
    for (var i = 0; i < coins.length; i++) {
        if (coins[i] <= target){
            targetLarger = true;
        }
    }
    if ( targetLarger === false ){
        return null;
    }
    coins = coins.sort(function(a, b) {
        return b - a;
    });
    var best_change = null;

    for (var i = 0; i < coins.length; i++) {
        if (coins[i] > target) {
            continue;
        } else {
            var remainder = target - coins[i];
            var best_remainder = makeChange(remainder, coins)
            if (best_remainder === null) {
                continue;
            } else {
                var this_change = coins[i] + best_remainder;
                if (best_change === null || (this_change.length < best_change.length)){
                    best_change = this_change;
                }
            }
        }
    }
    return best_change;
}
console.log(makeChange(14, [10, 7, 1]));
