// ==============================================
// FILE: src/pages/games/new/NewGameSetupPage.jsx
// DESCRIPTION: Тестовая страница для проверки layout’а
// ==============================================

import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import CreateGameForm from '../../../components/forms/games/CreateGameForm';
import './NewGameSetupPage.css';

function NewGameSetupPage() {
  return (
    <AppLayout>
      <div className="page-header">
        <button className="back-button">
          ← Назад к частным играм
        </button>
        <h1>Создать игру/Настройки игры</h1>
      </div>
      <CreateGameForm />
    </AppLayout>
  );
}

export default NewGameSetupPage;
