type Gender = "hombre" | "mujer";
type Activity = "Sedentario" | "Ligero" | "Moderado" | "Activo" | "Muy activo";
type Goal = "Perder peso" | "Mantener peso" | "Ganar peso";

// interface CalorieResult {
//     calorias: number;
//     deficit?: number;
//     superavit?: number;
// }

export function calculateCalories(
   { gender,
    activity,
    goal,
    age,
    height,
    weight } : 
    { 
      gender: Gender,
      activity: Activity,
      goal: Goal,
      age: number,
      height: number,
      weight: number
    }
) {
    // Calcular BMR usando Harris-Benedict
    let bmr: number;
    if (gender === "hombre") {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }

    // Factor de actividad física
    const activityFactors: Record<Activity, number> = {
        Sedentario: 1.2,
        Ligero: 1.375,
        Moderado: 1.55,
        Activo: 1.725,
        "Muy activo": 1.9,
    };
    const activityFactor = activityFactors[activity] || 1.2;

    const tdee = bmr * activityFactor; // Gasto calórico diario

    // Calcular los escenarios según el objetivo
    if (goal === "Perder peso") {
        return [
             {
                weightPerWeek: "Perder 0.25 kg/semana",
                calorias: Math.round(tdee - 250),
                deficit: 250,
                dificultad: "Fácil"
            },
             {
                weightPerWeek: "Perder 0.5 kg/semana",
                calorias: Math.round(tdee - 500),
                deficit: 500,
                dificultad: "Moderado"
            },
             {
                weightPerWeek: "Perder 0.75 kg/semana",
                calorias: Math.round(tdee - 750),
                deficit: 750,
                dificultad: "Desafiante"
            },
            {
                weightPerWeek: "Perder 1 kg/semana",
                calorias: Math.round(tdee - 1000),
                deficit: 1000,
                dificultad: "Intenso"
            },
        ];
    } else if (goal === "Ganar peso") {
        return [
             {
                weightPerWeek: "Ganar 0.25 kg/semana",
                calorias: Math.round(tdee + 250),
                superavit: 250,
                dificultad: "Fácil",
            },
            {
                weightPerWeek: "Ganar 0.5 kg/semana",
                calorias: Math.round(tdee + 500),
                superavit: 500,
                dificultad: "Moderado"
            },
             {
              weightPerWeek: "Ganar 0.75 kg/semana",
              calorias: Math.round(tdee + 500),
              superavit: 500,
              dificultad: "Desafiante"
            },
            {
                weightPerWeek: "Ganar 1 kg/semana",
                calorias: Math.round(tdee + 1000),
                superavit: 1000,
                dificultad: "Intenso",
            },
        ];
    } else {
        return [
            {
                weightPerWeek: "Mantener peso",
                calorias: Math.round(tdee),
                deficit: 0,
            },
          ]
    }
}

