

import React from 'react';
import ServiceBox from './ServiceBox';

const ServiceBoxes = () => {
  const services = [
    {
      id: 1,
      icon: 'shipping',
      title: 'Free Shipping',
      description: 'Free Shipping for orders over £130.'
    },
    {
      id: 2,
      icon: 'return',
      title: 'Money Guarantee',
      description: 'Within 30 days for an exchange.'
    },
    {
      id: 3,
      icon: 'support',
      title: 'Online Support',
      description: '24/7 customer support available.'
    },
    {
      id: 4,
      icon: 'payment',
      title: 'Flexible Payment',
      description: 'Pay with Multiple Credit Cards.'
    }
  ];

  return (
    <section className="py-[20px] bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceBox
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;

