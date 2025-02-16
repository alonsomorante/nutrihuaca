
export function calcularCalorias({ gender, weight, height, age, activity, goal }: {
  weight: number,
  height: number,
  age: number,
  gender: string
  activity: string,
  goal: string
}): number {

  let tmb: number;
  if (gender === 'hombre') {
    tmb = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else if (gender === 'mujer') {
    tmb = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  } else {
    throw new Error("gender debe ser 'hombre' o 'mujer'");
  }

  // Factor de actividad física
  const factoresActividad: { [key: string]: number } = {
    Sedentario: 1.2,
    Ligero: 1.375,
    Moderado: 1.55,
    Activo: 1.725,
    "Muy activo": 1.9,
  };

  if (!factoresActividad.hasOwnProperty(activity)) {
    throw new Error(
      "Actividad debe ser 'sedentario', 'ligera', 'moderada', 'alta' o 'muy_alta'"
    );
  }

  const factorActividad: number = factoresActividad[activity];

  // Calorías diarias necesarias para mantener el weight
  const caloriasMantenimiento: number = tmb * factorActividad;

  // Ajuste según el goal
  let caloriasDiarias: number;
  if (goal === 'Perder peso') {
    caloriasDiarias = caloriasMantenimiento * 0.85; // Reducción del 15%
  } else if (goal === 'Mantener peso') {
    caloriasDiarias = caloriasMantenimiento * 1.15; // Aumento del 15%
  } else if (goal === 'Ganar peso') {
    caloriasDiarias = caloriasMantenimiento;
  } else {
    throw new Error("goal debe ser 'bajar', 'mantener' o 'subir'");
  }

  return Math.round(caloriasDiarias);
}
