import { ScrollView } from 'react-native'
import { BoardingPassCard } from '../../components/BoardingPassCard'
import { Header } from '../../components/Header'

import {
  Container,
  ApllyLinearGradient,
  Description,
  Title,
  ContainerBoardPass
} from './styles'

const data = {
  flight: {
    number: 'RS995',
    date: '23/05/2023',
    departureCity: 'São Paulo, Brasil',
    abbreviationOfFlightDeparture: 'GRU',
    departureTime: '17:00',
    arrivalCity: 'São Francisco, EUA',
    abbreviationOfFlightArrival: 'SFO',
    arrivalTime: '04:48',
    extraArrivalTime: '+1'
  },
  passenger: {
    name: 'Vagner Nerves',
    seat: '28A'
  },
  boarding: {
    boardingTime: '16:15',
    boardingTerminal: '2',
    boardingGate: '15',
    boardingGroup: '3',
    boardingPassUrl: 'https://github.com/VagnerNerves/boardingpass-boracodar',
    boardingGateClosingTime: '16:45'
  }
}

export function BoardingPass() {
  return (
    <Container>
      <ApllyLinearGradient />

      <Header />

      <ContainerBoardPass>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Title>Cartão de Embarque</Title>

          <BoardingPassCard
            flight={data.flight}
            passenger={data.passenger}
            boarding={data.boarding}
          />

          <Description>
            Qualquer problema procure o balcão de atendimento da sua companhia
            aérea
          </Description>
        </ScrollView>
      </ContainerBoardPass>
    </Container>
  )
}
