import React from 'react';

const Message = ({ name, message, time }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Message Sent</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">To: {name}</p>
          <p className="mt-2 text-gray-500">{message}</p>
          <p className="mt-2 text-gray-400 text-xs">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;