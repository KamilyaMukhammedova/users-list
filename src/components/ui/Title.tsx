import React from 'react';

interface IProps {
  titleName: string;
}

const Title: React.FC<IProps> = ({ titleName }) => {
  return <h1 className="text-center font-bold text-3xl">{titleName}</h1>;
};

export default Title;
