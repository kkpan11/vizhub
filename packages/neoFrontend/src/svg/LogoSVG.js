import React from 'react';

const viewBoxWidth = 800;
const viewBoxHeight = 237.402;

export const LogoSVG = ({ height, fill }) => (
  <svg height={height} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
    <path
      fill={fill}
      d="M 0,0 V 237.40234 H 448.91992 V 215.41797 H 21.984375 V 21.984375 H 778.01562 V 215.41797 H 503.60938 V 51.966797 h -34.68946 v 51.513673 h -50.09765 l 27.26171,27.25391 h 22.83594 V 237.40234 H 800 V 0 C 533.33333,0 266.66667,0 0,0 Z M 418.82227,103.48047 V 51.966797 H 384.125 V 185.43555 h 34.69727 z M 98.994141,51.960938 l -45.4375,0.0059 133.468749,133.468753 h 6.29492 V 51.966797 h -0.16601 v -0.0059 h -26.73828 v 0.0059 67.416013 l -66.792973,-67.416013 -0.0039,-0.0059 z m 114.943359,0 V 81.34375 h 32.21875 V 51.960938 Z m 427.20508,0.0059 V 185.43555 h 32.04687 v -13.39258 h 0.35352 c 5.811,8.98 16.72892,13.03125 27.29492,13.03125 26.941,0 45.60547,-22.18805 45.60547,-48.24805 0,-25.885 -18.48986,-48.072264 -45.25586,-48.072264 -10.389,0 -21.13105,3.874828 -27.99805,11.798824 V 51.966797 Z M 214.02344,94.740234 v 90.333986 h 32.04687 V 94.740234 Z m 53.14062,0 v 26.589846 h 42.43946 l -42.43946,63.74414 h 95.79297 v -26.58984 h -42.26172 l 42.26172,-63.744146 z m 257.46289,0 V 146.1582 c 0,29.76 20.95532,38.91602 48.07032,38.91602 27.119,0 48.07421,-9.15602 48.07421,-38.91602 V 94.740234 h -32.04687 v 45.255856 c 0,11.445 -2.81834,19.54493 -16.02734,19.54493 -13.205,0 -16.02344,-8.09993 -16.02344,-19.54493 V 94.740234 Z m 168.10938,21.835936 c 13.031,0 20.60156,9.33278 20.60156,20.42578 0,11.445 -7.56956,20.25 -20.60156,20.25 -13.032,0 -20.60352,-8.805 -20.60352,-20.25 0.001,-11.093 7.57252,-20.42578 20.60352,-20.42578 z"
    />
  </svg>
);