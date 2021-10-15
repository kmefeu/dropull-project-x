import React, { useEffect, useRef } from "react";
import { Trigger } from "./styles";

interface InfiniteScrollTriggerInterface {
  functionToTrigger: () => void;
  loading: boolean;
  endOfList: boolean;
}

const InfiniteScrollTrigger: React.FC<InfiniteScrollTriggerInterface> = ({
  functionToTrigger,
  loading,
  endOfList,
}: InfiniteScrollTriggerInterface) => {
  const triggerElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading) return;

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        functionToTrigger();
      }
    });

    if (triggerElement.current)
      intersectionObserver.observe(triggerElement.current);

    return () => intersectionObserver.disconnect();
  }, [functionToTrigger, loading]);

  return <Trigger ref={triggerElement} endOfList={endOfList} />;
};

export default InfiniteScrollTrigger;
