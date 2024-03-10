export const getHoldingPnL = (qty: number, avgPrice: number, ltp: number) => {
  const currentPrice = qty * ltp;
  const investedAmount = qty * avgPrice;
  return currentPrice - investedAmount;
};

export const formatPrice = (price: number) => {
  return `₹ ${price.toLocaleString('en-in', {maximumFractionDigits: 2})}`;
};
