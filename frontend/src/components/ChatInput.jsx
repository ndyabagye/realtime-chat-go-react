import PropTypes from "prop-types";

const ChatInput = ({ send }) => {
  return (
    <div className="w-full bg-red-500 py-2 flex items-center">
      <input
        type="text"
        className="p-3 m-0 text-lg border border-none border-[rgba(0,0,0,0.1)] w-96 rounded-md shadow-md mx-auto"
        onKeyDown={send}
      />
    </div>
  );
};

ChatInput.PropTypes = {
  send: PropTypes.func.isRequired,
};

export default ChatInput;
