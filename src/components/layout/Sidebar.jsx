// ================================================
// FILE: src/components/layout/Sidebar.jsx
// DESCRIPTION: Боковое меню с возможностью скрытия.
// Принимает состояние collapsed и функцию onToggle
// от родительского AppLayout.
// ================================================

import React from 'react';
import '../../styles/layout/Sidebar.css';

function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={onToggle}>
          ☰
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <span className="icon">🏠</span>
            {!collapsed && <span className="label">Главная</span>}
          </li>
          <li>
            <span className="icon">🎮</span>
            {!collapsed && <span className="label">Игры</span>}
          </li>
          <li>
            <span className="icon">🏆</span>
            {!collapsed && <span className="label">Турниры</span>}
          </li>
          <li>
            <span className="icon">👤</span>
            {!collapsed && <span className="label">Профиль</span>}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
