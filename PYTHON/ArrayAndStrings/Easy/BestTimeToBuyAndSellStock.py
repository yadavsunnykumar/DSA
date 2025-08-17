# Best Time to Buy and Sell Stock
# Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

def maxProfit(prices):
    """
    Function to calculate the maximum profit from a list of stock prices.
    :param prices: List[int] - List of stock prices where prices[i] is the price of a given stock on day i.
    :return: int - Maximum profit that can be achieved.
    """
    if not prices:
        return 0

    min_price = float('inf')
    max_profit = 0

    for price in prices:
        # Update the minimum price seen so far
        min_price = min(min_price, price)
        # Calculate the profit if sold at the current price
        profit = price - min_price
        # Update the maximum profit
        max_profit = max(max_profit, profit)

    return max_profit

# Example usage
if __name__ == "__main__":
    prices = [7, 1, 5, 3, 6, 4]
    print("Maximum Profit:", maxProfit(prices))  # Output: 5