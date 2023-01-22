import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px 11px;
  background: #626262;
  border-radius: 6px;
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  font-size: 0.9rem;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  margin-bottom: 30px;

  &:before {
    position: absolute;
    content: attr(aria-label);
    background-color: #000000d9;
    padding: 5px;
    border-radius: 4px;
    top: -37px;
    left: 0;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    overflow: hidden;
    pointer-events: none;
  }

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #000000d9;
    top: -13px;
    left: 21px;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    pointer-events: none;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
  }
`;

export { Container };
