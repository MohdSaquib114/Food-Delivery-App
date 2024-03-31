function centsToDollars(cents) {
    return cents / 100; // Convert to dollars
  }
  function dollarsToCents(dollars) {
    return Math.round(dollars * 100); // Convert to cents and round to the nearest integer
  }


module.exports = {
    centsToDollars,
    dollarsToCents
}