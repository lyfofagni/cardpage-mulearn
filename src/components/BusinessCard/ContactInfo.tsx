import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
  website: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  phone,
  location,
  website,
}) => (
  <div className="space-y-2 text-sm">
    <div className="flex items-center gap-2">
      <Mail size={16} className="text-blue-600" />
      <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors">
        {email}
      </a>
    </div>
    <div className="flex items-center gap-2">
      <Phone size={16} className="text-blue-600" />
      <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors">
        {phone}
      </a>
    </div>
    <div className="flex items-center gap-2">
      <MapPin size={16} className="text-blue-600" />
      <span>{location}</span>
    </div>
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-blue-600" />
      <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
        {website.replace('https://', '')}
      </a>
    </div>
  </div>
);