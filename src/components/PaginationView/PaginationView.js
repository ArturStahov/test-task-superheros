import styled from 'styled-components';
import { Pagination } from 'antd';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export default function PaginationView({ total, onHandlerChange }) {
  return (
    <Container>
      <Pagination
        defaultCurrent={1}
        total={total}
        defaultPageSize={5}
        onChange={pageNumber => onHandlerChange(pageNumber)}
      />
    </Container>
  );
}
