import type React from "react"
import * as motion from "motion/react-client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface OptionSelectorProps {
  options: string[]
  selected: string
  setSelected: (option: string) => void
  optionsText: Record<string, string>
  onNext: () => void
}

const OptionSelector: React.FC<OptionSelectorProps> = ({ options, selected, setSelected, optionsText, onNext }) => {
  return (
    <div className="h-full flex flex-col gap-6 p-4 justify-between items-center">
      <div className="flex justify-center items-center p-6">
        <Image
          src="/nutrihuaca-logo.webp"
          width={140}
          height={140}
          alt="Nutrihuaca Logo"
          className="object-contain mx-auto"
          priority
        />
      </div>

      <div className="flex gap-2 w-full">
        {options.map((option) => (
          <motion.button
            key={option}
            initial={false}
            animate={{
              backgroundColor: selected === option ? "rgb(6, 54, 58)" : "rgb(224, 231, 231)",
              color: selected === option ? "#fff" : "#000",
              border: `1px solid ${selected === option ? "#06363a" : "transparent"}`,
            }}
            whileHover={{
              scale: selected === option ? 1 : 1.02,
              backgroundColor: selected === option ? "rgb(6, 54, 58)" : "rgb(214, 221, 221)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-balance text-sm flex-1 rounded-lg shadow-sm font-medium"
            onClick={() => setSelected(option)}
            transition={{ duration: 0.15 }}
          >
            {option}
          </motion.button>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-5 bg-light rounded-lg p-5 w-full">
        <h2 className="text-balance text-2xl text-center font-bold text-dark">{selected}</h2>
        <p className="text-balance text-center text-dark/80 text-sm">{optionsText[selected]}</p>

        <motion.button
          className="w-[70%] mx-auto flex px-6 py-3 rounded-full gap-2 bg-dark text-white text-sm justify-center items-center cursor-pointer mt-4"
          onClick={onNext}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <p className="font-medium">Siguiente</p>
          <ArrowRight width={16} height={16} />
        </motion.button>
      </div>

      <NavFooter />
    </div>
  )
}

const NavFooter = () => (
  <div className="w-full py-2">
    <ul className="flex justify-center w-full gap-6 font-medium text-dark">
      <li className="cursor-pointer hover:text-primary transition-colors">Calculadoras</li>
      <li className="cursor-pointer hover:text-primary transition-colors">Recetas</li>
      <li className="cursor-pointer hover:text-primary transition-colors">Tabla</li>
    </ul>
  </div>
)

export default OptionSelector

