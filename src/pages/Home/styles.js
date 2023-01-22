import styled from "styled-components";
import Icon from "../../Icons/Octocat";
import { reactSvg } from "../../Icons/Octocat";

const Container = styled.main`
  background: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

const OctocatConrer = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: red;
  top: 0;
  right: 0;
  overflow: hidden;
  background: var(--color-orange);

  :before {
    content: "";
    background: transparent;
    width: 0;
    height: 0;
    position: absolute;

    border-left: 44px solid transparent;
    border-right: 44px solid transparent;
    border-top: 44px solid var(--color-background);
    bottom: -7px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    left: -29px;
  }

  :after {
    position: absolute;
    left: 50%;
    right: 50%;
    content: url(${reactSvg(Icon, { color: "#222222" })});
    transform: rotate(45deg) translate(32%, 18%);
    width: 18px;
    height: 28px;
    box-sizing: border-box;
  }

  a {
    z-index: 2;
    width: 52%;
    height: 52%;
    position: absolute;
    background: transparent;
    right: 0;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 3rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  text-align: center;
  color: var(--colo-blossom);
  margin: 33px 40px;

  & span {
    display: block;
    font-weight: 700;
    font-family: "Ubuntu Mono", monospace;
    font-size: inherit;
  }
`;

const BorderRadiusBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;

  &.bottom {
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;

export { Container, OctocatConrer, Title, BorderRadiusBox, InputGroup };
