// ========================================================
// FILE: src/components/layout/Sidebar.jsx
// DESCRIPTION: Боковое меню с логотипом и кнопкой-сворачивания.
// - Принимает props:
//   - collapsed (bool): Состояние меню (свёрнуто или нет)
//   - onToggle (func): Обработчик клика по кнопке сворачивания
// ========================================================

import React, { useEffect, useState } from 'react';
import '../../styles/layout/Sidebar.css';

/**
 * Sidebar — компонент бокового меню
 * @param {boolean} collapsed - признак свернутости меню
 * @param {Function} onToggle - обработчик клика по кнопке меню
 */
function Sidebar({ collapsed, onToggle }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
    onToggle();
  };

  const handleOverlayClick = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {isMobile && isExpanded && (
        <div className="sidebar-overlay visible" onClick={handleOverlayClick} />
      )}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${isExpanded ? 'expanded' : ''}`}>
        {/* ==== Заголовок и бургер ==== */}
        <div className="sidebar-header">
          {!collapsed && (
            <div className="sidebar-brand">
              <div className="logo-title">Padel-Universal</div>
              <div className="logo-subtitle">Социально-спортивный проект</div>
            </div>
          )}
          <div className="sidebar-toggle">
            <button className="toggle-btn" onClick={handleToggle}>☰</button>
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
    </>
  );
}

export default Sidebar;
