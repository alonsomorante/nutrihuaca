'use client'

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"
import { Calculator } from 'lucide-react';


export default function ComponentTest() {

  const [toggle, setToggle] = useState(false)

  return (
    <section className="w-full h-full flex">
      <AnimatePresence initial={false}>
        {!toggle && (
          <motion.div
            className="bg-red-300"
            initial={{ flex: 1, width: 'auto' }}
            transition={{ duration: .2, ease: 'easeOut', type: 'tween' }}
            exit={{ flex: 0, width: 0 }}
          />
        )}
      </AnimatePresence>
      <motion.div className="bg-white flex-1">
        <button className="px-4 py-2 bg-amber-900 text-white" onClick={() => setToggle(!toggle)}>Toggle</button>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum non eos dolor reiciendis consectetur cumque, tempore necessitatibus fugiat asperiores ipsa expedita impedit nobis assumenda doloribus, inventore hic consequatur reprehenderit! Nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero praesentium obcaecati tempora dicta vel ea ut dolorum itaque natus deleniti, accusantium, suscipit, odio facere optio! Magni labore deserunt minus ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam, vel fuga qui sed assumenda iure eos sunt iusto neque quod hic aliquid doloribus nihil rem vero asperiores dolorum illum.</p>
        <Calculator />
      </motion.div>
      {toggle && (
        <motion.div
          className="bg-amber-600 flex-1 h-auto"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          transition={{ duration: 0.2, type: 'tween' }}
        >
        </motion.div>
      )}

    </section >
  )
}
