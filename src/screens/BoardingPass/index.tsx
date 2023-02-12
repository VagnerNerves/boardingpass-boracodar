import {
  Container,
  ContainerText,
  ContainerTextData,
  Description,
  Divider,
  FlightInfo,
  IconAirplane,
  Information,
  PassangerInfo,
  Title,
  TitleAcronym,
  TitleInformation,
  TitleTime
} from './styles'

export function BoardingPass() {
  return (
    <Container>
      <Title>Cartão de Embarque</Title>

      <FlightInfo>
        <ContainerText marginBottom24>
          <ContainerTextData>
            <TitleInformation>Voo</TitleInformation>
            <Information>RS995</Information>
          </ContainerTextData>
          <ContainerTextData>
            <TitleInformation textAlignRight>Data</TitleInformation>
            <Information textAlignRight>23/05/2023</Information>
          </ContainerTextData>
        </ContainerText>
        <ContainerText>
          <ContainerTextData>
            <TitleInformation>São Paulo, Brasil</TitleInformation>
            <TitleAcronym>GRU</TitleAcronym>
            <TitleTime>17:00</TitleTime>
          </ContainerTextData>
          <ContainerTextData>
            <IconAirplane />
          </ContainerTextData>
          <ContainerTextData>
            <TitleInformation textAlignRight>
              São Francisco, EUA
            </TitleInformation>
            <TitleAcronym textAlignRight>SFO</TitleAcronym>
            <TitleTime textAlignRight>04:48</TitleTime>
          </ContainerTextData>
        </ContainerText>
      </FlightInfo>

      <PassangerInfo>
        <Divider isApllyTop />
        <ContainerText>
          <ContainerTextData>
            <TitleInformation>Passageiro</TitleInformation>
            <Information>Vagner Nerves</Information>
          </ContainerTextData>
          <ContainerTextData>
            <TitleInformation textAlignRight>Assento</TitleInformation>
            <Information textAlignRight>28A</Information>
          </ContainerTextData>
        </ContainerText>
        <Divider isApllyTop={false} />
      </PassangerInfo>

      <Description>
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </Description>
    </Container>
  )
}
