import React from 'react';
import OverMenu from './OverMenu';

function Menu({ handleSelectArticle }) {
  const menuItems = [
    {
      id: 1,
      title: 'Menu 1',
      subitems: [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
      ],
    },
    {
      id: 2,
      title: 'Menu 2',
      subitems: [
        { id: 4, title: 'Item 4' },
        { id: 5, title: 'Item 5' },
      ],
    },
  ];

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <OverMenu
          key={item.id}
          title={item.title}
          subitems={item.subitems}
          handleSelectArticle={handleSelectArticle}
        />
      ))}
    </div>
  );
}

export default Menu;