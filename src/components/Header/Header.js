import { Header, Container } from './StyledComponent';

export default function Headers({ children }) {
  return (
    <Header>
      <Container>{children}</Container>
    </Header>
  );
}
