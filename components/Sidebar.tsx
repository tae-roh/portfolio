import React from 'react';
import { RESUME_DATA } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-start w-full md:w-64 shrink-0">
      {/* Profile Image - Grayscale */}
      <div className="w-40 h-52 bg-gray-200 mb-8 overflow-hidden grayscale">
        <img 
          src="https://picsum.photos/400/500" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Names */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
        {RESUME_DATA.name}
      </h1>
      <div className="flex flex-col mb-8">
        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
          {RESUME_DATA.enName}
        </span>
      </div>

      {/* Personal Details */}
      <div className="space-y-1 text-sm text-gray-600 mb-8 font-medium">
        <p>{RESUME_DATA.birthdate}</p>
        <p>{RESUME_DATA.contacts.find(c => c.type === 'phone')?.value}</p>
        <p>
            <a href={RESUME_DATA.contacts.find(c => c.type === 'email')?.link} className="hover:text-black hover:underline">
                {RESUME_DATA.contacts.find(c => c.type === 'email')?.value}
            </a>
        </p>
        <p>
            <a href={RESUME_DATA.contacts.find(c => c.type === 'github')?.link} className="hover:text-black hover:underline">
             {RESUME_DATA.contacts.find(c => c.type === 'github')?.value}
            </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;