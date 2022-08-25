import { Image } from '@chakra-ui/image';

import { Container } from './styles';
import { Props } from './types';

export function Avatar({ src, className }: Props) {
  return (
    <Container className={className}>
      <Image src={src} alt="Avatar" />
    </Container>
  );
}
