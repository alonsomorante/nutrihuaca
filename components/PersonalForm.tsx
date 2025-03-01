import type React from "react"
import * as motion from "motion/react-client"

interface PersonalInfoFormProps {
  gender: string
  setGender: (gender: string) => void
  handleAge: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleWeight: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleHeight: (e: React.ChangeEvent<HTMLInputElement>) => void
  age: number
  height: number
  weight: number
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  gender,
  setGender,
  handleAge,
  handleWeight,
  handleHeight,
  age,
  height,
  weight,
}) => {
  return (
    <div className="w-full flex flex-col gap-3 text-dark">
      <div className="bg-green-light rounded-md px-4 py-2.5">
        <p className="font-bold text-center text-sm text-dark">Parámetros corporales</p>
      </div>

      <div className="flex justify-center items-stretch gap-3 mb-2">
        <motion.button
          className="px-6 py-4 flex-1 flex justify-center items-center shadow-sm rounded-lg font-medium"
          onClick={() => setGender("hombre")}
          animate={{
            backgroundColor: gender === "hombre" ? "rgb(6, 54, 58)" : "rgb(224, 231, 231)",
            color: gender === "hombre" ? "#fff" : "#000",
          }}
          whileHover={{
            scale: gender === "hombre" ? 1 : 1.02,
            backgroundColor: gender === "hombre" ? "rgb(6, 54, 58)" : "rgb(214, 221, 221)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          Hombre
        </motion.button>

        <motion.button
          className="px-6 py-4 flex-1 flex justify-center items-center shadow-sm rounded-lg font-medium"
          onClick={() => setGender("mujer")}
          animate={{
            backgroundColor: gender === "mujer" ? "rgb(6, 54, 58)" : "rgb(224, 231, 231)",
            color: gender === "mujer" ? "#fff" : "#000",
          }}
          whileHover={{
            scale: gender === "mujer" ? 1 : 1.02,
            backgroundColor: gender === "mujer" ? "rgb(6, 54, 58)" : "rgb(214, 221, 221)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          Mujer
        </motion.button>
      </div>

      <div className="flex gap-3">
        <InputField placeholder="Edad" onChange={handleAge} type="number" value={age} />

        <InputField placeholder="Peso" onChange={handleWeight} type="number" suffix="KG" value={weight} />

        <InputField placeholder="Altura" onChange={handleHeight} type="number" suffix="CM" value={height} />
      </div>
    </div>
  )
}

interface InputFieldProps {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  suffix?: string
  value?: number
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, onChange, type, suffix, value }) => (
  <div
    className={`flex-1 flex items-center px-4 py-3 bg-light text-dark rounded-full border transition-all ${value === 0 ? "border-gray-300" : "border-dark/30"} focus-within:border-dark focus-within:ring-1 focus-within:ring-dark/30`}
  >
    <input
      type={type}
      placeholder={placeholder}
      className="w-full text-sm bg-transparent outline-none"
      onChange={onChange}
      min={0}
      defaultValue={value ? value.toString() : ""}
    />
    {suffix && <p className="text-sm font-medium ml-1">{suffix}</p>}
  </div>
)

export default PersonalInfoForm

