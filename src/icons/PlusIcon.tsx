import React from 'react';

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M13.5 11h9a1 1 0 110 2h-9v9a1 1 0 11-2 0v-9h-9a1 1 0 110-2h9V2a1 1 0 112 0v9z' />
    </svg>
  );
}

export default PlusIcon;
