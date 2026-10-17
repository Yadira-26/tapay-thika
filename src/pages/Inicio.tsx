import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Volume2, VolumeX, Flag } from 'lucide-react'
import { motion } from 'framer-motion'

// ✏️ CAMBIA estos hitos por la historia real de la agrupación
// Puedes agregar o borrar bloques { ... } y se acomodan solos.
const hitos = [
  {
    anio: '2015',
    titulo: 'Nace Tapay Thika',
    texto:
      'Un grupo de amigos y familias se reúne con un sueño: que nuestras danzas no se olviden.',
  },
  {
    anio: '2017',
    titulo: 'Primera presentación',
    texto:
      'Salimos por primera vez a un escenario y descubrimos la emoción de compartir nuestra cultura.',
  },
  {
    anio: '2020',
    titulo: 'Nuestro primer premio',
    texto:
      'Obtenemos nuestro primer reconocimiento en un concurso de danzas y confirmamos que el esfuerzo vale la pena.',
  },
  {
    anio: '2023',
    titulo: 'Crecemos como familia',
    texto: 'Nuevos integrantes se suman y llevamos nuestras danzas a festivales de toda la región.',
  },
  {
    anio: '2026',
    titulo: 'Seguimos bailando',
    texto: 'Con una nueva directiva y más energía que nunca, seguimos llevando alegría a cada escenario.',
  },
]

export default function Inicio() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [silenciado, setSilenciado] = useState(true)
  const [listo, setListo] = useState(false)

  function alternarSonido() {
    if (!videoRef.current) return
    const nuevo = !silenciado
    videoRef.current.muted = nuevo
    setSilenciado(nuevo)
  }

  function bajar() {
    document.getElementById('linea-tiempo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex-1">
      {/* PORTADA CON VIDEO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-black md:min-h-[75vh] lg:min-h-[85vh]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setListo(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            listo ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full px-6 md:px-12 lg:px-20"
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-yellow-500">BIENVENIDOS A</p>
          <h1 className="text-6xl font-bold italic text-white md:text-8xl">Tapay Thika</h1>
          <p className="mt-2 text-lg tracking-[0.5em] text-white">AGRUPACIÓN DE DANZAS</p>

          <h2 className="mt-10 text-3xl text-white md:text-4xl">
            Nuestra cultura vive <br />
            <span className="italic text-yellow-500">en cada paso</span>
          </h2>

          <p className="mt-6 max-w-md text-gray-300">
            Somos una agrupación de danzas que mantiene viva la esencia de nuestra cultura, a
            través del arte, la tradición y el orgullo de nuestras raíces.
          </p>

          <Link
            to="/sobre-nosotros"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            Conoce más <ArrowRight size={18} />
          </Link>
        </motion.div>

        <button
          type="button"
          onClick={alternarSonido}
          aria-label={silenciado ? 'Activar sonido' : 'Silenciar'}
          className="absolute bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500 bg-black/60 text-yellow-500 transition hover:bg-yellow-500 hover:text-black"
        >
          {silenciado ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </button>

        <button
          type="button"
          onClick={bajar}
          aria-label="Bajar"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-yellow-500"
        >
          <ChevronDown size={36} />
        </button>
      </section>

      {/* LÍNEA DE TIEMPO */}
      <section id="linea-tiempo" className="border-t border-yellow-600/30 bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm tracking-[0.3em] text-yellow-500">NUESTRO CAMINO</p>
            <h2 className="text-4xl italic text-white md:text-5xl">
              Una historia que <span className="text-yellow-500">sigue bailando</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-yellow-500" />
          </div>

          <div className="relative">
            {/* Línea dorada */}
            <div className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-yellow-500 via-yellow-600/50 to-transparent md:left-1/2" />

            {hitos.map((h, i) => {
              const derecha = i % 2 === 1
              return (
                <motion.div
                  key={h.anio}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7 }}
                  className="relative mb-14 last:mb-0 md:grid md:grid-cols-2 md:gap-20"
                >
                  {/* Punto */}
                  <div className="absolute left-4 top-3 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-4 border-zinc-950 bg-yellow-500 md:left-1/2" />

                  <div
                    className={`pl-12 md:pl-0 ${
                      derecha ? 'md:col-start-2' : 'md:text-right'
                    }`}
                  >
                    <p className="text-5xl font-bold italic text-yellow-500 md:text-6xl">
                      {h.anio}
                    </p>
                    <h3 className="mt-2 text-2xl text-white">{h.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-gray-400">{h.texto}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Cierre */}
            <div className="relative flex justify-start pl-12 pt-4 md:justify-center md:pl-0">
              <div className="absolute left-4 top-4 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-yellow-500 text-black md:left-1/2">
                <Flag size={18} />
              </div>
              <p className="mt-12 text-sm tracking-[0.3em] text-yellow-500 md:mt-14">
                Y LA HISTORIA CONTINÚA…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRASE FINAL */}
      <section className="px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl italic text-white md:text-5xl">
            Nuestra cultura vive <span className="text-yellow-500">en cada paso</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-gray-300">
            Descubre nuestras presentaciones o invítanos a tu próximo evento.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/presentaciones"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              Ver presentaciones <ArrowRight size={18} />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 rounded-full border border-yellow-500 px-7 py-3 font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-black"
            >
              Contáctanos
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}