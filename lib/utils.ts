// Utility functions for calculations

interface CalorieParams {
  gender: string
  activity: string
  goal: string
  age: number
  height: number
  weight: number
}

export function calcularCalorias(params: CalorieParams): number {
  const { gender, activity, age, height, weight } = params

  // Calculate BMR using Mifflin-St Jeor Equation
  let bmr = 0

  if (gender === "hombre") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161
  }

  // Apply activity multiplier
  const activityMultipliers = {
    Sedentario: 1.2,
    Ligero: 1.375,
    Moderado: 1.55,
    Activo: 1.725,
    "Muy activo": 1.9,
  }

  const multiplier = activityMultipliers[activity as keyof typeof activityMultipliers] || 1.2

  return bmr * multiplier
}

export function calcularPesoIdeal(gender: string, height: number): number {
  // Hamwi formula
  if (gender === "hombre") {
    return 48 + 2.7 * (height / 2.54 - 60)
  } else {
    return 45.5 + 2.2 * (height / 2.54 - 60)
  }
}

export function calcularIMC(weight: number, height: number): number {
  return weight / Math.pow(height / 100, 2)
}

