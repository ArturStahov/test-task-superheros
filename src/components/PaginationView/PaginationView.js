import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import { Container } from './StyledComponent';

export default function PaginationViews({ length, onHandlerChange }) {
  return (
    <Container>
      <Pagination
        defaultCurrent={1}
        total={length}
        defaultPageSize={5}
        onChange={pageNumber => onHandlerChange(pageNumber)}
      />
    </Container>
  );
}

PaginationViews.propTypes = {
  length: PropTypes.number.isRequired,
  onHandlerChange: PropTypes.func.isRequired,
};
