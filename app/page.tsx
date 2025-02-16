'use client'
// import Image from "next/image";
// import prisma from "./lib/db"
import { useEffect, useState } from "react";

// import ComponentTest from "@/components/ui/component";
import { Calculator } from "lucide-react";
// import Square from "@/components/ui/square";
import { ArrowRight } from 'lucide-react';
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { calcularCalorias } from "@/lib/utils";

const options = ["Peso ideal", "Porcentaje de grasa", "Consumo calórico"]
const activities = ["Sedentario", "Ligero", "Moderado", "Activo", "Muy activo"]
const goals = ["Perder peso", "Mantener peso", "Ganar peso"]

const optionsText = {
  "Peso ideal": "La calculadora de calorías se puede usar para estimar el número de calorías que una persona necesita consumir cada día. Esta calculadora también puede proporcionar algunas directrices simples para ganar o perder peso.",
  "Porcentaje de grasa": "La calculadora de grasa corporal se puede utilizar para estimar su grasa corporal total basada en medidas específicas.",
  "Consumo calórico": "La calculadora de calorías se puede utilizar para estimar el número de calorías que una persona necesita consumir cada día. Esta calculadora también puede proporcionar algunas pautas simples para ganar o perder peso."
}

const activitiesText = {
  "Sedentario": "Poco o ningún ejercicio",
  "Ligero": "Ejercicio ligero (1-3 días a la semana)",
  "Moderado": "Ejercicio moderado (3-5 días a la semana)",
  "Activo": "Ejercicio activo (6-7 días a la semana)",
  "Muy activo": "Ejercicio muy activo (dos veces al día, entrenamientos muy duros)"
}


export default function Page() {

  const [toggle, setToggle] = useState(false)
  const [toggleCalculator, setToggleCalculator] = useState(false)
  const [selected, setSelected] = useState('Peso ideal')
  const [gender, setGender] = useState('hombre')
  const [activity, setActivity] = useState('Sedentario')
  const [goal, setGoal] = useState('Perder peso')
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)

  const [calories, setCalories] = useState(0)


  const handleAge = (e: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    setAge(e.target.value)
  }

  const handleHeight = (e: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    setHeight(e.target.value)
  }

  const handleWeight = (e: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    setWeight(e.target.value)
  }

  useEffect(() => {
    setCalories(calcularCalorias({ goal, activity, age, height, weight, gender }))

  }, [toggleCalculator])



  return (
    <section className="w-full h-dvh p-2"  >
      <section
        className="h-full flex flex-col"
      >
        <div>
          <h1 className="text-2xl font-bold"> Nutrihuaca </h1>
        </div>
        <div className="h-full">
          <AnimatePresence initial={false}>
            {
              !toggle && (
                <div className="h-full md:flex">
                  <motion.div
                    className="h-full w-full md:flex-1"
                    // initial={{ width: '100%' }}
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
                              px-4 py-1 text-balance text-sm flex-1
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
                        <h2 className="text-balance text-4xl text-center font-bold">
                          {selected}
                        </h2>
                        <p className="text-balance text-center text-sm">
                          {optionsText[selected as keyof typeof optionsText]}
                        </p>
                      </div>
                      <div className="flex px-6 py-2.5 rounded-full gap-8 bg-[#5D8736] text-white text-sm justify-center items-center cursor-pointer mt-4 md:hidden" onClick={() => setToggle(!toggle)}>
                        <p>Siguiente</p>
                        <ArrowRight width={16} height={16} />
                      </div>
                    </div>
                  </motion.div>
                  <div className="hidden md:bg-blue-400 md:h-full md:block md:flex-1">
                    asdasd
                  </div>
                </div>
              )
            }
          </AnimatePresence>
          {
            toggle && !toggleCalculator && (
              <motion.div
                className="bg-[#6E8E59] h-full p-2.5 flex flex-col justify-between gap-4"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div className="flex-1 w-full text-white flex flex-col gap-4">
                  <div className="h-[10%]">
                    <p className="font-bold">Parámetros corporales</p>
                  </div>
                  <div className="flex justify-center items-center gap-2 h-[60%]">
                    <motion.div className="px-6 py-4 h-[100%] flex-1 flex justify-center  items-center shadow-lg rounded-lg" onClick={() => setGender('hombre')}
                      animate={{
                        backgroundColor: gender === 'hombre' ? '#000' : '#9DC08B',
                        color: gender === 'hombre' ? 'white' : 'black'
                      }}>
                      <p>Hombre</p>
                    </motion.div>
                    <motion.div className="px-6 py-4 h-[100%] flex-1 flex justify-center items-center   shadow-lg rounded-lg" onClick={() => setGender('mujer')}
                      animate={{
                        backgroundColor: gender === 'mujer' ? '#000' : '#9DC08B',
                        color: gender === 'mujer' ? 'white' : 'black'
                      }}
                    >
                      <p>Mujer</p>
                    </motion.div>
                  </div>
                  <div className="flex gap-2 h-[30%]">
                    <div className="h-[100%] flex flex-1 items-center px-4 py-2 bg-[#9DC08B] rounded-full overflow-hidden">
                      <input
                        type="number"
                        placeholder="Edad"
                        className="w-full text-sm outline-none ring-none"
                        onChange={handleAge}
                      />
                    </div>
                    <div className="h-[100%] flex flex-1 items-center px-4 py-2  bg-[#9DC08B] rounded-full overflow-hidden">
                      <input
                        type="number"
                        placeholder="Peso"
                        className="w-full text-sm outline-none ring-none"
                        onChange={handleWeight}
                      />
                      <p className="text-sm">KG</p>
                    </div>
                    <div className="h-[100%] flex flex-1 items-center px-4 py-2 bg-[#9DC08B] rounded-full overflow-hidden">
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
                <motion.div className="flex-1 w-full flex flex-col gap-8 text-white">
                  <div className="h-[20%]">
                    <h3 className="text-base font-bold">Nivel de actividad</h3>
                    <motion.p className="text-balance text-sm h-[24px]" key={activity} initial={{ x: 20 }} animate={{ x: 0 }} >{activitiesText[activity as keyof typeof activitiesText]}</motion.p>
                  </div>
                  <div className="h-[60%] flex flex-col justify-between gap-2 relative">
                    {
                      activities.map((activity, index) => (
                        <div key={index} className="flex gap-2 z-10" onClick={() => setActivity(activity)}>
                          <div className="w-4 h-4 p-1 bg-white rounded-full">
                            {activity === activity ? <motion.div animate={{ backgroundColor: activity === activity ? '#000' : '#fff' }} className="h-full w-full rounded-full" /> : null}
                          </div>
                          <motion.p className="text-sm" animate={{ x: activity === activity ? 2 : 0 }} transition={{ type: 'spring' }}>{activity}</motion.p>
                        </div>
                      ))
                    }
                  </div>
                </motion.div>
                <motion.div className="flex-1 flex flex-col">
                  <div className="h-[30%] flex justify-center items-center">
                    <h2 className="text-white text-center text-base font-bold">Objetivos</h2>
                  </div>
                  <div className="h-[70%] flex gap-2 justify-center items-center">
                    {
                      goals.map((g) => (
                        <motion.div
                          onClick={() => setGoal(g)}
                          className="h-[80%] flex-1 flex items-center justify-center bg-white px-2 py-1 rounded-lg"
                          key={g}
                          animate={{
                            backgroundColor: g === goal ? '#000' : '#fff',
                            color: g === goal ? '#fff' : '#000'
                          }}
                        >
                          <p className="text-balance text-sm text-center">{g}</p>
                        </motion.div>
                      ))
                    }
                  </div>
                </motion.div>
                <motion.div className="flex-1 flex items-center gap-2">
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center flex-1 h-[60%] bg-white rounded-lg">
                    <p className="text-balance text-base text-center">Limpiar</p>
                  </motion.div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className="flex justify-center items-center flex-1 h-[60%] bg-white rounded-lg">
                    <p className="text-balance text-base text-center" onClick={() => setToggleCalculator(prev => !prev)}>Calcular</  p>
                  </motion.button>
                </motion.div>
              </motion.div>
            )
          }

          {
            toggleCalculator && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.2 }} className="w-full h-full bg-amber-300">
                {selected},
                {activity},
                {goal},
                {gender},
                {age},
                {height},
                {weight},
                <div>
                  <p className="text-2xl font-bold">TIENES QUE CONSUMIR: {calories}</p>
                </div>
              </motion.div>
            )
          }
        </div>
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
