import React from 'react';

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <title>Search Icon</title>
      <path d='M15.618 17.032a9 9 0 1 1 1.414-1.414l5.675 5.675a1 1 0 0 1-1.414 1.414l-5.675-5.675zm-.701-2.05a1.017 1.017 0 0 1 .065-.065 7 7 0 1 0-.066.066z' />
    </svg>
  );
}

export default SearchIcon;
