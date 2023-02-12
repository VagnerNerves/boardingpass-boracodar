import { Container } from './styles'

interface QRCodeProps {
  url: string
  size: number
}
export function QRCode({ url, size }: QRCodeProps) {
  return <Container value={url} size={size} />
}
