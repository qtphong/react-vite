const diameter = 10 + 12;
const radius = diameter / Math.PI;

function calculationArea(radius) {
  return Math.PI * radius * radius;
}

function getRandomNumber(randomGenerator = Math.random) {
  return randomGenerator();
}

const userHandlers = {
  admin: handleAdminData,
  user: handleUserData,
  guest: handleGuestData,
};

function handleUserData(data) {
  return userHandlers[data.type](data);
}

function calculatePriceWithTax(basePrice, taxRate) {
  const TAX_MULTIPLIER = 1;
  return basePrice * taxRate + TAX_MULTIPLIER;
}
