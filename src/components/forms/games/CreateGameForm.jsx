import React from 'react';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Button from '../../ui/Button';
import FieldGroup from '../../ui/FieldGroup';
import '../../../styles/forms/CreateGameForm.css';

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

const clubs = ['Padel Uktus'];
const courtCounts = [1, 2, 3];

function CreateGameForm() {
  return (
    <form className="create-game-form">
      <div className="form-section">
        <h3>Создайте название и формат</h3>
        <div className="form-row">
          <FieldGroup label="Название игры">
            <Input 
              placeholder="Введите название игры"
            />
          </FieldGroup>
          <FieldGroup label="Формат игры">
            <Select
              options={gameFormats}
              placeholder="Выберите формат игры"
            />
          </FieldGroup>
        </div>
      </div>

      <div className="form-section">
        <h3>Установите ограничения</h3>
        <div className="form-row">
          <FieldGroup label="Ограничение по игрокам">
            <Select
              options={playerLimits}
            />
          </FieldGroup>
          <FieldGroup label="Ограничение по очкам">
            <Select
              options={scoreLimits}
            />
          </FieldGroup>
        </div>
      </div>

      <div className="form-section">
        <h3>Заполните данные об игре</h3>
        <div className="form-row">
          <FieldGroup label="Спортивный клуб">
            <Select
              options={clubs}
            />
          </FieldGroup>
          <FieldGroup label="Количество кортов">
            <Select
              options={courtCounts}
            />
          </FieldGroup>
        </div>
        <div className="form-row">
          <FieldGroup label="Начало">
            <Input 
              type="datetime-local"
            />
          </FieldGroup>
          <FieldGroup label="Конец">
            <Input 
              type="datetime-local"
            />
          </FieldGroup>
        </div>
      </div>

      <div className="form-actions">
        <Button type="submit">
          Создать таблицу игроков
        </Button>
      </div>
    </form>
  );
}

export default CreateGameForm;
