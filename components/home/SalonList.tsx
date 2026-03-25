import React from 'react';
import SalonCard from './SalonCard';

interface SalonListProps {
  salons: any[];
}

const SalonList: React.FC<SalonListProps> = ({ salons }) => {
  return (
    <>
      {salons.map((salon) => (
        <SalonCard
          key={salon.id}
          name={salon.name}
          description={salon.description}
          address={salon.address}
          rating={typeof salon.rating === 'string' ? parseFloat(salon.rating) : salon.rating}
          image_url={salon.image_url}
          tags={salon.tags}
        />
      ))}
    </>
  );
};

export default SalonList;
