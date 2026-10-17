import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, PartyPopper, ArrowRight } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V13h2.7v8h3.1z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full fill-none stroke-current" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" className="fill-current" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

// ✏️ CAMBIA estos datos por los reales
const NUMERO_WHATSAPP = '51987654321' // código de país + número, sin + ni espacios
const TELEFONO_MOSTRAR = '+51 987 654 321'
const CORREO = 'tapaythika@gmail.com'
const UBICACION_TEXTO = 'Calle Los Ángeles S/N, Plaza Principal - Colca'
const FACEBOOK = '#'
const INSTAGRAM = '#'
const TIKTOK = '#'

const mensajeEvento = 'Hola Tapay Thika, queremos invitarlos a nuestro evento. ¿Podemos conversar?'

const tarjetas = [
  {
    icono: <WhatsAppIcon />,
    titulo: 'WhatsApp',
    dato: TELEFONO_MOSTRAR,
    accion: 'Escríbenos',
    href: `https://wa.me/${NUMERO_WHATSAPP}`,
    nueva: true,
  },
  {
    icono: <Phone className="h-full w-full" />,
    titulo: 'Llámanos',
    dato: TELEFONO_MOSTRAR,
    accion: 'Llamar ahora',
    href: `tel:+${NUMERO_WHATSAPP}`,
    nueva: false,
  },
  {
    icono: <Mail className="h-full w-full" />,
    titulo: 'Correo',
    dato: CORREO,
    accion: 'Enviar correo',
    href: `mailto:${CORREO}`,
    nueva: false,
  },
  {
    icono: <MapPin className="h-full w-full" />,
    titulo: 'Ubicación',
    dato: UBICACION_TEXTO,
    accion: 'Ver en el mapa',
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(UBICACION_TEXTO)}`,
    nueva: true,
  },
]

const redes = [
  { icono: <FacebookIcon />, nombre: 'Facebook', href: FACEBOOK },
  { icono: <InstagramIcon />, nombre: 'Instagram', href: INSTAGRAM },
  { icono: <TikTokIcon />, nombre: 'TikTok', href: TIKTOK },
]

export default function Contacto() {
  return (
    <div className="flex-1">
      {/* ENCABEZADO */}
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-yellow-500">CONTÁCTANOS</p>
          <h1 className="text-4xl italic text-white md:text-6xl">
            ¡Nos encantaría <br />
            <span className="text-yellow-500">conectar contigo!</span>
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-yellow-500" />
          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-300">
            Si deseas más información, invitaciones a nuestras presentaciones o simplemente
            quieres ser parte de nuestra agrupación, elige la forma que más te guste para
            escribirnos.
          </p>
        </motion.div>
      </section>

      {/* TARJETAS DE CONTACTO */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tarjetas.map((t, i) => (
            <motion.a
              key={t.titulo}
              href={t.href}
              target={t.nueva ? '_blank' : undefined}
              rel={t.nueva ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center rounded-2xl border border-yellow-600/40 bg-zinc-950 p-8 text-center transition hover:-translate-y-1 hover:border-yellow-500 hover:bg-zinc-900"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 p-4 text-yellow-500 transition group-hover:bg-yellow-500 group-hover:text-black">
                {t.icono}
              </div>
              <h3 className="mt-5 text-xl italic text-white">{t.titulo}</h3>
              <p className="mt-2 break-words text-sm text-gray-400">{t.dato}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-500">
                {t.accion} <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* BANNER PARA EVENTOS */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-yellow-600/50 bg-gradient-to-br from-yellow-500/20 via-zinc-950 to-black p-10 text-center md:p-16"
        >
          <PartyPopper className="mx-auto text-yellow-500" size={44} />
          <h2 className="mt-5 text-3xl italic text-white md:text-5xl">
            ¿Quieres que seamos parte <br />
            <span className="text-yellow-500">de tu aventura?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Llevamos alegría, ritmo y cultura a tu evento: festivales, aniversarios, matrimonios,
            celebraciones y mucho más. Contáctanos y hagamos de tu fiesta algo inolvidable.
          </p>
          <a
            href={`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensajeEvento)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Contrátanos por WhatsApp <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* REDES SOCIALES */}
      <section className="mt-12 border-t border-yellow-600/30 bg-zinc-950 px-6 py-16 text-center">
        <h2 className="text-3xl italic text-white">
          Síguenos en <span className="text-yellow-500">nuestras redes</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-gray-300">
          Mira nuestros ensayos, presentaciones y los mejores momentos de la agrupación. ¡Tu
          apoyo nos impulsa a seguir bailando!
        </p>
        <div className="mt-8 flex justify-center gap-6">
          {redes.map((r) => (
            <a
              key={r.nombre}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={r.nombre}
              className="group flex flex-col items-center gap-3"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 p-4 text-yellow-500 transition group-hover:-translate-y-1 group-hover:bg-yellow-500 group-hover:text-black">
                {r.icono}
              </span>
              <span className="text-sm text-gray-300">{r.nombre}</span>
            </a>
          ))}
        </div>
        <p className="mt-12 text-sm text-gray-500">
          Tapay Thika · Nuestra cultura, vive en cada paso
        </p>
      </section>
    </div>
  )
}