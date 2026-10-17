import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'

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

// ✏️ Datos de contacto y redes (los mismos de Contacto.tsx)
const NUMERO_WHATSAPP = '51987654321'
const TELEFONO_MOSTRAR = '+51 987 654 321'
const CORREO = 'tapaythika@gmail.com'
const FACEBOOK = 'https://www.facebook.com/tapay.thika.35'
const INSTAGRAM = 'https://www.instagram.com/tapay_thika_oficial?xtok=Zjl4azB5YWwxN3Rm'
const TIKTOK = 'https://www.tiktok.com/@tapaythika?_r=1&_t=ZS-9AcXM32gIx4'

const enlaces = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/presentaciones', label: 'Presentaciones' },
  { to: '/directiva', label: 'Directiva' },
  { to: '/galeria', label: 'Galería' },
  { to: '/contacto', label: 'Contacto' },
]

const redes = [
  { icono: <FacebookIcon />, nombre: 'Facebook', href: FACEBOOK },
  { icono: <InstagramIcon />, nombre: 'Instagram', href: INSTAGRAM },
  { icono: <TikTokIcon />, nombre: 'TikTok', href: TIKTOK },
]

export default function Footer() {
  return (
    <footer className="border-t border-yellow-600/40 bg-black">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 px-6 py-10 md:gap-x-12 md:px-12 md:py-14 lg:grid-cols-4 lg:px-20 lg:py-16">
        {/* MARCA */}
        <div className="col-span-2 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
          <img src="/images/logo.png" alt="Tapay Thika" className="h-16 w-auto md:h-20 lg:h-24" />
          <p className="mt-4 max-w-xs italic text-gray-400">
            Nuestra cultura vive <span className="text-yellow-500">en cada paso</span>.
          </p>
          <div className="mt-5 flex gap-3">
            {redes.map((r) => (
              <a
                key={r.nombre}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={r.nombre}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500 p-2.5 text-yellow-500 transition hover:-translate-y-1 hover:bg-yellow-500 hover:text-black"
              >
                {r.icono}
              </a>
            ))}
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <div className="col-span-1">
          <h3 className="text-xs tracking-[0.3em] text-yellow-500 sm:text-sm">NAVEGACIÓN</h3>
          <div className="mt-3 h-px w-12 bg-yellow-500" />
          <ul className="mt-5 space-y-3">
            {enlaces.map((e) => (
              <li key={e.to}>
                <Link
                  to={e.to}
                  className="text-sm text-gray-300 transition hover:text-yellow-500 sm:text-base"
                >
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACTO */}
        <div className="col-span-1 lg:col-span-2">
          <h3 className="text-xs tracking-[0.3em] text-yellow-500 sm:text-sm">CONTACTO</h3>
          <div className="mt-3 h-px w-12 bg-yellow-500" />
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={`https://wa.me/${NUMERO_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-gray-300 transition hover:text-yellow-500 sm:gap-3 sm:text-base"
              >
                <Phone className="mt-0.5 shrink-0 text-yellow-500" size={20} />
                <span>{TELEFONO_MOSTRAR}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CORREO}`}
                className="flex items-start gap-2 text-sm text-gray-300 transition hover:text-yellow-500 sm:gap-3 sm:text-base"
              >
                <Mail className="mt-0.5 shrink-0 text-yellow-500" size={20} />
                <span className="break-all">{CORREO}</span>
              </a>
            </li>
          </ul>

          <Link
            to="/contacto"
            className="mt-6 inline-block rounded-full border border-yellow-500 px-5 py-2 text-center text-xs font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-black sm:text-sm"
          >
            ¿Quieres que bailemos en tu evento?
          </Link>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="border-t border-yellow-600/20 px-6 py-4 text-center text-xs text-gray-500 sm:text-sm md:px-12 lg:px-20">
        © {new Date().getFullYear()} Tapay Thika · Agrupación de Danzas · Todos los derechos
        reservados
      </div>
    </footer>
  )
}