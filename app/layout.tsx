import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Cost Simulator — Predict AI API Costs Before Deployment',
  description: 'Test AI prompts against OpenAI, Anthropic, and Google models to predict costs and performance before going live.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1de2d654-212d-4df1-a4f5-b7ce83ec1a52"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
