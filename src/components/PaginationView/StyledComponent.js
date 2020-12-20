import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  & .ant-pagination {
    display: flex;
    justify-content: center;
  }

  & .ant-pagination-prev {
    min-width: 30px;
    height: 30px;
    .ant-pagination-item-link {
      background-color: #df8938;
      border: 2px solid #ffffff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition-property: box-shadow;
      transition-duration: 0.4s;
      &:hover {
        box-shadow: 2px 3px 10px 2px rgba(54, 187, 255, 0.69);
      }
      & .ant-pagination-disabled {
        background-color: #897c7c;
      }
    }
  }

  & .ant-pagination-next {
    min-width: 30px;
    height: 30px;
    .ant-pagination-item-link {
      background-color: #df8938;
      border: 2px solid #ffffff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition-property: box-shadow;
      transition-duration: 0.4s;
      &:hover {
        box-shadow: 2px 3px 10px 2px rgba(54, 187, 255, 0.69);
      }
    }
  }

  & .ant-pagination-item {
    min-width: 30px;
    height: 30px;
    background-color: #df8938;
    border: 2px solid #ffffff;
    border-radius: 50%;
    transition-property: transform;
    font-size: 1.4rem;
    font-weight: 700;
    transition-duration: 0.4s;
    &:hover,
    :focus {
      transform: scale(1.1);
      border: 2px solid #df3838;
    }
    & > a {
      color: #ffffff;
    }
  }

  & .ant-pagination-item-active {
    transform: scale(1.1);
    border: 2px solid #df3838;
    & > a {
      color: #df3838;
    }
  }
`;

export { Container };
