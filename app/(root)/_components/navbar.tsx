'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Logo from '@/components/shared/logo'
import LanguageDropdown from '@/components/shared/language-dropdown'
import { Button } from '@/components/ui/button'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // To close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='sm:w-full h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
      <div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between px-4'>

        {/* Logo */}
        <Logo />

        {/* Right side: mobile (hamburger + dropdowns) */}
        <div className='flex items-center gap-3 md:hidden'>
          <LanguageDropdown />
          <ModeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <div className="gap-2 hidden md:flex">
          {navLinks.map((nav) => (
            <div key={nav.route} className="relative flex items-center dropdown-container">
              {nav.dropdownItems ? (
                <>
                  {/* Programs tugmasi - sahifaga olib boradi */}
                  <Link
                    href={`/${nav.route}`}
                    className={cn(
                      'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
                      // Home sahifasi uchun rangni tekshirish
                      (pathname === `/${nav.route}` || (nav.route === "home" && pathname === "/")) ? 'text-green-500' : ''
                    )}
                  >
                    {nav.name}
                  </Link>

                  {/* ChevronDown - dropdownni ochadi */}
                  <button
                    onClick={() => handleDropdownToggle(nav.name)}
                    className="-ml-2  hover:bg-blue-400/20 hover:py-2 rounded-sm"
                  >
                    <ChevronDown size={16} />
                  </button>

                  {/* Dropdown menyusi */}
                  {activeDropdown === nav.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50 py-2">
                      {nav.dropdownItems.map((item) => (
                        <Link
                          key={item.route}
                          href={`/${item.route}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400/20"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                // Boshqa nav linklar
                <Link
                  href={`/${nav.route}`}
                  className={cn(
                    'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
                    // Home sahifasi uchun rangni tekshirish
                    (pathname === `/${nav.route}` || (nav.route === "home" && pathname === "/")) ? 'text-primary' : ''
                  )}
                >
                  {nav.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop - Right section */}
        <div className='hidden md:flex items-center gap-2'>
          <LanguageDropdown />
          <ModeToggle />
          <Button
            onClick={() => router.push('/SignIn')}
            size="lg"
            className="text-1xl text-white"
          >
            Sign In
          </Button>
          <Button
            onClick={() => router.push('/profile')}
            size="lg"
            className="text-1xl text-white"
          >
            Profile
          </Button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className='md:hidden px-4 pt-4 pb-6 bg-background border-t shadow-sm'>
          <div className='flex flex-col gap-3'>
            {navLinks.map((nav) => (
              <Link
                key={nav.route}
                href={nav.route}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'py-2 px-3 rounded-md hover:bg-green-300/20 transition-colors',
                  pathname === nav.route && 'text-green-400'
                )}
              >
                {nav.name}
              </Link>
            ))}

            <Button
              onClick={() => {
                setIsOpen(false)
                router.push('/SignIn')
              }}
              variant="default"
              className="w-full mt-2"
            >
              Sign In
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
