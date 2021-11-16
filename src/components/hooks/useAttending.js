import { useState } from "react";

const useAttending = (props) => {
  const [attending, setAttending] = useState(props);

  const handleAttending = () => {
    setAttending(!attending);
  };

  return [attending, handleAttending];
};

export default useAttending;
