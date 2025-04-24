import React from 'react';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Button from '../../ui/Button';
import '../../../styles/forms/games/Create.css';

const gameFormats = [
  { id: 'americano', name: 'Американо', available: true },
  { id: 'mexicano', name: 'Мексикано', available: false },
  { id: 'king', name: 'Король корта', available: false },
  { id: 'olympic', name: 'Олимпийский', available: false },
  { id: 'training', name: 'Тренировочный', available: false },
  { id: 'special', name: 'Специальный', available: false },
];

const playerLimits = [4, 8, 12, 16, 20].map(limit => ({
  value: limit,
  label: `${limit} игроков`
}));

const scoreLimits = [...[16, 21, 25].map(score => ({
  value: score,
  label: `Счет до ${score} очков`
})), { value: 'unlimited', label: 'Без ограничений' }];

const clubs = ['Padel Uktus'].map(club => ({
  value: club,
  label: club
}));

const courtCounts = [1, 2, 3].map(count => ({
  value: count,
  label: String(count)
}));

function Create() {
  return (
    <form className="create-game-form">
      <div className="form-section">
        <h3>Создайте название и формат</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Название игры</label>
            <Input 
              placeholder="Введите название игры"
            />
          </div>
          <div className="form-group">
            <label>Формат игры</label>
            <Select
              placeholder="Выберите формат игры"
              options={gameFormats.map(format => ({
                value: format.id,
                label: format.name,
                disabled: !format.available
              }))}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Установите ограничения</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Ограничение по игрокам</label>
            <Select
              options={playerLimits}
            />
          </div>
          <div className="form-group">
            <label>Ограничение по очкам</label>
            <Select
              options={scoreLimits}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Заполните данные об игре</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Спортивный клуб</label>
            <Select
              options={clubs}
            />
          </div>
          <div className="form-group">
            <label>Количество кортов</label>
            <Select
              options={courtCounts}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Начало</label>
            <Input 
              type="datetime-local"
            />
          </div>
          <div className="form-group">
            <label>Конец</label>
            <Input 
              type="datetime-local"
            />
          </div>
        </div>
      </div>

      <div className="form-actions">
        <Button variant="primary">
          Создать таблицу игроков
        </Button>
      </div>
    </form>
  );
}

export default Create; 