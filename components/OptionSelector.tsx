import type React from "react"
import * as motion from "motion/react-client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import NutrihuacaLogo from '@/public/nutrihuaca-logo.webp'


interface OptionSelectorProps {
  options: string[]
  selected: string
  setSelected: (option: string) => void
  optionsText: Record<string, string>
  setToggle: (toggle: boolean) => void
}   
 
const OptionSelector: React.FC<OptionSelectorProps> = ({ options, selected, setSelected, optionsText, setToggle }) => {
  return (
    <div className="h-full flex flex-col gap-4 p-2 justify-between items-center">
        <div className="flex justify-center items-center p-8">
            <Image src={NutrihuacaLogo} width={120} height={120} alt="nutrihuaca" className="object-center object-contain mx-auto"/>
        </div>
      <div className="flex mb-4 gap-1">
        {options.map((option) => (
          <motion.button
            key={option}
            initial={false}
            animate={{
              backgroundColor: selected === option ? "rgb(6, 54, 58)" : "rgb(224, 231, 231)",
              color: selected === option ? "#fff" : "#000",
              border: `1px solid #06363a`,
            }}
            className="px-4 py-1 text-balance text-sm flex-1 rounded-lg shadow-lg"
            onClick={() => setSelected(option)}
          >
            <p>{option}</p>
          </motion.button>
        ))}
      </div>
      <div className="flex flex-col gap-4 bg-light box-border text-dark rounded-lg p-4">
        <h2 className="text-balance text-2xl text-center font-bold">{selected}</h2>
        <p className="text-balance text-center text-xs">{optionsText[selected]}</p>
        <div
          className="w-[60%] mx-auto flex px-6 py-2.5 rounded-full gap-2 bg-dark text-white text-sm justify-center items-center cursor-pointer mt-4 md:hidden"
          onClick={() => setToggle(true)}
        >
          <p>Siguiente</p>
          <ArrowRight width={16} height={16} />
        </div>
      </div>
      <div className="w-full py-2">
        <ul className="flex justify-center w-full gap-4 font-bold text-dark">
        <li>
            Calculadoras
        </li>
        <li>
            Recetas
        </li>
        <li>
            Tabla
        </li>
        </ul>
      </div>
    </div>
  )
}

export default OptionSelector

