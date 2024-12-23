'use client';

import React, { useState } from 'react';

interface SocialMediaLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
  bgColor: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ href, icon, label, bgColor }) => {
  const [scale, setScale] = useState(1);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.3s ease, color 0.3s ease',
        transform: `scale(${scale})`,
      }}
      onMouseEnter={() => setScale(1.1)}
      onMouseLeave={() => setScale(1)}
    >
      <div
        style={{
          backgroundColor: bgColor,
          borderRadius: '50%',
          padding: '10px',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </div>
      <span style={{ color: '#fff', fontSize: '14px', fontFamily: "'Roboto', sans-serif" }}>{label}</span>
    </a>
  );
};

export default SocialMediaLink;
