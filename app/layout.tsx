import './globals.css'

export const metadata = {
  title: 'Stór | Hospitality Purchasing',
  description: 'Compare hospitality supplies, join group deals and save.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
