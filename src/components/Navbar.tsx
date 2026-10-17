import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

// ✏️ Enlaces de redes
const FACEBOOK = 'https://www.facebook.com/tapay.thika.35' // pega aquí el enlace de Facebook cuando lo tengas
const INSTAGRAM = 'https://www.instagram.com/tapay_thika_oficial?xtok=Zjl4azB5YWwxN3Rm'
const TIKTOK = 'https://www.tiktok.com/@tapaythika?_r=1&_t=ZS-9AcXM32gIx4'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/presentaciones', label: 'Presentaciones' },
  { to: '/directiva', label: 'Directiva' },
  { to: '/contacto', label: 'Contacto' },
]

function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V13h2.7v8h3.1z" />
    </svg>
  )
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" className="fill-current" />
    </svg>
  )
}

function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

const redes = [
  { nombre: 'Facebook', href: FACEBOOK, Icono: FacebookIcon },
  { nombre: 'Instagram', href: INSTAGRAM, Icono: InstagramIcon },
  { nombre: 'TikTok', href: TIKTOK, Icono: TikTokIcon },
]

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-600/20 bg-black/90 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 md:px-12 xl:px-20">
        {/* LOGO */}
        <NavLink to="/" onClick={() => setAbierto(false)} className="flex shrink-0 items-center">
          <img
            src="/images/logo.png"
            alt="Tapay Thika"
            className="h-16 w-auto sm:h-20 xl:h-28"
          />
        </NavLink>

        {/* ENLACES (solo pantallas grandes) */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-16">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `whitespace-nowrap pb-1 text-base transition-colors xl:text-2xl ${
                  isActive
                    ? 'border-b-2 border-yellow-500 text-yellow-500'
                    : 'text-white hover:text-yellow-500'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* REDES (solo pantallas grandes) */}
        <div className="hidden items-center gap-3 text-white lg:flex xl:gap-4">
          {redes.map(({ nombre, href, Icono }) => (
            <a
              key={nombre}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={nombre}
              className="hover:text-yellow-500"
            >
              <Icono className="h-6 w-6 xl:h-9 xl:w-9" />
            </a>
          ))}
        </div>

        {/* BOTÓN HAMBURGUESA (tablet y celular) */}
        <button
          type="button"
          onClick={() => setAbierto(!abierto)}
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          className="rounded-md border border-yellow-500 p-2 text-yellow-500 transition hover:bg-yellow-500 hover:text-black lg:hidden"
        >
          {abierto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE (tablet y celular) */}
      {abierto && (
        <div className="border-t border-yellow-600/20 bg-black px-6 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                onClick={() => setAbierto(false)}
                className={({ isActive }) =>
                  `border-b border-yellow-600/10 py-4 text-xl transition-colors ${
                    isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 flex items-center gap-5 text-white">
            {redes.map(({ nombre, href, Icono }) => (
              <a
                key={nombre}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={nombre}
                className="hover:text-yellow-500"
              >
                <Icono className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}