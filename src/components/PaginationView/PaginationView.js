import { Pagination } from 'antd';
import { Container } from './StyledComponent';

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
