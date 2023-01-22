import { useState, memo } from "react";
import * as S from "./styles";

const InputLabel = ({
  label,
  bottom,
  name,
  currentValue,
  setCurrentValues,
}) => {
  //const [isActive, setIsActive] = useState(false);
  const [isRangeActive, setIsRangeActive] = useState({
    visible: false,
    active: false,
  });

  const changeValue = (e) => {
    const value = e.target.value;
    setCurrentValues({
      ...currentValue,
      [name]: value == 0 ? "0" : `${value}px`,
    });
  };

  const changeVisibility = (bol) => {
    if (isRangeActive.active) {
      return;
    }

    if (isRangeActive.visible) {
      setTimeout(() => {
        return setIsRangeActive({ visible: false, active: false });
      }, 200);
    }

    setIsRangeActive((prev) => ({ ...prev, visible: true }));
  };

  const changeVisibilityRange = (bol) => {
    if (isRangeActive.active) {
      return setIsRangeActive({ visible: false, active: false });
    }

    setIsRangeActive((prev) => ({ ...prev, active: true, visible: true }));
  };

  return (
    <S.Container
      onMouseEnter={() => changeVisibility(true)}
      onMouseLeave={() =>
        !isRangeActive.visible ? null : changeVisibility(false)
      }
    >
      <S.Label>{label}</S.Label>
      <S.Input
        type="number"
        name={name}
        value={currentValue[name].replace("px", "")}
        onChange={changeValue}
      />

      <S.RangeInputBox
        className={`${bottom ? "bottom" : ""} ${
          isRangeActive.visible ? "active" : "none"
        }`}
        onMouseEnter={() => changeVisibilityRange(true)}
        onMouseLeave={() => changeVisibilityRange(false)}
      >
        <span>{label}</span>
        <input
          type="range"
          min="0"
          max="500"
          value={currentValue[name].replace("px", "")}
          onChange={changeValue}
          name={name}
        />
      </S.RangeInputBox>
    </S.Container>
  );
};

export default memo(InputLabel);
