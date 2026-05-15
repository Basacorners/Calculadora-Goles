function calcularProbabilidades(datos) {

  const { FOL, FDL, PGLL, FOV, FDV, PGVL, linea } = datos;

  const lL = FOL * FDV * PGLL;
  const lV = FOV * FDL * PGVL;
  const lT = lL + lV;

  // Over / Under
  const k = Math.floor(linea);
  const under = poissonCDF(k, lT);
  const over = 1 - under;

  // BTTS
  const bttsSi = (1 - Math.exp(-lL)) * (1 - Math.exp(-lV));
  const bttsNo = 1 - bttsSi;

  // 1X2
  let pL = 0, pE = 0, pV = 0;

  for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= 6; j++) {
      const p = poisson(i, lL) * poisson(j, lV);

      if (i > j) pL += p;
      else if (i === j) pE += p;
      else pV += p;
    }
  }

  return {
    lL, lV, lT,
    under, over,
    bttsSi, bttsNo,
    pL, pE, pV
  };
}