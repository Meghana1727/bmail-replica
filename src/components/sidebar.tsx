import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Link to="/inbox">Inbox</Link>
      <Link to="/starred">Starred</Link>
      <Link to="/trash">Trash</Link>
    </div>
  );
};

export default Sidebar;
