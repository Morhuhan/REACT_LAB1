import React, { useState } from 'react';
import SubMenu from './SubMenu';

function OverMenu({ title, subitems, handleSelectArticle }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    console.log(`Toggling submenu for: ${title}`);
    setIsOpen(!isOpen);
  };

  return (
    <li className={isOpen ? 'open' : ''}>
      <div className="overmenu" onClick={toggleSubmenu}>
        <img src="strelka-pravo.png" alt="" className="toggle-submenu" />
        <div className="li_text">
          <p>{title}</p>
        </div>
      </div>
      {isOpen && (
        <ul className="submenu">
          {subitems && subitems.map((subitem) => (
            <SubMenu
              key={subitem.id}
              subitem={subitem}
              handleSelectArticle={handleSelectArticle}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default OverMenu;