import { useState, memo } from "react";
import * as S from "./styles";

const CssOutputBox = ({ value }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 700);
  };

  const formatValue = (val) => {
    if (!val) return `0px`;
    const { leftTop, rightTop, leftBottom, rightBottom } = val;

    if (
      leftTop == rightTop &&
      leftBottom == rightTop &&
      rightBottom == leftTop
    ) {
      return `${leftTop}`;
    }

    return `${leftTop} ${rightTop} ${rightBottom} ${leftBottom}`;
  };

  return (
    <S.Container
      aria-label={copySuccess ? "copiado" : `Clique para copiar`}
      onClick={copyToClipboard}
    >
      border-radius: {formatValue(value)};
    </S.Container>
  );
};

export default memo(CssOutputBox);
