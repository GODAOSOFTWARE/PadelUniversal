// ==============================================
// FILE: src/App.jsx
// DESCRIPTION: Корневой компонент приложения.
// Конфигурирует маршруты через React Router.
// ==============================================

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NewGameSetupPage from './pages/games/new/NewGameSetupPage';

function App() {
  return (
    <Routes>
      <Route path="/games/new/setup" element={<NewGameSetupPage />} />
    </Routes>
  );
}

export default App;
