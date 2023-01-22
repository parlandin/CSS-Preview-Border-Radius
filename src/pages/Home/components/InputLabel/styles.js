import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 95px;
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  color: #f7f7f7;
  font-weight: 400;
  margin-bottom: 4px;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  max-width: 90px;
  height: 25px;
  font-size: 0.9rem;
  border: none;
  outline: none;
  color: #222222;
  background: #f7f7f7;
  //border: 1px solid #9e9e9e;
  border-radius: 6px;
  text-align: center;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
`;

const RangeInputBox = styled.div`
  position: absolute;
  border-radius: 6px;
  background: white;
  width: 200px;
  height: 39px;
  top: -26px;
  display: none;

  & span {
    display: block;
    font-size: 0.6rem;
    color: #222222;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    margin: 3px;
  }

  & input {
    width: 96%;
  }

  &.bottom {
    top: initial;
    bottom: 33px;
  }

  &.active {
    display: block;
  }
`;

export { Container, Label, Input, RangeInputBox };
