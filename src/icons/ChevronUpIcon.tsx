import React from 'react';

function ChevronUpIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 24, width = 24, className, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 24 24'
      height={height}
      width={width}
      fill='currentColor'
      className={className}
      {...otherProps}
    >
      <path d='m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z' />
    </svg>
  );
}

export default ChevronUpIcon;
