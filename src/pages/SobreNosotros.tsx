import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Landmark, Music, HeartHandshake, ArrowRight } from 'lucide-react'

// ✏️ CAMBIA estos textos por la historia real de la agrupación
const capitulos = [
  {
    etiqueta: 'NUESTROS INICIOS',
    titulo: 'Así nació',
    resaltado: 'Tapay Thika',
    texto:
      'Tapay Thika nació con un sueño sencillo: que nuestras danzas no se olvidaran. Un grupo de amigos y familias se reunió para ensayar, aprender de los mayores y devolverle al pueblo la alegría de sus costumbres.',
    foto: '/images/nosotros/inicios.jpg',
  },
  {
    etiqueta: 'NUESTRA IDENTIDAD',
    titulo: 'Raíces que',
    resaltado: 'nos definen',
    texto:
      'Cada paso, cada canto y cada giro cuenta una historia heredada. Bailamos para honrar a nuestros ancestros y para que las nuevas generaciones se sientan orgullosas de dónde vienen.',
    foto: '/images/nosotros/identidad.jpg',
  },
  {
    etiqueta: 'NUESTRA VESTIMENTA',
    titulo: 'Colores que',
    resaltado: 'hablan por nosotros',
    texto:
      'Bordados a mano, sombreros adornados con flores y mantas llenas de color. Nuestra vestimenta es un lenguaje propio que muestra la riqueza y el cuidado de nuestras tradiciones.',
    foto: '/images/nosotros/vestimenta.jpg',
  },
  {
    etiqueta: 'HOY Y MAÑANA',
    titulo: 'Seguimos bailando',
    resaltado: 'para ti',
    texto:
      'Hoy llevamos nuestra cultura a festivales y escenarios, y seguimos abriendo las puertas a nuevos integrantes. Cada presentación es una oportunidad de compartir quiénes somos.',
    foto: '/images/nosotros/hoy.jpg',
  },
]

// ✏️ CAMBIA estas cifras por las reales
const cifras = [
  { numero: '10+', texto: 'Años de trayectoria' },
  { numero: '40+', texto: 'Integrantes' },
  { numero: '100+', texto: 'Presentaciones' },
  { numero: '5', texto: 'Danzas tradicionales' },
]

const valores = [
  { icon: Users, titulo: 'Cultura', texto: 'que nos une' },
  { icon: Landmark, titulo: 'Tradición', texto: 'que perdura' },
  { icon: Music, titulo: 'Danza', texto: 'que nos identifica' },
  { icon: HeartHandshake, titulo: 'Comunidad', texto: 'que nos fortalece' },
]

export default function SobreNosotros() {
  return (
    <div className="flex-1">
      {/* PORTADA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-yellow-500">SOBRE NOSOTROS</p>
          <h1 className="text-4xl italic text-white md:text-6xl">
            Más que una agrupación, <br />
            <span className="text-yellow-500">somos una familia</span>
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-yellow-500" />
          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-300">
            Tapay Thika es una agrupación de danzas folklóricas que nace con el propósito de
            preservar y difundir nuestras raíces culturales a través de la danza.
          </p>
        </motion.div>
      </section>

      {/* HISTORIA EN BLOQUES ALTERNADOS */}
      <section>
        {capitulos.map((c, i) => {
          const invertido = i % 2 === 1
          return (
            <div key={c.etiqueta} className="grid md:grid-cols-2">
              {/* FOTO */}
              <motion.div
                initial={{ opacity: 0, x: invertido ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`h-72 overflow-hidden bg-zinc-800 md:h-[28rem] ${
                  invertido ? 'md:order-2' : ''
                }`}
              >
                <img
                  src={c.foto}
                  alt={c.titulo}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </motion.div>

              {/* TEXTO */}
              <motion.div
                initial={{ opacity: 0, x: invertido ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative flex items-center bg-zinc-950 px-8 py-14 md:px-16"
              >
                <span className="absolute right-6 top-4 text-8xl font-bold text-yellow-500/10">
                  0{i + 1}
                </span>
                <div className="relative max-w-md">
                  <p className="mb-3 text-xs tracking-[0.3em] text-yellow-500">{c.etiqueta}</p>
                  <h2 className="text-3xl italic text-white md:text-4xl">
                    {c.titulo} <span className="text-yellow-500">{c.resaltado}</span>
                  </h2>
                  <div className="my-5 h-px w-16 bg-yellow-500" />
                  <p className="leading-relaxed text-gray-300">{c.texto}</p>
                </div>
              </motion.div>
            </div>
          )
        })}
      </section>

      {/* CIFRAS */}
      <section className="border-y border-yellow-600/30 bg-black py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {cifras.map((c, i) => (
            <motion.div
              key={c.texto}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-bold italic text-yellow-500">{c.numero}</p>
              <p className="mt-2 text-sm text-gray-300">{c.texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALORES */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {valores.map(({ icon: Icon, titulo, texto }, i) => (
            <motion.div
              key={titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 text-yellow-500 transition hover:bg-yellow-500 hover:text-black">
                <Icon size={28} />
              </div>
              <p className="mt-4 text-white">{titulo}</p>
              <p className="text-sm text-gray-400">{texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FRASE FINAL */}
      <section className="px-6 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl italic text-white md:text-4xl">
            Nuestra cultura vive <span className="text-yellow-500">en cada paso</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-gray-300">
            ¿Quieres conocernos, invitarnos a un evento o ser parte de la familia?
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            Escríbenos <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}