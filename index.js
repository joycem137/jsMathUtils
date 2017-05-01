/*
 * Math Utils are various methods for doing simple math
 * modifications.
 */
module.exports = {
    /**
     * Returns a value clamped between the two specified values, inclusive.
     *
     */
    clamp: function(value, min, max) {
        return Math.max(min, Math.min(value, max));
    },

    /**
     * Returns true if the value is between the indicated values,
     * inclusive.
     */
    checkClamped: function(value, min, max) {
        return value >= min && value <= max;
    },

    /**
     * Randomly shuffles the indicated array.
     * From: https://www.frankmitchell.org/2015/01/fisher-yates/
     */
    shuffleArray: function(array) {
        var i = 0
            , j = 0
            , temp = null;

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
    }
};
