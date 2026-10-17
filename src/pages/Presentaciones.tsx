import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react'

type Categoria = 'Concursos' | 'Festivales' | 'Escenarios' | 'Eventos'

type Foto = {
  src: string
  titulo: string
  categoria: Categoria
  anio: string
  lugar: string
  descripcion: string
  forma: 'alta' | 'ancha' | 'cuadrada'
}

// ✏️ CAMBIA estos logros por los reales
const logros = [
  {
    puesto: '1.er lugar',
    concurso: 'Concurso Regional de Danzas',
    anio: '2024',
    foto: '/images/presentaciones/logro1.jpg',
  },
  {
    puesto: '2.º lugar',
    concurso: 'Festival Folklórico Provincial',
    anio: '2023',
    foto: '/images/presentaciones/logro2.jpg',
  },
  {
    puesto: '1.er lugar',
    concurso: 'Encuentro de Danzas Tradicionales',
    anio: '2022',
    foto: '/images/presentaciones/logro3.jpg',
  },
]

// ✏️ CAMBIA títulos, años, lugares y descripciones. Puedes agregar o borrar fotos.
const fotos: Foto[] = [
  {
    src: '/images/presentaciones/festivales.jpg',
    titulo: 'Festival cultural',
    categoria: 'Festivales',
    anio: '2024',
    lugar: 'Colca',
    descripcion: 'Una de nuestras presentaciones más queridas, en medio de la fiesta del pueblo.',
    forma: 'alta',
  },
  {
    src: '/images/presentaciones/escenarios.jpg',
    titulo: 'Gran noche en escenario',
    categoria: 'Escenarios',
    anio: '2024',
    lugar: 'Arequipa',
    descripcion: 'Luces, música y todo el color de nuestra vestimenta sobre el escenario.',
    forma: 'ancha',
  },
  {
    src: '/images/presentaciones/eventos.jpg',
    titulo: 'Evento local',
    categoria: 'Eventos',
    anio: '2023',
    lugar: 'Plaza Principal',
    descripcion: 'Bailando junto a nuestra comunidad en una celebración local.',
    forma: 'cuadrada',
  },
  {
    src: '/images/presentaciones/encuentros.jpg',
    titulo: 'Encuentro folklórico',
    categoria: 'Concursos',
    anio: '2023',
    lugar: 'Chivay',
    descripcion: 'Compartiendo escenario con otras agrupaciones de la región.',
    forma: 'ancha',
  },
  {
    src: '/images/presentaciones/regionales.jpg',
    titulo: 'Festival regional',
    categoria: 'Festivales',
    anio: '2022',
    lugar: 'Arequipa',
    descripcion: 'Representando a nuestro distrito en un festival regional.',
    forma: 'alta',
  },
  {
    src: '/images/presentaciones/mas.jpg',
    titulo: 'Y muchos momentos más',
    categoria: 'Eventos',
    anio: '2022',
    lugar: 'Colca',
    descripcion: 'Cada presentación nos deja un recuerdo inolvidable.',
    forma: 'cuadrada',
  },
]

const filtros: ('Todas' | Categoria)[] = ['Todas', 'Concursos', 'Festivales', 'Escenarios', 'Eventos']

const alturas = {
  alta: 'aspect-[3/4]',
  ancha: 'aspect-[4/3]',
  cuadrada: 'aspect-square',
}

export default function Presentaciones() {
  const [filtro, setFiltro] = useState<'Todas' | Categoria>('Todas')
  const [indice, setIndice] = useState<number | null>(null)

  const visibles = filtro === 'Todas' ? fotos : fotos.filter((f) => f.categoria === filtro)

  function siguiente() {
    setIndice((i) => (i === null ? null : (i + 1) % visibles.length))
  }
  function anterior() {
    setIndice((i) => (i === null ? null : (i - 1 + visibles.length) % visibles.length))
  }

  useEffect(() => {
    if (indice === null) return
    function teclas(e: KeyboardEvent) {
      if (e.key === 'Escape') setIndice(null)
      if (e.key === 'ArrowRight') siguiente()
      if (e.key === 'ArrowLeft') anterior()
    }
    window.addEventListener('keydown', teclas)
    return () => window.removeEventListener('keydown', teclas)
  }, [indice, visibles.length])

  const actual = indice !== null ? visibles[indice] : null

  return (
    <div className="flex-1">
      {/* ENCABEZADO */}
      <section className="mx-auto max-w-7xl px-6 pb-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-yellow-500">NUESTRAS PRESENTACIONES</p>
          <h1 className="text-4xl italic text-white md:text-6xl">
            Llevamos nuestra cultura <br />
            <span className="text-yellow-500">a cada escenario</span>
          </h1>
          <p className="mt-6 max-w-xl text-gray-300">
            Estos son algunos de los momentos y logros que nos llenan de orgullo.
          </p>
        </motion.div>
      </section>

      {/* LOGROS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-center gap-3">
          <Trophy className="text-yellow-500" size={28} />
          <h2 className="text-2xl italic text-white">Logros y concursos ganados</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {logros.map((l, i) => (
            <motion.div
              key={l.concurso}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative h-80 overflow-hidden rounded-xl border border-yellow-600/40 bg-zinc-800"
            >
              <img
                src={l.foto}
                alt={l.concurso}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-3xl font-bold italic text-yellow-500">{l.puesto}</p>
                <p className="mt-1 text-white">{l.concurso}</p>
                <p className="text-sm text-gray-400">{l.anio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8">
        <div className="mb-8 flex flex-wrap gap-3">
          {filtros.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFiltro(f)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                filtro === f
                  ? 'border-yellow-500 bg-yellow-500 font-semibold text-black'
                  : 'border-yellow-600/50 text-white hover:border-yellow-500 hover:text-yellow-500'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {visibles.length === 0 && (
          <p className="py-16 text-center text-gray-400">Pronto agregaremos más fotos aquí.</p>
        )}

        <div key={filtro} className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visibles.map((f, i) => (
            <motion.button
              key={f.src}
              type="button"
              onClick={() => setIndice(i)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-yellow-600/30 bg-zinc-800 ${alturas[f.forma]}`}
            >
              <img
                src={f.src}
                alt={f.titulo}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 text-left opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="text-xs tracking-[0.2em] text-yellow-500">
                  {f.categoria.toUpperCase()} · {f.anio}
                </p>
                <p className="mt-1 text-lg text-white">{f.titulo}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* VISOR EN GRANDE */}
      <AnimatePresence>
        {actual && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndice(null)}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 p-4 md:p-8"
          >
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setIndice(null)}
              className="absolute right-5 top-5 text-white hover:text-yellow-500"
            >
              <X size={36} />
            </button>

            {visibles.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Anterior"
                  onClick={(e) => {
                    e.stopPropagation()
                    anterior()
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-yellow-500 bg-black/60 p-2 text-yellow-500 hover:bg-yellow-500 hover:text-black md:left-8"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  type="button"
                  aria-label="Siguiente"
                  onClick={(e) => {
                    e.stopPropagation()
                    siguiente()
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-yellow-500 bg-black/60 p-2 text-yellow-500 hover:bg-yellow-500 hover:text-black md:right-8"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <div onClick={(e) => e.stopPropagation()} className="flex max-h-full flex-col items-center">
              <img
                key={actual.src}
                src={actual.src}
                alt={actual.titulo}
                className="max-h-[70vh] max-w-full rounded-lg border border-yellow-600/40 object-contain"
              />
              <div className="mt-5 max-w-xl text-center">
                <p className="text-xs tracking-[0.3em] text-yellow-500">
                  {actual.categoria.toUpperCase()}
                </p>
                <h3 className="mt-1 text-2xl italic text-white">{actual.titulo}</h3>
                <p className="mt-2 flex items-center justify-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {actual.anio}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {actual.lugar}
                  </span>
                </p>
                <p className="mt-3 text-gray-300">{actual.descripcion}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}