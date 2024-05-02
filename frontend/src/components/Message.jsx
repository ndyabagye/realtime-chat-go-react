import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

const Message = ({ message }) => {
  const [displayMessage, setDisplayMessage] = useState({});

  useEffect(() => {
    let temp = JSON.parse(message);
    setDisplayMessage(temp);
  }, [message]);

  return (
    <div className="flex bg-white mx-auto my-3 shadow-md py-3 px-5 rounded-md clear-both">
      {displayMessage.body}
    </div>
  );
};

Message.PropTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
