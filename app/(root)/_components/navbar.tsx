// 'use client'

// import ModeToggle from '@/components/shared/mode-toggle'
// import { navLinks } from '@/constants'
// import { cn } from '@/lib/utils'
// import Link from 'next/link'
// import { usePathname, useRouter } from 'next/navigation'
// import Logo from '@/components/shared/logo'
// import LanguageDropdown from '@/components/shared/language-dropdown'
// import { Button } from '@/components/ui/button'



// function Navbar() {
// 	const pathname = usePathname()
// 	const router = useRouter();

// 	return (
// 		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
// 			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
// 				{/* Logo */}
//                 <Logo/>
// 				{/* Nav links */}
// 				<div className='gap-2 hidden md:flex'>
// 					{navLinks.map(nav => (
// 						<Link
// 							key={nav.route}
// 							href={nav.route}
// 							className={cn(
// 								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
// 								pathname === nav.route && 'text-green-400'
// 							)}
// 						>
// 							{nav.name}
// 						</Link>
// 					))}
// 				</div>

// 				{/* Search */}
// 				<div className='flex items-center gap-1'>
// 					<LanguageDropdown />
// 						 <ModeToggle/>
// 						 <Button
//       onClick={() => router.push('/SignIn')} 
//       variant="ghost"
//       size="lg"
//       className="text-1xl hidden md:flex bg-primary"
//     >
//       Sign In
//     </Button>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Navbar

'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Logo from '@/components/shared/logo'
import LanguageDropdown from '@/components/shared/language-dropdown'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
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
        <div className='gap-2 hidden md:flex'>
          {navLinks.map((nav) => (
            <Link
              key={nav.route}
              href={nav.route}
              className={cn(
                'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
                pathname === nav.route && 'text-green-400'
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Desktop - Right section */}
        <div className='hidden md:flex items-center gap-2'>
          <LanguageDropdown />
          <ModeToggle />
          <Button
            onClick={() => router.push('/SignIn')}
            variant="ghost"
            size="lg"
            className="text-1xl bg-primary"
          >
            Sign In
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
  )
}

export default Navbar
