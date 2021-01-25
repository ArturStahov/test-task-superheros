import imgLogo from '../../images/logo/logo.png';
import GlitchClip from 'react-glitch-effect/core/Clip';
import PropTypes from 'prop-types';
import { LogoImage, LogoWrapper, Title } from './StyledComponent';

export default function Logo({ title }) {
  return (
    <LogoWrapper>
      <GlitchClip>
        <LogoImage src={imgLogo} alt="logotype" />
      </GlitchClip>
      <Title>{title}</Title>
    </LogoWrapper>
  );
}

Logo.propTypes = {
  title: PropTypes.string,
};
