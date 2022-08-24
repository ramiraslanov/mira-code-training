/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    return accounts.reduce(function (prevAmount, account) {
        var amount = account.reduce(function (partialSum, value) {
            return partialSum + value;
        }, 0);

        return amount > prevAmount ? amount : prevAmount;
    }, 0);
};
