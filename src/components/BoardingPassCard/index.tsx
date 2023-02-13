import { QRCode } from '../QRCode'

import {
  Button,
  ContainerButton,
  ContainerCard,
  ContainerQRCode,
  ContainerText,
  ContainerTextData,
  Divider,
  IconAirplane,
  Information,
  TitleAbbreviation,
  TitleExtraTime,
  TitleInformation,
  TitleTime
} from './styles'

interface BoardingPassCardProps {
  flight: {
    number: string
    date: string
    departureCity: string
    abbreviationOfFlightDeparture: string
    departureTime: string
    arrivalCity: string
    abbreviationOfFlightArrival: string
    arrivalTime: string
    extraArrivalTime: string
  }
  passenger: {
    name: string
    seat: string
  }
  boarding: {
    boardingTime: string
    boardingTerminal: string
    boardingGate: string
    boardingGroup: string
    boardingPassUrl: string
    boardingGateClosingTime: string
  }
}

export function BoardingPassCard({
  flight,
  passenger,
  boarding
}: BoardingPassCardProps) {
  return (
    <>
      <ContainerCard marginTop20>
        <ContainerText marginBottom24>
          <ContainerTextData>
            <TitleInformation>Voo</TitleInformation>
            <Information>{flight.number}</Information>
          </ContainerTextData>

          <ContainerTextData>
            <TitleInformation textAlignRight>Data</TitleInformation>
            <Information textAlignRight>{flight.date}</Information>
          </ContainerTextData>
        </ContainerText>
        <ContainerText>
          <ContainerTextData>
            <TitleInformation>{flight.departureCity}</TitleInformation>
            <TitleAbbreviation>
              {flight.abbreviationOfFlightDeparture}
            </TitleAbbreviation>
            <TitleTime>{flight.departureTime}</TitleTime>
          </ContainerTextData>

          <ContainerTextData>
            <IconAirplane />
          </ContainerTextData>

          <ContainerTextData>
            <TitleInformation textAlignRight>
              {flight.arrivalCity}
            </TitleInformation>
            <TitleAbbreviation textAlignRight>
              {flight.abbreviationOfFlightArrival}
            </TitleAbbreviation>
            <ContainerTextData isFlexDirectionColumn isFlexEnd>
              <TitleTime textAlignRight>{flight.arrivalTime}</TitleTime>
              <TitleExtraTime textAlignRight>
                {flight.extraArrivalTime}
              </TitleExtraTime>
            </ContainerTextData>
          </ContainerTextData>
        </ContainerText>

        <Divider isApllyBottom />
      </ContainerCard>
      <ContainerCard>
        <Divider isApllyTop />

        <ContainerText>
          <ContainerTextData>
            <TitleInformation>Passageiro</TitleInformation>
            <Information>{passenger.name}</Information>
          </ContainerTextData>

          <ContainerTextData>
            <TitleInformation textAlignRight>Assento</TitleInformation>
            <Information textAlignRight>{passenger.seat}</Information>
          </ContainerTextData>
        </ContainerText>

        <Divider isApllyBottom />
      </ContainerCard>
      <ContainerCard marginBottom20>
        <Divider isApllyTop />

        <ContainerText marginBottom24>
          <ContainerTextData>
            <TitleInformation>Embarque</TitleInformation>

            <ContainerButton>
              <Button marginBottom16>
                <Information isColorWhite>{boarding.boardingTime}</Information>
              </Button>
            </ContainerButton>

            <TitleInformation>Terminal</TitleInformation>
            <Information marginBottom16>
              {boarding.boardingTerminal}
            </Information>

            <TitleInformation>Portão</TitleInformation>
            <Information>{boarding.boardingGate}</Information>
          </ContainerTextData>
          <ContainerTextData>
            <ContainerQRCode>
              <QRCode url={boarding.boardingPassUrl} size={140} />
            </ContainerQRCode>
            <TitleInformation textAlignCenter>
              Grupo de embarque: {boarding.boardingGroup}
            </TitleInformation>
          </ContainerTextData>
        </ContainerText>
        <ContainerText justifyContentCenter>
          <Information>Atenção: </Information>
          <Information fontFamilyRegular>
            o portão fecha {boarding.boardingGateClosingTime}
          </Information>
        </ContainerText>
      </ContainerCard>
    </>
  )
}
