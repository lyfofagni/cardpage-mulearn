import React from 'react';

interface AvatarProps {
  imageUrl: string;
  name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imageUrl, name }) => (
  <div className="relative">
    <img
      src={imageUrl}
      alt={name}
      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
    />
  </div>
);