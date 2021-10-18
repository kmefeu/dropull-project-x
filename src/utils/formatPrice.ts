const formatPrice = (price: string | undefined) => {
  if (price) {
    return `${+price / 1000000000000000000}`;
  }
  return "New Asset";
};

export default formatPrice;
