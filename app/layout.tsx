import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Zach McMullen',
  description: "Zach McMullen's personal website, showcasing everything about Zach McMullen!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r dark:from-gray-800 dark:via-slate-900 dark:to-gray-900 from-gray-50 via-slate-100 to-sky-50 text-gray-900 dark:text-white'>
        <Navbar/>
        <main className='flex justify-center mt-10'>
          <div className='flex-col items-center space-y-28 px-10 py-16 md:w-4/5 lg:w-3/5 2xl:w-1/3'>
            {children}
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  )
}
