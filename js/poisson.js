function factorial(n) {
  let r = 1;
  for (let i = 1; i <= n; i++) r *= i;
  return r;
}

function poisson(k, lambda) {
  return Math.pow(lambda, k) * Math.exp(-lambda) / factorial(k);
}

function poissonCDF(k, lambda) {
  let sum = 0;
  for (let i = 0; i <= k; i++) {
    sum += poisson(i, lambda);
  }
  return sum;
}