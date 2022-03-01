import React from 'react';

function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 24, width = 24, className, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 36 36'
      height={height}
      width={width}
      className={className}
      {...otherProps}
    >
      <path
        d='M11.5442 28.7887C11.5442 28.7887 10.5263 29.4553 10.6463 30.2811C10.7845 31.2307 11.4751 31.0926 11.4751 31.0926L21.8556 31.1358C21.8556 31.1358 22.8254 31.1753 22.699 30.0527C22.6084 29.2494 21.7433 28.8061 21.7433 28.8061L11.5442 28.7887Z'
        fill='#00AECC'
      />
      <path
        d='M12.9515 27.4624C12.9515 27.4624 12.8699 26.6035 12.0364 26.5646C10.5819 26.4968 10.654 27.3934 10.654 27.3934L10.6108 30.2524C10.6108 30.2524 10.5712 31.2222 11.6939 31.0957C12.4972 31.0053 12.9343 30.1402 12.9343 30.1402L12.9185 29.2651L12.9515 27.4624Z'
        fill='#00AECC'
      />
      <path
        d='M22.7189 25.0865C22.7189 25.0865 22.6374 24.2276 21.8039 24.1886C20.3494 24.1208 20.4213 25.0174 20.4213 25.0174L20.3782 30.2524C20.3782 30.2524 20.3386 31.2222 21.4613 31.0957C22.2646 31.0053 22.7016 30.1402 22.7016 30.1402L22.6859 29.2651L22.7189 25.0865Z'
        fill='#00AECC'
      />
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d='M20.2028 5.06844C20.1153 4.86954 19.6279 5.15796 19.5431 5.24432C18.8246 5.97743 18.1059 6.71041 17.3872 7.44339C17.3217 7.49182 17.2766 7.54303 17.2649 7.59297C17.2647 7.59398 17.265 7.59449 17.2648 7.5955C17.2606 7.61497 17.2553 7.63457 17.2633 7.65253C19.8455 13.5161 22.4277 19.3796 25.0099 25.2431C25.0321 25.2939 25.1168 25.2961 25.1593 25.2946C26.215 25.2583 27.2705 25.222 28.326 25.1858C28.4479 25.1818 28.9851 25.0109 28.8978 24.8127C25.9995 18.2311 23.1011 11.6497 20.2028 5.06844Z'
          fill='#00AECC'
        />
      </g>
      <path
        d='M17.9846 7.33119C17.8823 7.09879 17.4756 7.24964 17.3558 7.38C14.5201 10.4628 9.35651 14.1695 3.37949 19.0673C3.28757 19.1403 3.23497 19.2338 3.25305 19.3296C3.25318 19.3303 3.25318 19.331 3.2533 19.3316C3.25596 19.3452 3.25191 19.3584 3.25773 19.372C4.47296 22.1582 5.68806 24.9444 6.90317 27.7304C6.94818 27.8335 7.07197 27.8504 7.16794 27.844C13.344 27.4338 23.6779 25.5246 25.2746 25.357C25.4527 25.3381 25.833 25.1528 25.7312 24.9216L17.9846 7.33119Z'
        fill='#33E1FF'
      />
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d='M4.44928 19.4785C4.3915 19.3424 4.08513 19.4577 4.00939 19.4898C2.76356 20.0186 2.41521 20.1259 1.16951 20.6546C1.14536 20.6648 1.1293 20.6764 1.10844 20.6872C1.09643 20.6929 1.0834 20.6964 1.0719 20.703C1.06153 20.7088 1.05407 20.7156 1.04383 20.7216C1.03561 20.7269 1.02777 20.7319 1.02031 20.7373C-0.0418001 21.3671 -0.217807 22.2629 0.230555 23.3841C0.606845 24.3248 2.08305 28.1282 3.23607 28.3284C4.04062 28.4683 4.82254 28.007 5.53858 27.7033C6.41633 27.3308 6.39648 27.3795 7.27411 27.007C7.35883 26.9711 7.64256 26.831 7.58516 26.6956C6.92438 25.1384 5.11006 21.0357 4.44928 19.4785Z'
          fill='#00AECC'
        />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d='M26.2469 12.4488C25.4733 11.7152 23.2918 10.8847 22.2567 11.6726C22.1236 11.7248 22.0181 11.8126 22.0025 11.9142C21.9839 11.9604 21.9853 11.9979 22.0088 12.0249C22.1775 13.2339 22.8569 14.4743 23.282 15.6163C23.578 16.4111 23.8737 17.2061 24.1697 18.001C24.2528 18.2242 24.3947 19.0089 24.6351 19.1807C25.7964 20.0104 27.3356 17.5577 27.571 16.6889C27.9024 15.4657 27.1703 13.3243 26.2469 12.4488Z'
          fill='#FF2636'
        />
      </g>
      <path
        d='M29.0568 9.21281C29.6814 8.00694 30.3681 6.96101 31.2045 5.89182C31.6453 5.32878 30.7119 5.2452 30.3711 5.28819C29.6824 5.37518 28.869 5.6995 28.4287 6.26217C27.5923 7.33123 26.9056 8.37716 26.281 9.58316C25.9739 10.1757 26.6686 10.2431 27.1145 10.1868C27.6915 10.1138 28.7559 9.79381 29.0568 9.21281Z'
        fill='#FF2636'
      />
      <path
        d='M30.3309 13.7895C31.7918 13.1257 33.2971 12.5995 34.8015 12.046C35.301 11.8623 36.1929 11.3062 35.9627 10.6495C35.7316 9.98972 34.6226 10.2014 34.1684 10.3684C32.6638 10.9221 31.1586 11.4481 29.6977 12.112C29.2123 12.3326 28.2975 12.8264 28.5366 13.5086C28.759 14.1438 29.8898 13.99 30.3309 13.7895Z'
        fill='#FF2636'
      />
      <path
        d='M29.1883 18.5895C30.4765 19.012 31.7389 19.3372 33.086 19.5097C33.7985 19.6008 34.6968 19.2516 35.1758 18.7208C35.6114 18.2382 35.4231 17.763 34.7834 17.6811C33.6236 17.5327 32.5698 17.248 31.4603 16.8841C30.7697 16.6576 29.8953 16.9591 29.3387 17.3835C28.9729 17.6627 28.4885 18.3602 29.1883 18.5895Z'
        fill='#FF2636'
      />
    </svg>
  );
}

export default AlertIcon;