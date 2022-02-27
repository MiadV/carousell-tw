import React from 'react';

function VerticalDotsIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d='M6.95 13.45a1.44 1.44 0 0 1 2.1 0 1.44 1.44 0 0 1 0 2.1 1.44 1.44 0 0 1-2.1 0 1.44 1.44 0 0 1 0-2.1zm0-6a1.44 1.44 0 0 1 2.1 0 1.44 1.44 0 0 1 0 2.1 1.44 1.44 0 0 1-2.1 0 1.44 1.44 0 0 1 0-2.1zm2.1-3.9a1.44 1.44 0 0 1-2.1 0 1.44 1.44 0 0 1 0-2.1 1.44 1.44 0 0 1 2.1 0 1.44 1.44 0 0 1 0 2.1z'
        fillRule='nonzero'
      />
    </svg>
  );
}

export default VerticalDotsIcon;
