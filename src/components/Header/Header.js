import imgLogo from '../../images/logo/logo.png';
import GlitchClip from 'react-glitch-effect/core/Clip';
import {
  Title,
  LogoImage,
  LogoWrapper,
  Header,
  Container,
} from './StyledComponent';

export default function Headers({ title, children }) {
  return (
    <Header>
      <Container>
        {children}
        <LogoWrapper>
          <GlitchClip>
            <LogoImage src={imgLogo} alt="logotype" />
          </GlitchClip>
          <Title>{title}</Title>
        </LogoWrapper>
      </Container>
    </Header>
  );
}
