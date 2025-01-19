import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import CustomCursor from '@/components/custom-cursor'
import ParticleBackground from '@/components/particle-background'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sagar Sunil - Creative Developer',
  description: 'Portfolio of Sagar Sunil - Software Developer and Creative Technologist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} bg-[#030014] text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <ParticleBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

