import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-dark-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button href="/">
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;