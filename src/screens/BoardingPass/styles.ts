import { SafeAreaView } from 'react-native-safe-area-context'

import styled, { css } from 'styled-components/native'

import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(SafeAreaView)`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors['violet-500']};
`

export const ApllyLinearGradient = styled(LinearGradient).attrs(
  ({ theme }) => ({
    colors: [theme.colors['violet-500'], theme.colors['violet-900']]
  })
)`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const Title = styled.Text`
  ${props => css`
    font-family: ${props.theme['font-family'].medium};
    font-size: ${props.theme['font-size'].xl}px;
    color: ${props.theme.colors.white};
  `}
`

export const Description = styled.Text`
  max-width: 269px;

  text-align: center;

  ${props => css`
    font-family: ${props.theme['font-family'].regular};
    font-size: ${props.theme['font-size'].sm}px;
    color: ${props.theme.colors['grey-200']};
  `}
`
