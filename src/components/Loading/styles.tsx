import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors['violet-500']};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(props => ({
  color: props.theme.colors.white
}))``
