// ========================================================
// FILE: src/components/layout/Sidebar.jsx
// DESCRIPTION: Боковое меню с логотипом и кнопкой-сворачивания.
// - Принимает props:
//   - collapsed (bool): Состояние меню (свёрнуто или нет)
//   - onToggle (func): Обработчик клика по кнопке сворачивания
// ========================================================

import React from 'react';
import '../../styles/layout/Sidebar.css';

/**
 * Sidebar — компонент бокового меню
 * @param {boolean} collapsed - признак свернутости меню
 * @param {Function} onToggle - обработчик клика по кнопке меню
 */
function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* ==== Заголовок и бургер ==== */}
      <div className="sidebar-header">
        {!collapsed && (
          <div className="sidebar-brand">
            <div className="logo-title">Padel-Universal</div>
            <div className="logo-subtitle">Социально-спортивный проект</div>
          </div>
        )}
        <div className="sidebar-toggle">
          <button className="toggle-btn" onClick={onToggle}>☰</button>
        </div>
      </div>

      {/* ==== Навигация ==== */}
      <nav className="sidebar-nav">
        <ul>
          {/* === PADEL UNITED === */}
          {!collapsed && <li className="section-title">PADEL UNITED</li>}
          <li className="active">
            <span className="icon">🏠</span>
            {!collapsed && <span className="label">О направлении</span>}
          </li>
          <li>
            <span className="icon">🎮</span>
            {!collapsed && <span className="label">Рейтинги игроков</span>}
          </li>
          <li>
            <span className="icon">🏆</span>
            {!collapsed && <span className="label">Спортивные события</span>}
          </li>

          {/* === PADEL SCHOOL === */}
          {!collapsed && <li className="section-title">PADEL SCHOOL</li>}
          <li>
            <span className="icon">🎓</span>
            {!collapsed && <span className="label">В разработке</span>}
          </li>

          {/* === PARA PADEL === */}
          {!collapsed && <li className="section-title">PARA PADEL</li>}
          <li>
            <span className="icon">🧑‍🦽</span>
            {!collapsed && <span className="label">В разработке</span>}
          </li>

          {/* === PHYGITAL PADEL === */}
          {!collapsed && <li className="section-title">PHYGITAL PADEL</li>}
          <li>
            <span className="icon">💻</span>
            {!collapsed && <span className="label">В разработке</span>}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
