import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
      <div className="flex flex-col items-center justify-center my-7">
        <div className="text-center">
          <p className="text-3xl font-bold mb-4">Page not found</p>
          <button
              onClick={() => navigate('/')}
              className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Back home
          </button>
        </div>
      </div>
  );
};

export default NotFound;
