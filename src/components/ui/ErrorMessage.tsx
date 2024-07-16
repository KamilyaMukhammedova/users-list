import React from 'react';

interface IProps {
    text: string;
}

const ErrorMessage: React.FC<IProps> = ({ text }) => {
    return (
        <div className="p-7 bg-red-500 rounded shadow text-center text-white">
            {text}
        </div>
    );
};

export default ErrorMessage;
