import styled from 'styled-components';

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;
const FormGroup = styled.label`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 5px;
  position: relative;
`;
const Label = styled.span`
  font-size: 1.4rem;
  color: #9a3535;
  font-weight: 700;
  width: 100%;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 28px;
  border: 3px solid #5546d0;
  background-color: #aba6d2;
  border-radius: 1rem;
  padding-left: 10px;
  outline: none;
  margin-right: 10px;
  caret-color: #ff9200;
  &:focus {
    box-shadow: inset 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export default function FormCreateHeros() {
  return (
    <Form>
      <FormGroup>
        <Label>Телефон</Label>
        <Input type="text" />
      </FormGroup>
    </Form>
  );
}
