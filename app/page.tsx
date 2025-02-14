'use client'
// import Image from "next/image";
// import prisma from "./lib/db"
import { useState } from "react";

// import ComponentTest from "@/components/ui/component";
import { Calculator } from "lucide-react";
// import Square from "@/components/ui/square";
import { ArrowRight } from 'lucide-react';
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"


const options = ["Peso ideal", "Porcentaje de grasa", "Consumo calórico"]

const optionsText = {
  "Peso ideal": "La calculadora de calorías se puede usar para estimar el número de calorías que una persona necesita consumir cada día. Esta calculadora también puede proporcionar algunas directrices simples para ganar o perder peso.",
  "Porcentaje de grasa": "La calculadora de grasa corporal se puede utilizar para estimar su grasa corporal total basada en medidas específicas.",
  "Consumo calórico": "La calculadora de calorías se puede utilizar para estimar el número de calorías que una persona necesita consumir cada día. Esta calculadora también puede proporcionar algunas pautas simples para ganar o perder peso."
}


export default function Page() {

  const [toggle, setToggle] = useState(false)
  const [selected, setSelected] = useState('Peso ideal')

  

  return (
    <section className="w-full h-screen p-2"  >
      <section
        className="h-full flex flex-col"
      >
        <div>
          <h1 className="text-2xl font-bold"> Nutrihuaca </h1>
        </div>
       
        <AnimatePresence initial={false}>
          {
            !toggle && (
              <motion.div
                className="h-full"
                initial={{ width: '100%' }}
                exit={{ width: 0 }}
                transition={{ duration: 0 }}
              >
                <div className="h-full flex flex-col gap-4 justify-center items-center">
                  <div className="flex mb-4">
                    {options.map((option) => (
                      <motion.button
                        key={option}
                        initial={false}
                        animate={{
                          backgroundColor:
                          selected === option ? "#5D8736" : "#eee0",
                          color: selected === option ? "#fff" : "#000",
                          border: `1px solid #5D8736`
                        }}
                        className={`
                          px-4 py-1 text-balance text-sm
                        `}
                        onClick={() => setSelected(option)}
                      >
                        <p>{option}</p>
                      </motion.button>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-center items-center">
                      <Calculator width={36} height={36} stroke="#809D3C" />
                    </div>
                    <h2 className="text-balance text-4xl text-center font-bold leading-8">
                      {selected}
                    </h2>
                    <p className="text-balance text-center text-sm">
                      {optionsText[selected as keyof typeof optionsText]}
                    </p>
                  </div>
                  <div className="flex px-6 py-2.5 rounded-full gap-8 bg-[#5D8736] text-white text-sm justify-center items-center cursor-pointer mt-4" onClick={() => setToggle(!toggle)}>
                    <p>Siguiente</p>
                    <ArrowRight width={16} height={16} />
                  </div>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence>
        {
          toggle && (
            <motion.div
              className="bg-red-300 h-full p-2.5"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: .2, ease: 'easeInOut', type: 'tween' }}
            >
              <div className="w-full">
                <div>
                  <p>Parámetros corporales</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-6 py-4 bg-[#5D8736] text-white flex-1 flex justify-center items-center">
                    <p>Hombre</p>
                  </div>
                  <div className="px-6 py-4 bg-[#5D8736] text-white flex-1 flex justify-center items-center">
                    <p>Mujer</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full">
                  <div className="flex-1 bg-red-800">
                    <input type="text" className="w-full py-1 px-1.5 text-sm" />
                  </div>
                  <div className="flex-1 bg-red-800">
                    <input type="text" className="w-full py-1 px-1.5 text-sm" />
                  </div>
                  <div className="flex-1 bg-red-800">
                    <input type="text" className="w-full py-1 px-1.5 text-sm" />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div>
                  <h3>Nivel de actividad</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>

                </div>
              </div>
            </motion.div>
          )
        }
        <div>
          <ul className="flex text-sm gap-4 font-bold">
            <li>Calculadoras</li>
            <li>Recetas</li>
            <li>Tabla</li>
          </ul>
        </div>
      </section>

    </section>
  )
} 
