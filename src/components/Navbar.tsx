import { useEffect, useState } from 'react'
import { Moon, Sun, Zap } from 'lucide-react'

const ITEMS = [
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    () => (document.documentElement.dataset.theme as 'dark' | 'light') || 'dark',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 md:h-16 max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
        <a href="#" className="hidden sm:flex items-center gap-2 font-mono text-sm text-fg">
          <Zap className="h-4 w-4 text-volt" fill="currentColor" />
          ilham.pradina
        </a>
        <a href="#" className="sm:hidden flex items-center font-mono text-sm text-fg">
          <Zap className="h-4 w-4 text-volt" fill="currentColor" />
        </a>
        <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
          <nav className="flex items-center gap-3 sm:gap-5 md:gap-8">
            {ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] sm:text-xs md:text-sm text-dim transition-colors hover:text-volt whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line text-dim transition-colors hover:border-volt/50 hover:text-volt"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  )
}
