// ==============================================
// FILE: src/App.jsx
// DESCRIPTION: Корневой компонент приложения.
// Конфигурирует маршруты через React Router.
// ==============================================

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Setup from './pages/games/new/Setup';
import Players from './pages/games/new/Players';
import Results from './pages/games/new/Results';

function App() {
  return (
    <Routes>
      <Route path="/games/new/setup" element={<Setup />} />
      <Route path="/games/new/players" element={<Players />} />
      <Route path="/games/new/results" element={<Results />} />
    </Routes>
  );
}

export default App;
