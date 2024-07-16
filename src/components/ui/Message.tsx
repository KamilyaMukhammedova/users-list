import React from 'react';

interface IProps {
    text: string;
}

const Message: React.FC<IProps> = ({ text }) => {
    return <p className="bg-gray-50 p-7 text-center rounded shadow">{text}</p>;
};

export default Message;
