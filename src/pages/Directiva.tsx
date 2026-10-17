import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Quote, History } from 'lucide-react'

type Miembro = { cargo: string; nombre: string; foto: string }

type Directiva = {
  anio: string
  mensaje: string
  miembros: Miembro[] // el primero es la cabeza de la directiva
}

// ✏️ LISTA DE DIRECTIVAS
// La primera de la lista (la de arriba) es siempre la ACTUAL.
// Cuando entre una nueva directiva, copia un bloque, ponlo ARRIBA y cambia los datos.
const directivas: Directiva[] = [
  {
    anio: '2026',
    mensaje:
      'Trabajamos con compromiso y cariño para que Tapay Thika siga difundiendo nuestra cultura, llevando nuestras danzas a más escenarios y manteniendo viva la unión de nuestra familia.',
    miembros: [
      { cargo: 'Presidenta', nombre: 'Nombre Apellido', foto: '/images/directiva/2026/presidenta.jpg' },
      { cargo: 'Vicepresidenta', nombre: 'Nombre Apellido', foto: '/images/directiva/2026/vicepresidenta.jpg' },
      { cargo: 'Secretaria', nombre: 'Nombre Apellido', foto: '/images/directiva/2026/secretaria.jpg' },
      { cargo: 'Tesorero', nombre: 'Nombre Apellido', foto: '/images/directiva/2026/tesorero.jpg' },
      { cargo: 'Vocal', nombre: 'Nombre Apellido', foto: '/images/directiva/2026/vocal.jpg' },
    ],
  },
  {
    anio: '2025',
    mensaje: 'Un año de crecimiento y de muchas presentaciones que recordaremos siempre.',
    miembros: [
      { cargo: 'Presidente', nombre: 'Nombre Apellido', foto: '/images/directiva/2025/presidente.jpg' },
      { cargo: 'Vicepresidenta', nombre: 'Nombre Apellido', foto: '/images/directiva/2025/vicepresidenta.jpg' },
      { cargo: 'Secretario', nombre: 'Nombre Apellido', foto: '/images/directiva/2025/secretario.jpg' },
      { cargo: 'Tesorera', nombre: 'Nombre Apellido', foto: '/images/directiva/2025/tesorera.jpg' },
      { cargo: 'Vocal', nombre: 'Nombre Apellido', foto: '/images/directiva/2025/vocal.jpg' },
    ],
  },
]

function Avatar({ foto, cargo, clase }: { foto: string; cargo: string; clase: string }) {
  const [error, setError] = useState(false)

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-yellow-500 bg-zinc-800 ${clase}`}
    >
      {error ? (
        <User className="h-1/2 w-1/2 text-zinc-500" />
      ) : (
        <img
          src={foto}
          alt={cargo}
          onError={() => setError(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  )
}

export default function Directiva() {
  const actual = directivas[0]
  const anteriores = directivas.slice(1)
  const [anioSel, setAnioSel] = useState(anteriores[0]?.anio ?? '')
  const seleccionada = anteriores.find((d) => d.anio === anioSel)

  const [cabeza, ...equipo] = actual.miembros

  return (
    <div className="flex-1">
      {/* ENCABEZADO */}
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-yellow-500">NUESTRA DIRECTIVA</p>
          <h1 className="text-4xl italic text-white md:text-6xl">
            Directiva{' '}
            <span className="text-7xl font-bold text-yellow-500 md:text-9xl">{actual.anio}</span>
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-yellow-500" />
          <div className="mx-auto mt-8 flex max-w-2xl gap-3 text-left">
            <Quote className="mt-1 shrink-0 text-yellow-500" size={28} />
            <p className="text-lg italic text-gray-300">{actual.mensaje}</p>
          </div>
        </motion.div>
      </section>

      {/* CABEZA DE LA DIRECTIVA */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-8 rounded-2xl border border-yellow-600/40 bg-gradient-to-br from-zinc-900 to-black p-8 md:flex-row md:p-12"
        >
          <Avatar foto={cabeza.foto} cargo={cabeza.cargo} clase="h-48 w-48 md:h-56 md:w-56 border-4" />
          <div className="text-center md:text-left">
            <p className="text-sm tracking-[0.3em] text-yellow-500">{cabeza.cargo.toUpperCase()}</p>
            <h2 className="mt-2 text-3xl italic text-white md:text-5xl">{cabeza.nombre}</h2>
            <div className="mx-auto my-5 h-px w-16 bg-yellow-500 md:mx-0" />
            <p className="max-w-md text-gray-300">
              Liderando a Tapay Thika durante {actual.anio}, con el compromiso de seguir llevando
              nuestra cultura a cada escenario.
            </p>
          </div>
        </motion.div>
      </section>

      {/* EQUIPO DEL AÑO */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {equipo.map((m, i) => (
            <motion.div
              key={m.cargo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <Avatar foto={m.foto} cargo={m.cargo} clase="h-36 w-36" />
              <p className="mt-4 text-xs tracking-[0.2em] text-yellow-500">
                {m.cargo.toUpperCase()}
              </p>
              <p className="mt-1 text-white">{m.nombre}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIRECTIVAS ANTERIORES */}
      {anteriores.length > 0 && (
        <section className="mt-12 border-t border-yellow-600/30 bg-zinc-950 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-3 flex items-center justify-center gap-3">
              <History className="text-yellow-500" size={26} />
              <h2 className="text-2xl italic text-white">Directivas anteriores</h2>
            </div>
            <p className="mx-auto mb-8 max-w-md text-center text-gray-400">
              Gracias a quienes antes que nosotros hicieron crecer Tapay Thika.
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {anteriores.map((d) => (
                <button
                  key={d.anio}
                  type="button"
                  onClick={() => setAnioSel(d.anio)}
                  className={`rounded-full border px-6 py-2 transition ${
                    anioSel === d.anio
                      ? 'border-yellow-500 bg-yellow-500 font-semibold text-black'
                      : 'border-yellow-600/50 text-white hover:border-yellow-500 hover:text-yellow-500'
                  }`}
                >
                  {d.anio}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {seleccionada && (
                <motion.div
                  key={seleccionada.anio}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="mx-auto mb-10 max-w-xl text-center italic text-gray-300">
                    “{seleccionada.mensaje}”
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
                    {seleccionada.miembros.map((m) => (
                      <div key={m.cargo} className="flex flex-col items-center text-center">
                        <Avatar foto={m.foto} cargo={m.cargo} clase="h-24 w-24" />
                        <p className="mt-3 text-xs tracking-[0.15em] text-yellow-500">
                          {m.cargo.toUpperCase()}
                        </p>
                        <p className="mt-1 text-sm text-gray-300">{m.nombre}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      )}
    </div>
  )
}