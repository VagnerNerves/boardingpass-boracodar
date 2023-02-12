import Ionicons from '@expo/vector-icons/Ionicons'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors['violet-500']};
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
    color: ${props.theme.colors['grey-900']};
  `}
`

export const FlightInfo = styled.View`
  background-color: ${props => props.theme.colors.white};

  width: 327px;
  padding: 24px 32px;

  border-radius: 24px;

  margin-top: 20px;
  align-items: center;
`

interface PropsContainerText {
  marginBottom24?: boolean
}
export const ContainerText = styled.View<PropsContainerText>`
  ${props =>
    props.marginBottom24 &&
    css`
      margin-bottom: 24px;
    `}

  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerTextData = styled.View`
  justify-content: center;
`

interface PropsTextAlign {
  textAlignRight?: boolean
}

export const TitleInformation = styled.Text<PropsTextAlign>`
  ${props => css`
    font-family: ${props.theme['font-family'].regular};
    font-size: ${props.theme['font-size'].sm}px;
    color: ${props.theme.colors['grey-500']};
  `}

  ${props =>
    props.textAlignRight &&
    css`
      text-align: right;
    `}
`

export const Information = styled.Text<PropsTextAlign>`
  ${props => css`
    font-family: ${props.theme['font-family'].medium};
    font-size: ${props.theme['font-size'].md}px;
    color: ${props.theme.colors['grey-900']};
  `}

  ${props =>
    props.textAlignRight &&
    css`
      text-align: right;
    `}
`

export const TitleAcronym = styled.Text<PropsTextAlign>`
  ${props => css`
    font-family: ${props.theme['font-family'].medium};
    font-size: ${props.theme['font-size']['4xl']}px;
    color: ${props.theme.colors['grey-900']};
  `}

  ${props =>
    props.textAlignRight &&
    css`
      text-align: right;
    `}
`

export const TitleTime = styled.Text<PropsTextAlign>`
  ${props => css`
    font-family: ${props.theme['font-family'].regular};
    font-size: ${props.theme['font-size'].md}px;
    color: ${props.theme.colors['grey-900']};
  `}

  ${props =>
    props.textAlignRight &&
    css`
      text-align: right;
    `}
`

interface PropsDivider {
  isApllyTop: boolean
}
export const Divider = styled.View<PropsDivider>`
  width: 290px;
  height: 1px;

  ${props =>
    props.isApllyTop
      ? css`
          top: -1px;
        `
      : css`
          bottom: -1px;
        `}

  border-color: ${props => props.theme.colors['grey-300']};
  border-style: dashed;
  border-width: 1px;
  position: absolute;
`

export const PassangerInfo = styled.View`
  background-color: ${props => props.theme.colors.white};

  width: 327px;
  padding: 24px 32px;

  border-radius: 24px;

  align-items: center;
`

export const IconAirplane = styled(Ionicons).attrs(props => ({
  name: 'airplane',
  size: 24,
  color: props.theme.colors['grey-900']
}))``
