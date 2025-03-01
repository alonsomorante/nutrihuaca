import type React from "react"
import * as motion from "motion/react-client"
import { ArrowLeft } from "lucide-react"
import { calcularCalorias } from "@/lib/utils"

interface ResultsDisplayProps {
  calculationType: string
  formData: {
    gender: string
    activity: string
    goal: string
    age: number
    height: number
    weight: number
  }
  onBack: () => void
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ calculationType, formData, onBack }) => {
  // Calculate results based on the selected calculator type
  const calories = calcularCalorias(formData)

  // Calculate BMI
  const bmi = formData.weight / Math.pow(formData.height / 100, 2)
  const bmiCategory = getBmiCategory(bmi)

  // Calculate ideal weight (Hamwi formula)
  const baseWeight =
    formData.gender === "hombre" ? 48 + 2.7 * (formData.height / 2.54 - 60) : 45.5 + 2.2 * (formData.height / 2.54 - 60)

  return (
    <motion.div
      className="h-screen bg-white p-4 flex flex-col gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center">
        <motion.button
          onClick={onBack}
          className="p-2 rounded-full bg-light"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} className="text-dark" />
        </motion.button>
        <h2 className="text-xl font-bold text-dark text-center flex-1">Resultados</h2>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <ResultCard
          title="Información Personal"
          items={[
            { label: "Género", value: formData.gender === "hombre" ? "Hombre" : "Mujer" },
            { label: "Edad", value: `${formData.age} años` },
            { label: "Peso", value: `${formData.weight} kg` },
            { label: "Altura", value: `${formData.height} cm` },
          ]}
        />

        {calculationType === "Peso ideal" && (
          <ResultCard
            title="Peso Ideal"
            items={[
              { label: "Peso ideal estimado", value: `${baseWeight.toFixed(1)} kg` },
              {
                label: "Rango saludable",
                value: `${(baseWeight * 0.9).toFixed(1)} - ${(baseWeight * 1.1).toFixed(1)} kg`,
              },
            ]}
            highlight
          />
        )}

        {calculationType === "Porcentaje de grasa" && (
          <ResultCard
            title="Índice de Masa Corporal (IMC)"
            items={[
              { label: "IMC", value: `${bmi.toFixed(1)} kg/m²` },
              { label: "Categoría", value: bmiCategory },
            ]}
            highlight
          />
        )}

        {calculationType === "Consumo calórico" && (
          <ResultCard
            title="Calorías Diarias"
            items={[
              { label: "Metabolismo basal", value: `${(calories / 1.2).toFixed(0)} kcal` },
              { label: "Mantenimiento", value: `${calories.toFixed(0)} kcal` },
              {
                label:
                  formData.goal === "Perder peso"
                    ? "Para perder peso"
                    : formData.goal === "Ganar peso"
                      ? "Para ganar peso"
                      : "Para mantener peso",
                value: `${getGoalCalories(calories, formData.goal)} kcal`,
              },
            ]}
            highlight
          />
        )}

        <div className="mt-auto">
          <p className="text-sm text-dark/70 text-center">
            Estos resultados son estimaciones basadas en fórmulas estándar y pueden variar según factores individuales.
          </p>
        </div>
      </div>

      <NavFooter />
    </motion.div>
  )
}

interface ResultCardProps {
  title: string
  items: { label: string; value: string }[]
  highlight?: boolean
}

const ResultCard: React.FC<ResultCardProps> = ({ title, items, highlight }) => (
  <motion.div
    className={`p-4 rounded-lg ${highlight ? "bg-dark text-white" : "bg-light text-dark"}`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className={`text-lg font-bold mb-3 ${highlight ? "text-white" : "text-dark"}`}>{title}</h3>
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <p className={`${highlight ? "text-white/80" : "text-dark/70"}`}>{item.label}</p>
          <p className="font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  </motion.div>
)

const NavFooter = () => (
  <div className="w-full py-3 border-t border-gray-100">
    <ul className="flex justify-center w-full gap-6 font-medium text-dark">
      <li className="cursor-pointer hover:text-primary transition-colors">Calculadoras</li>
      <li className="cursor-pointer hover:text-primary transition-colors">Recetas</li>
      <li className="cursor-pointer hover:text-primary transition-colors">Tabla</li>
    </ul>
  </div>
)

// Helper functions
function getBmiCategory(bmi: number): string {
  if (bmi < 18.5) return "Bajo peso"
  if (bmi < 25) return "Peso normal"
  if (bmi < 30) return "Sobrepeso"
  if (bmi < 35) return "Obesidad grado I"
  if (bmi < 40) return "Obesidad grado II"
  return "Obesidad grado III"
}

function getGoalCalories(calories: number, goal: string): string {
  if (goal === "Perder peso") return (calories * 0.8).toFixed(0)
  if (goal === "Ganar peso") return (calories * 1.15).toFixed(0)
  return calories.toFixed(0)
}

export default ResultsDisplay

