// ==============================================
// FILE: src/pages/games/new/Results.jsx
// DESCRIPTION: Страница результатов новой игры
// ==============================================

import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import Results from '../../../components/forms/games/Results';

function ResultsPage() {
  return (
    <AppLayout>
      <div className="page-header">
        <button className="back-button">
          ← Назад к игрокам
        </button>
        <h1>Результаты игры</h1>
      </div>
      <Results />
    </AppLayout>
  );
}

export default ResultsPage; 