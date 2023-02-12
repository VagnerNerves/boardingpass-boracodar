import { ThemeProvider } from 'styled-components/native'

import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium
} from '@expo-google-fonts/rubik'

import { BoardingPass } from './src/screens/BoardingPass'

import theme from './src/theme'

export default function App() {
  const [fonstLoaded] = useFonts({ Rubik_400Regular, Rubik_500Medium })

  return (
    <ThemeProvider theme={theme}>
      <BoardingPass />
    </ThemeProvider>
  )
}
