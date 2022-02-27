import React from 'react';

function CommentIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M24 10.408C24 15.966 19.667 20.497 11 24v-4h-1C4.477 20 0 15.523 0 10S4.477 0 10 0h4c5.523 0 10 4.477 10 10 0 .102-.002.203-.005.304.003.034.005.068.005.104zm-2 .036l-.007-.08.003-.12A8 8 0 0 0 14 2l-4 .001a8 8 0 1 0 0 16h2a1 1 0 0 1 1 1v1.926c6.09-2.975 8.983-6.48 9-10.482z' />
    </svg>
  );
}

export default CommentIcon;
