import React, {useState } from "react";
import Icon from "./Icon";

function Icons() {
    const [icons, setIcons] = useState([
      { id: 1, name: 'star', iconClassName: 'fa-solid fa-star', stat: '' },
      { id: 1, name: 'star', iconClassName: 'fa-solid fa-star', stat: '' },
      {
        id: 2,
        name: 'seedling',
        iconClassName: 'fa-solid fa-seedling',
        stat: '',
      },
      {
        id: 2,
        name: 'seedling',
        iconClassName: 'fa-solid fa-seedling',
        stat: '',
      },
      {
        id: 3,
        name: 'earth-america',
        iconClassName: 'fa-solid fa-earth-america',
        stat: '',
      },
      {
        id: 3,
        name: 'earth-america',
        iconClassName: 'fa-solid fa-earth-america',
        stat: '',
      },
      {
        id: 4,
        name: 'paper-plane',
        iconClassName: 'fa-solid fa-paper-plane',
        stat: '',
      },
      {
        id: 4,
        name: 'paper-plane',
        iconClassName: 'fa-solid fa-paper-plane',
        stat: '',
      },
      {
        id: 5,
        name: 'thumbs-up',
        iconClassName: 'fa-solid fa-thumbs-up',
        stat: '',
      },
      {
        id: 5,
        name: 'thumbs-up',
        iconClassName: 'fa-solid fa-thumbs-up',
        stat: '',
      },
      {
        id: 6,
        name: 'hat-wizard',
        iconClassName: 'fa-solid fa-hat-wizard',
        stat: '',
      },
      {
        id: 6,
        name: 'hat-wizard',
        iconClassName: 'fa-solid fa-hat-wizard',
        stat: '',
      },
      { id: 8, name: 'heart', iconClassName: 'fa-solid fa-heart', stat: '' },
      { id: 8, name: 'heart', iconClassName: 'fa-solid fa-heart', stat: '' },
      { id: 9, name: 'umbrella', iconClassName: 'fa-solid fa-umbrella', stat: '' },
      { id: 9, name: 'umbrella', iconClassName: 'fa-solid fa-umbrella', stat: '' },
        { id: 10, name: 'gift', iconClassName: 'fa-solid fa-gift', stat: '' },
        { id: 10, name: 'gift', iconClassName: 'fa-solid fa-gift', stat: '' },
        { id: 11, name: 'bicycle', iconClassName: 'fa-solid fa-bicycle', stat: '' },
        { id: 11, name: 'bicycle', iconClassName: 'fa-solid fa-bicycle', stat: '' },
        { id: 12, name: 'palette', iconClassName: 'fa-solid fa-palette', stat: '' },
        { id: 12, name: 'palette', iconClassName: 'fa-solid fa-palette', stat: '' },
        { id: 13, name: 'feather', iconClassName: 'fa-solid fa-feather', stat: '' },
        { id: 13, name: 'feather', iconClassName: 'fa-solid fa-feather', stat: '' },
        { id: 14, name: 'sun', iconClassName: 'fa-solid fa-sun', stat: '' },
        { id: 14, name: 'sun', iconClassName: 'fa-solid fa-sun', stat: '' },
        { id: 15, name: 'fish', iconClassName: 'fa-solid fa-fish', stat: '' },
        { id: 15, name: 'fish', iconClassName: 'fa-solid fa-fish', stat: '' },
        { id: 16, name: 'moon', iconClassName: 'fa-solid fa-moon', stat: '' },
        { id: 16, name: 'moon', iconClassName: 'fa-solid fa-moon', stat: '' }
    ]);
    return (
      <div className="container">
        <Icon />
      </div>
    )
}

export default Icons;