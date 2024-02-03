import React from 'react';

type Props = {
  onClick?: () => void;
};

const ButtonArrowIcon = (props: Props) => {
  return (
    <div onClick={props.onClick}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white" />
        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#EAEAF5" />
        <path
          d="M15.1105 20.6663L10.666 15.9997M10.666 15.9997L15.1105 11.333M10.666 15.9997L21.3327 15.9997"
          stroke="#4F4EA6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default ButtonArrowIcon;
