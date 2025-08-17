/**
 * Function to calculate the maximum profit from buying and selling a stock.
 * @param {number[]} prices - Array of stock prices where prices[i] is the price of a given stock on the i-th day.
 * @return {number} - Maximum profit that can be achieved. If no profit is possible, return 0.
 */
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}
// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5 (Buy at 1, sell at 6)
// Explanation: The maximum profit is achieved by buying on day 2 (price = 1) and selling on day 5 (price = 6).
// If the prices array is empty or has only one price, no profit can be made.
// Example with no profit
const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0 (No profit can be made)
// Explanation: In this case, the prices are in descending order, so no profit can be made. 