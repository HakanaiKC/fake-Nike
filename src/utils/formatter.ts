function formatPrice(priceCents: number) {
    const priceDollars = priceCents / 100;
    return `$${priceDollars.toFixed(2)}`;
}

export default formatPrice