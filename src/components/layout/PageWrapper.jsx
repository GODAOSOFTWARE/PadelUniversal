// ================================================
// FILE: src/components/layout/PageWrapper.jsx
// DESCRIPTION: Контейнер рабочей зоны страницы с учётом меню.
// Реагирует на состояние сайдбара (развёрнут / свернут).
// ================================================

import React from 'react';
import '../../styles/layout/PageWrapper.css';

function PageWrapper({ children, isSidebarCollapsed }) {
  return (
    <main className={`page-wrapper ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="content-container">
        {children}
      </div>
    </main>
  );
}

export default PageWrapper;
