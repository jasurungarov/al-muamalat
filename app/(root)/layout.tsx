import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'
import { Toaster } from "sonner"

function Layout({ children }: ChildProps) {
	return (
		<main className="flex flex-col justify-between">
			<Navbar />
			<main className="flex-grow py-6">{children}</main>
			<Toaster richColors  position="top-center" />
			<Footer />
		</main>
	)
}

export default Layout
