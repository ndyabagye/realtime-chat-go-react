import PropTypes from "prop-types";
import Message from "./Message";

const ChatHistory = ({ chatHistory }) => {
  const messages = chatHistory.map((msg, index) => (
    <Message key={index} message={msg.data} />
  ));

  return (
    <div className="bg-[#f7f7f7] m-0 p-5">
      <h2 className="m-0 p-0">ChatHistory</h2>
      {messages}
    </div>
  );
};

ChatHistory.propTypes = {
  chatHistory: PropTypes.array.isRequired,
};

export default ChatHistory;
