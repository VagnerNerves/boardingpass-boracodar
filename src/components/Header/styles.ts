import styled from 'styled-components/native'

import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export const Container = styled.View`
  width: 100%;

  padding: 12px 24px;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: 'arrow-back-ios',
  size: 24,
  color: theme.colors.white
}))``
