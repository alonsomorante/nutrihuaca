'use client'
// import Image from "next/image";
// import prisma from "./lib/db"
import { useEffect, useState } from "react";

// import ComponentTest from "@/components/ui/component";
// import Square from "@/components/ui/square";
import { ArrowRight } from 'lucide-react';
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { calcularCalorias } from "@/lib/utils";
import NutrihuacaLogo from '@/public/nutrihuaca-logo.webp'
import Image from "next/image";

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
    <section className="w-full h-dvh p-2 bg-green-dark text-white"  >
      <section
        className="h-full flex flex-col"
      >
        {
          !toggle && (
            <div className="w-full flex justify-center items-center">
              <Image src={NutrihuacaLogo} alt="nutrihuaca" className="object-center object-contain w-[50%] h-[50%] mx-auto" />
            </div>
          )
        }
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
                      <div className="flex mb-4 gap-1">
                        {options.map((option) => (
                          <motion.button
                            key={option}
                            initial={false}
                            animate={{
                              backgroundColor:
                                selected === option ? 'rgb(6, 54, 58)' : 'rgb(224, 231, 231)',
                              color: selected === option ? "#fff" : "#000",
                              border: `1px solid #06363a`
                            }}
                            className={`
                              px-4 py-1 text-balance text-sm flex-1 rounded-lg shadow-lg
                            `}
                            onClick={() => setSelected(option)}
                          >
                            <p>{option}</p>
                          </motion.button>
                        ))}
                      </div>
                      <div className="flex flex-col gap-4 bg-light box-border text-dark rounded-lg p-4">
                        <h2 className="text-balance text-4xl text-center font-bold">
                          {selected}
                        </h2>
                        <p className="text-balance text-center text-sm">
                          {optionsText[selected as keyof typeof optionsText]}
                        </p>
                      </div>
                      <div className="flex px-6 py-2.5 rounded-full gap-8 bg-dark text-white text-sm justify-center items-center cursor-pointer mt-4 md:hidden" onClick={() => setToggle(!toggle)}>
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
                className="h-full p-2.5 flex flex-col justify-between gap-4"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div className="flex-1 w-full text-white flex flex-col gap-4">
                  <div className="bg-green-light rounded-sm px-4 py-2">
                    <p className="font-bold text-center text-sm text-dark">Parámetros corporales</p>
                  </div>
                  <div className="flex justify-center items-center gap-2 h-[60%]">
                    <motion.div className="px-6 py-4 h-[100%] flex-1 flex justify-center  items-center shadow-lg rounded-lg" onClick={() => setGender('hombre')}
                      animate={{
                        backgroundColor:
                          gender === 'hombre' ? 'rgb(6, 54, 58)' : 'rgb(224, 231, 231)',
                        color: gender === 'hombre' ? "#fff" : "#000",
                        border: `1px solid #06363a`
                      }}>
                      <p>Hombre</p>
                    </motion.div>
                    <motion.div className="px-6 py-4 h-[100%] flex-1 flex justify-center items-center   shadow-lg rounded-lg" onClick={() => setGender('mujer')}
                      animate={{
                        backgroundColor: gender === 'mujer' ? 'rgb(6, 54, 58)' : 'rgb(224, 231, 231)',
                        color: gender === 'mujer' ? 'white' : 'black'
                      }}
                    >
                      <p>Mujer</p>
                    </motion.div>
                  </div>
                  <div className="flex gap-2 h-[30%]">
                    <div className="h-[100%] flex flex-1 items-center px-4 py-2 bg-light text-black rounded-full overflow-hidden border-black border ">
                      <input
                        type="number"
                        placeholder="Edad"
                        className="w-full text-sm outline-none ring-none"
                        onChange={handleAge}
                      />
                    </div>
                    <div className="h-[100%] flex flex-1 items-center px-4 py-2  bg-light text-black rounded-full overflow-hidden border-black border ">
                      <input
                        type="number"
                        placeholder="Peso"
                        className="w-full text-sm outline-none ring-none"
                        onChange={handleWeight}
                      />
                      <p className="text-sm">KG</p>
                    </div>
                    <div className="h-[100%] flex flex-1 items-center px-4 py-2 bg-light text-black rounded-full overflow-hidden border-black border ">
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

                  <div className="bg-green-light rounded-sm px-4 py-2">
                    <p className="font-bold text-sm text-center text-dark">Selecciona tu nivel de actividad</p>
                  </div>
                  <div className="h-[60%] flex flex-col justify-between gap-2 relative">
                    {
                      activities.map((a, index) => (
                        <motion.div key={index}
                          className="flex gap-2 z-10 bg-light p-2 rounded-lg text-sm items-center"
                          onClick={() => setActivity(a)}
                          animate={{
                            backgroundColor:
                              a === activity ? 'rgb(6, 54, 58)' : 'rgb(224, 231, 231)',
                            color:
                              a === activity ? 'rgb(255, 255, 255)' : 'rgb(6, 54, 58)'
                          }}

                        >
                          <motion.div
                            className="w-4 h-4 rounded-full opacity-80 flex justify-center items-center"
                            animate={{
                              backgroundColor:
                                a === activity ? 'rgb(174, 221, 200)' : 'rgb(224, 231, 231)'
                            }}
                          >
                            {a === activity && <motion.div className="w-2 h-2 opacity-80 bg-dark rounded-full " />}
                            {/* <div className="w-3 h-3 bg-dark rounded-full " /> */}
                          </motion.div>
                          <p className="font-bold">{a}</p>
                        </motion.div>
                      ))
                    }
                  </div>
                  <div className="h-[20%]">
                    <motion.p className="text-balance text-center opacity-70 text-dark text-sm h-[24px]" key={activity} initial={{ x: 20 }} animate={{ x: 0 }} >{activitiesText[activity as keyof typeof activitiesText]}</motion.p>
                  </div>
                </motion.div>
                <motion.div className="flex-1 flex flex-col">
                  <div className="bg-green-light rounded-sm px-4 py-2">
                    <p className="font-bold text-center text-sm text-dark">¿Cuál es tu objetivo?</p>
                  </div>
                  <div className="h-[70%] flex gap-2 justify-center items-center">
                    {
                      goals.map((g) => (
                        <motion.div
                          onClick={() => setGoal(g)}
                          className="h-[80%] flex-1 flex items-center justify-center bg-light p-2 rounded-lg"
                          key={g}
                          animate={{
                            backgroundColor: g === goal ? 'rgb(6, 54, 58)' : 'rgb(224, 231, 231)',
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
        {/* <div>
          <ul className="w-full h-full bg-blue-500 flex text-sm gap-4 font-bold items-center justify-center">
            <li>Calculadoras</li>
            <li>Recetas</li>
            <li>Tabla</li>
          </ul>
        </div> */}
      </section>

    </section>
  )
} 
