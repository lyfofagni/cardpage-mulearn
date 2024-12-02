import React from 'react';
import { Avatar } from './Avatar';
import { ContactInfo } from './ContactInfo';

export const BusinessCard: React.FC = () => (
  <div className="w-[400px] bg-white rounded-xl shadow-2xl overflow-hidden">
    <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600" />
    <div className="px-6 pb-6">
      <div className="flex flex-col items-center -mt-12">
        <Avatar
          imageUrl="https://media.licdn.com/dms/image/v2/D5603AQGhoEkjeU0tpQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730402817190?e=1738800000&v=beta&t=UMY6_YjG2vdr3vJw0aPImJ_t22iIXC7RTE-av_t3RJg"
          name="Agnivesh PS"
        />
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Agnivesh PS</h2>
          <p className="text-blue-600 font-medium">Graphic & UI Designer</p>
        </div>
        <div className="mt-6 w-full">
          <ContactInfo
            email="agniveshpriyadarsanan@gmail.com"
            phone="8891514XXX"
            location="Technopark, India"
            website="https://bento.me/lyfofagni"
          />
        </div>
      </div>
    </div>
  </div>
);