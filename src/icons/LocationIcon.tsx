import React from 'react';

function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 20, width = 20, className, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 16 16'
      height={height}
      width={width}
      fill='currentColor'
      className={className}
      {...otherProps}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.86 7.33a6 6 0 10-11.72 0 13.79 13.79 0 002.71 5.41 26.13 26.13 0 002.81 3.13c.2.17.49.17.68 0a12.24 12.24 0 00.88-.88c.66-.68 1.31-1.44 1.93-2.25a13.79 13.79 0 002.71-5.4zM8.5 14.3l-.5.5a22.98 22.98 0 01-2.35-2.66 12.88 12.88 0 01-2.53-5 5 5 0 119.76 0 12.88 12.88 0 01-2.53 5c-.59.77-1.22 1.5-1.85 2.16zM8 9a3 3 0 110-6 3 3 0 010 6zm2-3a2 2 0 11-4 0 2 2 0 014 0z'
      />
    </svg>
  );
}

export default LocationIcon;
