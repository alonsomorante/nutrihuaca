import type React from "react"
import * as motion from "motion/react-client"

type Gender = "hombre" | "mujer";

interface PersonalInfoFormProps {
  gender: Gender
  setGender: (gender: Gender) => void
  handleAge: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleWeight: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleHeight: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  gender,
  setGender,
  handleAge,
  handleWeight,
  handleHeight,
}) => {
  return (
    <motion.div className="flex-1 w-full text-white flex flex-col gap-4">
      <div className="bg-green-light rounded-sm px-4 py-2">
        <p className="font-bold text-center text-sm text-dark">Parámetros corporales</p>
      </div>
      <div className="flex justify-center items-center gap-2 h-[60%]">
        <motion.div
          className="px-6 py-4 h-[100%] flex-1 flex justify-center items-center shadow-lg rounded-lg"
          onClick={() => setGender("hombre")}
          animate={{
            backgroundColor: gender === "hombre" ? "rgb(6, 54, 58)" : "rgb(224, 231, 231)",
            color: gender === "hombre" ? "#fff" : "#000",
            border: `1px solid #06363a`,
          }}
        >
          <p>Hombre</p>
        </motion.div>
        <motion.div
          className="px-6 py-4 h-[100%] flex-1 flex justify-center items-center shadow-lg rounded-lg"
          onClick={() => setGender("mujer")}
          animate={{
            backgroundColor: gender === "mujer" ? "rgb(6, 54, 58)" : "rgb(224, 231, 231)",
            color: gender === "mujer" ? "white" : "black",
          }}
        >
          <p>Mujer</p>
        </motion.div>
      </div>
      <div className="flex gap-2 h-[30%]">
        <div className="h-[100%] flex flex-1 items-center px-4 py-2 bg-light text-black rounded-full overflow-hidden border-black border">
          <input
            type="number"
            placeholder="Edad"
            className="w-full text-sm outline-none ring-none"
            onChange={handleAge}
          />
        </div>
        <div className="h-[100%] flex flex-1 items-center px-4 py-2 bg-light text-black rounded-full overflow-hidden border-black border">
          <input
            type="number"
            placeholder="Peso"
            className="w-full text-sm outline-none ring-none"
            onChange={handleWeight}
          />
          <p className="text-sm">KG</p>
        </div>
        <div className="h-[100%] flex flex-1 items-center px-4 py-2 bg-light text-black rounded-full overflow-hidden border-black border">
          <input
            type="number"
            placeholder="Altura"
            className="w-full text-sm outline-none ring-none"
            onChange={handleHeight}
          />
          <p className="text-sm">CM</p>
        </div>
      </div>
    </motion.div>
  )
}

export default PersonalInfoForm

