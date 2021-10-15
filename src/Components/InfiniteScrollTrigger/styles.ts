import styled from "styled-components";
interface TriggerProps {
  endOfList: boolean;
}

export const Trigger = styled.div<TriggerProps>`
  width: 100%;
  height: 10px;

  ${({ endOfList }) => {
    if (endOfList) return `height: 0px;`;
  }}

  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 100%;
  -webkit-animation: rainbow 3s ease infinite;
  -z-animation: rainbow 3s ease infinite;
  -o-animation: rainbow 3s ease infinite;
  animation: rainbow 3s ease infinite;

  @-webkit-keyframes rainbow {
    0% {
      background-position: 0px 820px;
    }
    50% {
      background-position: 5000px 190px;
    }
    100% {
      background-position: 0px 820px;
    }
  }
  @-moz-keyframes rainbow {
    0% {
      background-position: 0px 820px;
    }
    50% {
      background-position: 5000px 190px;
    }
    100% {
      background-position: 0px 820px;
    }
  }
  @-o-keyframes rainbow {
    0% {
      background-position: 0px 820px;
    }
    50% {
      background-position: 5000px 190px;
    }
    100% {
      background-position: 0px 820px;
    }
  }
  @keyframes rainbow {
    0% {
      background-position: 0px 820px;
    }
    50% {
      background-position: 5000px 190px;
    }
    100% {
      background-position: 0px 820px;
    }
  }
`;
