import React from 'react';

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 20, width = 20, className, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 24 24'
      height={height}
      width={width}
      fill='currentColor'
      className={className}
      {...otherProps}
    >
      <path d='M17 1c3.852 0 7 3.148 7 7 0 3.858-2.067 7.513-5.44 10.724C16.158 21.01 13.04 23 12 23s-4.158-1.99-6.56-4.276C2.067 15.514 0 11.858 0 8c0-3.852 3.148-7 7-7 1.917 0 3.688.79 5 2.13C13.312 1.79 15.083 1 17 1zm0 2c-1.677 0-3.205.854-4.176 2.267a1 1 0 0 1-1.648 0C10.205 3.854 8.676 3 7 3 4.252 3 2 5.252 2 8c0 3.215 1.804 6.406 4.82 9.276C8.86 19.218 11.652 21 12 21c.347 0 3.14-1.782 5.18-3.724C20.197 14.406 22 11.215 22 8c0-2.748-2.252-5-5-5z' />
    </svg>
  );
}

export default HeartIcon;
