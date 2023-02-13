import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium
} from '@expo-google-fonts/rubik'

import { BoardingPass } from './src/screens/BoardingPass'

import theme from './src/theme'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fonstLoaded] = useFonts({ Rubik_400Regular, Rubik_500Medium })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaProvider>
        {fonstLoaded ? <BoardingPass /> : <Loading />}
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
