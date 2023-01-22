import styled from "styled-components";
import { memo } from "react";

const Container = styled.div.attrs(
  ({ leftTop, rightTop, leftBottom, rightBottom }) => ({
    style: {
      borderTopLeftRadius: leftTop ? leftTop : "0",
      borderTopRightRadius: rightTop ? rightTop : "0",
      borderBottomLeftRadius: leftBottom ? leftBottom : "0",
      borderBottomRightRadius: rightBottom ? rightBottom : "0",
    },
  })
)`
  background-color: #ff9466;
  width: 100%;
  height: 100%;
  min-height: 300px;
`;

const Preview = ({ leftTop, rightTop, leftBottom, rightBottom }) => {
  return (
    <Container
      leftTop={leftTop}
      rightTop={rightTop}
      leftBottom={leftBottom}
      rightBottom={rightBottom}
    ></Container>
  );
};

export default memo(Preview);
