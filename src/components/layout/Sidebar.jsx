// ========================================================
// FILE: src/components/layout/Sidebar.jsx
// DESCRIPTION: Боковое меню с логотипом и кнопкой-сворачивания.
// ========================================================

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/layout/Sidebar.css';

const menuSections = [
  {
    title: 'PADEL UNITED',
    items: [
      { icon: '🏠', label: 'О направлении', path: '/united/about' },
      { icon: '🎮', label: 'Рейтинг игроков', path: '/united/ratings' },
      { icon: '🏆', label: 'События', path: '/united/events', matchPaths: ['/games', '/tournaments'] }
    ]
  },
  {
    title: 'PADEL SCHOOL',
    items: [
      { icon: '🎓', label: 'О направлении', path: '/school/about' }
    ]
  },
  {
    title: 'PARA PADEL',
    items: [
      { icon: '🧑‍🦽', label: 'О направлении', path: '/para/about' }
    ]
  },
  {
    title: 'PHYGITAL PADEL',
    items: [
      { icon: '💻', label: 'О направлении', path: '/phygital/about' }
    ]
  }
];

/**
 * Определяет, активен ли текущий путь
 * @param {string} pathname - текущий URL
 * @param {Object} item - пункт меню
 * @returns {boolean}
 */
const isPathActive = (pathname, item) => {
  if (item.matchPaths) {
    return item.matchPaths.some(path => pathname.includes(path));
  }
  return pathname.startsWith(item.path);
};

/**
 * Sidebar — компонент бокового меню
 * @param {boolean} collapsed - признак свернутости меню
 * @param {Function} onToggle - обработчик клика по кнопке меню
 */
function Sidebar({ collapsed, onToggle }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const [isExpanded, setIsExpanded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
    if (!isTablet) {
      onToggle();
    }
  };

  // Всегда сворачиваем меню на планшетах
  const effectiveCollapsed = isTablet ? true : collapsed;

  return (
    <>
      {isMobile && isExpanded && (
        <div className="sidebar-overlay visible" onClick={() => setIsExpanded(false)} />
      )}
      <aside className={`sidebar ${effectiveCollapsed ? 'collapsed' : ''} ${isExpanded ? 'expanded' : ''}`}>
        {/* ==== Заголовок и бургер ==== */}
        <div className="sidebar-header">
          {!effectiveCollapsed ? (
            <div className="sidebar-brand">
              <div className="logo-title">Padel-Universal</div>
              <div className="logo-subtitle">Социально-спортивный проект</div>
            </div>
          ) : (
            <button className="burger-button" onClick={handleToggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          {!effectiveCollapsed && !isTablet && (
            <button className="burger-button" onClick={handleToggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6L18 18M6 18L18 6" />
              </svg>
            </button>
          )}
        </div>

        {/* ==== Навигация ==== */}
        <nav className="sidebar-nav">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="menu-section">
              {!effectiveCollapsed && (
                <div className="menu-section-title">{section.title}</div>
              )}
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`menu-item ${isPathActive(pathname, item) ? 'active' : ''}`}
                  >
                    <span className="icon">{item.icon}</span>
                    {!effectiveCollapsed && <span className="label">{item.label}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
