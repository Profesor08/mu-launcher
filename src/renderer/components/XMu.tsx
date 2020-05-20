import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const flipY = keyframes`
  0% {
    transform: rotate3d(0, 1, 0, 0);
  }

  100% {
    transform: rotate3d(0, 1, 0, 360deg);
  }
`;

const tada = keyframes`
  0% {
    transform: scaleX(1);
  }

  10%, 20% {
    transform: scale3d(.9,.9,.9) rotate(-3deg);
  }

  30%, 50%, 70%, 90% {
      transform: scale3d(1.1,1.1,1.1) rotate(3deg);
  }

  40%, 60%, 80% {
      transform: scale3d(1.1,1.1,1.1) rotate(-3deg);
  }

  100% {
      transform: scaleX(1);
  }
`;

const rubber = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(0.75, 1.25, 1);
  }

  40% {
    transform: scale3d(1.25, 0.75, 1);
  }

  50% {
    transform: scale3d(0.85, 1.15, 1);
  }

  65% {
    transform: scale3d(1.05, 0.95, 1);
  }

  75% {
    transform: scale3d(0.95, 1.05, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

const animations = [
  {
    delay: 5000,
    style: css``,
  },
  {
    delay: 2000,
    style: css`
      animation: ${tada} 0.8s ease-in-out;
    `,
  },
  {
    delay: 3000,
    style: css`
      animation: ${flipY} 0.8s ease-in-out 0s 1;
    `,
  },
  {
    delay: 5000,
    style: css`
      animation: ${rubber} 1s ease-in-out 0s 1;
    `,
  },
];

interface IXMuContainer {
  animation: number;
}

const XMuContainer = styled.div<IXMuContainer>`
  position: absolute;
  top: 60px;
  left: 30px;
  user-select: none;
  transform-style: preserve-3d;
  perspective: 300px;
  ${(props) => animations[props.animation].style}

  pointer-events: none;
`;

export const XMuImage = styled.img.attrs({
  src: "assets/images/x-mu.png",
})`
  transform: translateZ(50px) scale(0.7);
`;

export const XMu = ({ style, ...props }: any) => {
  const [nextStyle, setNextStyle] = useState(0);

  useEffect(() => {
    const next = nextStyle + 1 < animations.length ? nextStyle + 1 : 0;

    setTimeout(() => {
      setNextStyle(next);
    }, animations[next].delay);
  }, [nextStyle]);

  return (
    <XMuContainer animation={nextStyle}>
      <XMuImage {...props} />
    </XMuContainer>
  );
};
