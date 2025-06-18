import React from 'react';
import { FiTruck, FiRefreshCw, FiHeadphones, FiCreditCard } from 'react-icons/fi';

const ServiceBox = ({ icon, title, description }) => {
  
  // Map icon names to actual icons
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'shipping':
        return <FiTruck className="text-2xl" />;
      case 'return':
        return <FiRefreshCw className="text-2xl" />;
      case 'support':
        return <FiHeadphones className="text-2xl" />;
      case 'payment':
        return <FiCreditCard className="text-2xl" />;
      default:
        return <FiTruck className="text-2xl" />;
    }
  };

  return (
    <div className="iconbox flex items-start p-4">
      <div className="iconbox-icon bg-gray-100 p-3 rounded-full mr-4">
        {getIcon(icon)}
      </div>
      <div className="iconbox-detail">
        <h4 className="entry-title font-medium text-lg mb-1">{title}</h4>
        <div className="entry-description">
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;