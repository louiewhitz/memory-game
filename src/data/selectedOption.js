// import React, { useState } from 'react';
// import Icon from './Icon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar, faPaperPlane, faEarthAmerica, faThumbsUp, faSeedling, faHatWizard, faUmbrella, faBicycle, faGift, faPalette, faFish, faMoon, faSun, faFeather, faHeart, faSmileWink, faHamburger, faTableTennis } from '@fortawesome/free-solid-svg-icons'

export const selectedOption = [
  {
    number: '1',
    icon: (
      <FontAwesomeIcon
        icon={faStar}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={1}
      />
    ),
    status: 'hidden',
  },

  {
    number: '2',
    icon: (
      <FontAwesomeIcon
        icon={faEnvelope}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={2}
      />
    ),
    status: 'hidden',
  },

  {
    number: '3',
    icon: (
      <FontAwesomeIcon
        icon={faUmbrella}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={3}
      />
    ),
    status: 'hidden',
  },

  {
    number: '4',
    icon: (
      <FontAwesomeIcon
        icon={faSeedling}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={4}
      />
    ),
    status: 'hidden',
  },

  {
    number: '5',
    icon: (
      <FontAwesomeIcon
        icon={faThumbsUp}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={5}
      />
    ),
    status: 'hidden',
  },

  {
    number: '6',
    icon: (
      <FontAwesomeIcon
        icon={faHatWizard}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={6}
      />
    ),
    status: 'hidden',
  },
  {
    number: '7',
    icon: (
      <FontAwesomeIcon
        icon={faPaperPlane}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={7}
      />
    ),
    status: 'hidden',
  },
  {
    number: '8',
    icon: (
      <FontAwesomeIcon
        icon={faEarthAmerica}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={7}
      />
    ),
    status: 'hidden',
  },
  {
    number: '8',
    icon: (
      <FontAwesomeIcon
        icon={faBicycle}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={8}
      />
    ),
    status: 'hidden',
  },

  {
    number: '9',
    icon: (
      <FontAwesomeIcon
        icon={faGift}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={9}
      />
    ),
    status: 'hidden',
  },
  {
    number: '10',
    icon: (
      <FontAwesomeIcon
        icon={faSun}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={10}
      />
    ),
    status: 'hidden',
  },
  {
    number: '11',
    icon: (
      <FontAwesomeIcon
        icon={faPalette}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={11}
      />
    ),
    status: 'hidden',
  },
  {
    number: '12',
    icon: (
      <FontAwesomeIcon
        icon={faFeather}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={12}
      />
    ),
    status: 'hidden',
  },
  {
    number: '13',
    icon: (
      <FontAwesomeIcon
        icon={faMoon}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={13}
      />
    ),
    status: 'hidden',
  },
  {
    number: '14',
    icon: (
      <FontAwesomeIcon
        icon={faSmileWink}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={14}
      />
    ),
    status: 'hidden',
  },
  {
    number: '15',
    icon: (
      <FontAwesomeIcon
        icon={faFish}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={15}
      />
    ),
    status: 'hidden',
  },
  {
    number: '16',
    icon: (
      <FontAwesomeIcon
        icon={faHeart}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={16}
      />
    ),
    status: 'hidden',
  },
  {
    number: '17',
    icon: (
      <FontAwesomeIcon
        icon={faHamburger}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={17}
      />
    ),
    status: 'hidden',
  },
  {
    number: '18',
    icon: (
      <FontAwesomeIcon
        icon={faTableTennis}
        style={{
          pointerEvents: 'none',
          width: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
          height: 'clamp(0.88rem, calc(-0.12rem + 5vw), 3.75rem)',
        }}
        key={18}
      />
    ),
    status: 'hidden',
  },
];
//   return (
//     <div className="container">
//      { icons.map((icon) => (
//         <Icon key={icon.id} icon={icon} />
//       ))}
//     </div>
//   );
// }


