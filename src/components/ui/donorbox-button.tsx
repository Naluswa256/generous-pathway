
import React from 'react';

interface DonorboxButtonProps {
  className?: string;
}

export function DonorboxButton({ className }: DonorboxButtonProps) {
  return (
    <a
      href="https://donorbox.org/sharing-is-caring-7?"
      target="_blank"
      rel="noopener noreferrer"
      className={`dbox-donation-page-button ${className}`}
      style={{
        background: 'rgb(52, 152, 219)',
        color: 'rgb(255, 255, 255)',
        textDecoration: 'none',
        fontFamily: 'Verdana, sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: 'fit-content',
        fontSize: '16px',
        borderRadius: '5px',
        lineHeight: '24px',
        padding: '8px 24px',
      }}
    >
      <img src="https://donorbox.org/images/white_logo.svg" alt="Donorbox Logo" />
      Donate
    </a>
  );
}
