import styled, { css } from 'styled-components/native'
import QRCode from 'react-native-qrcode-svg'

import Ionicons from '@expo/vector-icons/Ionicons'

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

interface ContainerCardProps {
  marginTop20?: boolean
  marginBottom20?: boolean
}
export const ContainerCard = styled.View<ContainerCardProps>`
  background-color: ${props => props.theme.colors.white};

  width: 327px;
  padding: 24px 32px;

  border-radius: 24px;

  ${props =>
    props.marginTop20 &&
    css`
      margin-top: 20px;
    `}
  ${props =>
    props.marginBottom20 &&
    css`
      margin-bottom: 20px;
    `}

  align-items: center;
`

interface PropsContainerText {
  marginBottom24?: boolean
  justifyContentCenter?: boolean
}
export const ContainerText = styled.View<PropsContainerText>`
  ${props =>
    props.marginBottom24 &&
    css`
      margin-bottom: 24px;
    `}

  width: 100%;
  flex-direction: row;
  justify-content: ${props =>
    props.justifyContentCenter ? 'center' : 'space-between'};
`

export const ContainerTextData = styled.View`
  justify-content: center;
`

interface PropsTextAlign {
  textAlignRight?: boolean
  textAlignCenter?: boolean
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

    ${props =>
    props.textAlignCenter &&
    css`
      text-align: center;
    `}
`

interface InformationProps {
  textAlignRight?: boolean
  marginBottom16?: boolean
  isColorWhite?: boolean
  fontFamilyRegular?: boolean
}
export const Information = styled.Text<InformationProps>`
  ${props => css`
    font-family: ${props.fontFamilyRegular
      ? props.theme['font-family'].regular
      : props.theme['font-family'].medium};
    font-size: ${props.theme['font-size'].md}px;
    color: ${props.isColorWhite
      ? props.theme.colors.white
      : props.theme.colors['grey-900']};
  `}

  ${props =>
    props.textAlignRight &&
    css`
      text-align: right;
    `}

    ${props =>
    props.marginBottom16 &&
    css`
      margin-bottom: 16px;
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
  isApllyTop?: boolean
  isApllyBottom?: boolean
}
export const Divider = styled.View<PropsDivider>`
  width: 290px;
  height: 1px;

  ${props =>
    props.isApllyTop &&
    css`
      top: -1px;
    `}
  ${props =>
    props.isApllyBottom &&
    css`
      bottom: -1px;
    `}  

  border-color: ${props => props.theme.colors['grey-300']};
  border-style: dashed;
  border-width: 1px;
  position: absolute;
`

export const ContainerButton = styled.View`
  align-items: flex-start;
`

interface ButtonTextProps {
  marginBottom16?: boolean
}
export const ButtonText = styled.View<ButtonTextProps>`
  ${props => css`
    background-color: ${props.theme.colors['violet-700']};
  `}

  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 4px 8px;

  ${props =>
    props.marginBottom16 &&
    css`
      margin-bottom: 16px;
    `}
`

export const ContainerQRCode = styled.View`
  padding: 10px;
`

export const QRCodeGenerated = styled(QRCode).attrs(props => ({
  value: 'https://github.com/VagnerNerves',
  size: 140
}))``

export const IconAirplane = styled(Ionicons).attrs(props => ({
  name: 'airplane',
  size: 24,
  color: props.theme.colors['grey-900']
}))``
