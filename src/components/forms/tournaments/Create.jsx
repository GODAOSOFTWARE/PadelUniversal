import React from 'react';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Button from '../../ui/Button';
import FieldGroup from '../../ui/FieldGroup';
import '../../../styles/forms/tournaments/Create.css';

const tournamentFormats = [
  { id: 'single_elimination', name: 'Олимпийская система', available: true },
  { id: 'double_elimination', name: 'Двойное выбывание', available: true },
  { id: 'round_robin', name: 'Круговая система', available: true },
  { id: 'swiss', name: 'Швейцарская система', available: false },
  { id: 'group_stage', name: 'Групповой этап + плей-офф', available: true },
];

const playerLimits = [8, 16, 32, 64].map(limit => ({
  value: limit,
  label: `${limit} участников`
}));

const divisions = [
  { value: 'pro', label: 'PRO' },
  { value: 'amateur', label: 'Любители' },
  { value: 'beginner', label: 'Начинающие' },
  { value: 'mixed', label: 'Смешанный' }
];

const clubs = ['Padel Uktus'];

function Create() {
  return (
    <form className="create-tournament-form">
      <div className="form-section">
        <h3>Основная информация</h3>
        <div className="form-row">
          <FieldGroup label="Название турнира">
            <Input 
              placeholder="Введите название турнира"
            />
          </FieldGroup>
          <FieldGroup label="Формат турнира">
            <Select
              options={tournamentFormats}
              placeholder="Выберите формат турнира"
            />
          </FieldGroup>
        </div>
      </div>

      <div className="form-section">
        <h3>Параметры турнира</h3>
        <div className="form-row">
          <FieldGroup label="Количество участников">
            <Select
              options={playerLimits}
              placeholder="Выберите лимит участников"
            />
          </FieldGroup>
          <FieldGroup label="Дивизион">
            <Select
              options={divisions}
              placeholder="Выберите дивизион"
            />
          </FieldGroup>
        </div>
      </div>

      <div className="form-section">
        <h3>Место и время проведения</h3>
        <div className="form-row">
          <FieldGroup label="Спортивный клуб">
            <Select
              options={clubs}
              placeholder="Выберите клуб"
            />
          </FieldGroup>
          <FieldGroup label="Взнос участника">
            <Input 
              type="number"
              placeholder="Сумма в рублях"
            />
          </FieldGroup>
        </div>
        <div className="form-row">
          <FieldGroup label="Дата начала">
            <Input 
              type="date"
            />
          </FieldGroup>
          <FieldGroup label="Дата окончания">
            <Input 
              type="date"
            />
          </FieldGroup>
        </div>
        <div className="form-row">
          <FieldGroup label="Время начала">
            <Input 
              type="time"
            />
          </FieldGroup>
          <FieldGroup label="Регистрация до">
            <Input 
              type="datetime-local"
            />
          </FieldGroup>
        </div>
      </div>

      <div className="form-section">
        <h3>Дополнительная информация</h3>
        <div className="form-row">
          <FieldGroup label="Описание турнира">
            <Input 
              type="textarea"
              placeholder="Введите описание турнира, правила и другую важную информацию"
            />
          </FieldGroup>
        </div>
      </div>

      <div className="form-actions">
        <Button type="submit">
          Создать турнир
        </Button>
      </div>
    </form>
  );
}

export default Create; 