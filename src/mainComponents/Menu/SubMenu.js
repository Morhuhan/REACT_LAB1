import React from 'react';

function SubMenu({ subitem, handleSelectArticle }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(`Submenu item clicked: ${subitem.id}`);
    handleSelectArticle(subitem.id, e.ctrlKey || e.metaKey);
  };

  return (
    <a href="#" onClick={handleClick}>
      <li>
          {subitem.title}
      </li>
    </a>
  );
}

export default SubMenu;