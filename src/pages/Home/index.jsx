import * as S from "./styles";
import CssOutputBox from "./components/CssOutputBox";
import Preview from "./components/Preview";
import InputLabel from "./components/InputLabel";
import { useState } from "react";

const Home = () => {
  const [currentValues, setCurrentValues] = useState({
    leftTop: "0",
    rightTop: "0",
    leftBottom: "0",
    rightBottom: "0",
  });

  return (
    <S.Container>
      <S.OctocatConrer>
        <a href="https://github.com/Gu-Parlandim" target="_blank" />
      </S.OctocatConrer>

      <S.Title>
        [Previewer] <span>border-radius:</span>
      </S.Title>

      <S.BorderRadiusBox>
        <CssOutputBox value={currentValues} />

        <S.InputGroup>
          <InputLabel
            label={"Top-Left"}
            name="leftTop"
            currentValue={currentValues}
            setCurrentValues={setCurrentValues}
          />
          <InputLabel
            label={"Top-Right"}
            name="rightTop"
            currentValue={currentValues}
            setCurrentValues={setCurrentValues}
          />
        </S.InputGroup>

        <Preview
          leftTop={currentValues.leftTop}
          rightTop={currentValues.rightTop}
          leftBottom={currentValues.leftBottom}
          rightBottom={currentValues.rightBottom}
        />

        <S.InputGroup className="bottom">
          <InputLabel
            bottom={true}
            name="leftBottom"
            label={"Bottom-Left"}
            currentValue={currentValues}
            setCurrentValues={setCurrentValues}
          />
          <InputLabel
            bottom={true}
            label={"Bottom-Right"}
            name="rightBottom"
            currentValue={currentValues}
            setCurrentValues={setCurrentValues}
          />
        </S.InputGroup>
      </S.BorderRadiusBox>
    </S.Container>
  );
};

export default Home;
