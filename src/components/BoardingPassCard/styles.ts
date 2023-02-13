import styled, { css } from 'styled-components/native'

import Ionicons from '@expo/vector-icons/Ionicons'

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

interface BaseTextProps {
  textAlignRight?: boolean
  textAlignCenter?: boolean
}

const BaseText = styled.Text<BaseTextProps>`
  ${props => css`
    font-family: ${props.theme['font-family'].regular};
    font-size: ${props.theme['font-size'].md}px;
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

export const TitleInformation = styled(BaseText)`
  font-size: ${props => props.theme['font-size'].sm}px;
`

interface InformationProps {
  marginBottom16?: boolean
  isColorWhite?: boolean
  fontFamilyRegular?: boolean
}
export const Information = styled(BaseText)<InformationProps>`
  ${props => css`
    font-family: ${props.fontFamilyRegular
      ? props.theme['font-family'].regular
      : props.theme['font-family'].medium};
    color: ${props.isColorWhite
      ? props.theme.colors.white
      : props.theme.colors['grey-900']};
  `}

  ${props =>
    props.marginBottom16 &&
    css`
      margin-bottom: 16px;
    `}
`

export const TitleAbbreviation = styled(BaseText)`
  ${props => css`
    font-family: ${props.theme['font-family'].medium};
    font-size: ${props.theme['font-size']['4xl']}px;
    color: ${props.theme.colors['grey-900']};
  `}
`

export const TitleTime = styled(BaseText)`
  ${props => css`
    color: ${props.theme.colors['grey-900']};
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
export const Button = styled.View<ButtonTextProps>`
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

export const IconAirplane = styled(Ionicons).attrs(({ theme }) => ({
  name: 'airplane',
  size: 24,
  color: theme.colors['grey-900']
}))``
