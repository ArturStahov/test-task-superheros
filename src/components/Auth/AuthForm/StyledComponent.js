import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inputText: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    fontSize: '1.8rem',
    color: 'white',
  },

  buttonSubmit: {
    height: '40px',
    width: '80%',
    fontSize: '1.7rem',
  },
}));

const Form = styled.form`
  padding-top: 20px;
  width: 280px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export { Form, useStyles };
