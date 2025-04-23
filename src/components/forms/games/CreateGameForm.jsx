import React from 'react';
import './CreateGameForm.css';

const gameFormats = [
  { id: 'americano', name: 'Американо', available: true },
  { id: 'mexicano', name: 'Мексикано', available: false },
  { id: 'king', name: 'Король корта', available: false },
  { id: 'olympic', name: 'Олимпийский', available: false },
  { id: 'training', name: 'Тренировочный', available: false },
  { id: 'special', name: 'Специальный', available: false },
];

const playerLimits = [4, 8, 12, 16, 20];
const scoreLimits = [16, 21, 25, 'Без ограничений'];
const clubs = [
  'Padel Uktus',

];
const courtCounts = [1, 2, 3,];

function CreateGameForm() {
  return (
    <div className="content-wrapper">
      <form className="create-game-form">
        <div className="form-section">
          <h3>Создайте название и формат</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Название игры</label>
              <input 
                type="text" 
                placeholder="Введите название игры"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Формат игры</label>
              <select className="form-control">
                <option value="">Выберите формат игры</option>
                {gameFormats.map(format => (
                  <option
                    key={format.id}
                    value={format.id}
                    disabled={!format.available}
                    className={format.available ? 'option-available' : 'option-disabled'}
                  >
                    {format.name} {!format.available && '(недоступно)'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Установите ограничения</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Ограничение по игрокам</label>
              <select className="form-control">
                {playerLimits.map(limit => (
                  <option key={limit} value={limit}>
                    {limit} игроков
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Ограничение по очкам</label>
              <select className="form-control">
                {scoreLimits.map(score => (
                  <option key={score} value={score}>
                    Счет до {score} очков
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Заполните данные об игре</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Спортивный клуб</label>
              <select className="form-control">
                {clubs.map(club => (
                  <option key={club} value={club}>
                    {club}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Количество кортов</label>
              <select className="form-control">
                {courtCounts.map(count => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Начало</label>
              <input 
                type="datetime-local" 
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Конец</label>
              <input 
                type="datetime-local" 
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Создать таблицу игроков
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateGameForm;
