import { Section, Title } from './StyledComponent';

export default function Sections({ children, title }) {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
}
