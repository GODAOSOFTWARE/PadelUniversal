// ==============================================
// FILE: src/pages/games/new/Setup.jsx
// DESCRIPTION: Страница настройки новой игры
// ==============================================

import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import Create from '../../../components/forms/games/Create';
import '../../../styles/pages/NewGameSetupPage.css';

function Setup() {
  return (
    <AppLayout>
      <div className="page-header">
        <button className="back-button">
          ← Назад к частным играм
        </button>
        <h1>Создать игру/Настройки игры</h1>
      </div>
      <Create />
    </AppLayout>
  );
}

export default Setup; 