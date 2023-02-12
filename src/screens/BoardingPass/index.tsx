import { QRCode } from '../../components/QRCode'

import {
  ButtonText,
  Container,
  ContainerButton,
  ContainerCard,
  ContainerLinearGradient,
  ContainerQRCode,
  ContainerText,
  ContainerTextData,
  Description,
  Divider,
  IconAirplane,
  Information,
  Title,
  TitleAcronym,
  TitleInformation,
  TitleTime
} from './styles'

export function BoardingPass() {
  return (
    <Container>
      <ContainerLinearGradient />

      <Title>Cartão de Embarque</Title>

      <ContainerCard marginTop20>
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

        <Divider isApllyBottom />
      </ContainerCard>

      <ContainerCard>
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

        <Divider isApllyBottom />
      </ContainerCard>

      <ContainerCard marginBottom20>
        <Divider isApllyTop />

        <ContainerText marginBottom24>
          <ContainerTextData>
            <TitleInformation>Embarque</TitleInformation>

            <ContainerButton>
              <ButtonText marginBottom16>
                <Information isColorWhite>16:15</Information>
              </ButtonText>
            </ContainerButton>

            <TitleInformation>Terminal</TitleInformation>
            <Information marginBottom16>2</Information>

            <TitleInformation>Portão</TitleInformation>
            <Information>15</Information>
          </ContainerTextData>
          <ContainerTextData>
            <ContainerQRCode>
              <QRCode url="https://github.com/VagnerNerves" size={140} />
            </ContainerQRCode>
            <TitleInformation textAlignCenter>
              Grupo de embarque: 3
            </TitleInformation>
          </ContainerTextData>
        </ContainerText>
        <ContainerText justifyContentCenter>
          <Information>Atenção: </Information>
          <Information fontFamilyRegular>o portão fecha 16:45</Information>
        </ContainerText>
      </ContainerCard>

      <Description>
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </Description>
    </Container>
  )
}
