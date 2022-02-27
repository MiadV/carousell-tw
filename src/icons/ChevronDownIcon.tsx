import React from 'react';

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z' />
    </svg>
  );
}

export default ChevronDownIcon;
