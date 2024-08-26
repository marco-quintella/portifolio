import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: ['Poppins:400,500,600,700'],
      }
    })
  ],
  theme: {
    colors: {
      accent: {
        1: '#0f0715'
      },
      primary: '#8750f7',
      secondary: '#2a1454',
      dark: 'rgba(115, 67, 210, 0)',
      body: '#ddd'
    }
  }
})
