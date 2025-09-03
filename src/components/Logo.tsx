import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'light', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 lg:h-12',
    lg: 'h-16'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm lg:text-lg',
    lg: 'text-xl'
  };

  const subtextSizeClasses = {
    sm: 'text-xs',
    md: 'text-xs lg:text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <img
        src="https://i.ibb.co/F4VGSyHT/079bcc68-2dda-48aa-a508-46bb82e8f3ab.jpg"
        alt="ALCILE SERVICE Logo"
        className={`${sizeClasses[size]} w-auto object-contain hover:scale-110 transition-transform duration-300`}
      />
      
      {/* Logo Text */}
      <div>
        <div className={`font-bold ${textSizeClasses[size]} ${
          variant === 'light' ? 'text-white' : 'text-[#00499D]'
        }`}>
          ALCILE SERVICE
        </div>
        <div className={`${subtextSizeClasses[size]} ${
          variant === 'light' ? 'text-blue-200' : 'text-gray-600'
        }`}>
          BTP-FORMATION
        </div>
      </div>
    </div>
  );
};

export default Logo;