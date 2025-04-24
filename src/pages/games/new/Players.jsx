// ==============================================
// FILE: src/pages/games/new/Players.jsx
// DESCRIPTION: Страница добавления игроков в новую игру
// ==============================================

import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import Players from '../../../components/forms/games/Players';

function PlayersPage() {
  return (
    <AppLayout>
      <div className="page-header">
        <button className="back-button">
          ← Назад к настройкам игры
        </button>
        <h1>Добавление игроков</h1>
      </div>
      <Players />
    </AppLayout>
  );
}

export default PlayersPage; 