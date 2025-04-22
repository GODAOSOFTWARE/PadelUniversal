// ================================================
// FILE: src/components/layout/AppLayout.jsx
// DESCRIPTION: Основная обёртка приложения.
// Включает Sidebar и PageWrapper. Управляет
// состоянием свёрнутости меню.
// ================================================

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PageWrapper from './PageWrapper';

function AppLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false); // состояние: меню свёрнуто/развёрнуто

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed); // инвертируем
  };

  return (
    <>
      <Sidebar collapsed={collapsed} onToggle={handleToggleSidebar} />
      <PageWrapper isSidebarCollapsed={collapsed}>
        {children}
      </PageWrapper>
    </>
  );
}

export default AppLayout;
