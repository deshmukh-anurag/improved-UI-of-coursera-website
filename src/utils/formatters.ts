export const formatPrice = (price: number): string => {
    return `₹${price.toLocaleString('en-IN')}`;
};

export const formatPriceWithOriginal = (price: number, originalPrice?: number): string => {
    const formatted = formatPrice(price);
    if (originalPrice) {
        return `${formatted} ${formatPrice(originalPrice)}`;
    }
    return formatted;
};

// Convert USD to INR (approximate conversion rate)
export const convertUSDToINR = (usdPrice: number, rate: number = 83): number => {
    return Math.round(usdPrice * rate);
};
