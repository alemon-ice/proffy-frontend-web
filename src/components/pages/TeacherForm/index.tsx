import React, { useState } from 'react';
import { PageHeader } from 'components/organisms';

import { Input, Textarea, Select } from 'components/atoms';

import warningIcon from '../../../assets/images/icons/warning.svg'

import './styles.css';

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  const addNewScheduleItem = () => {
    setScheduleItems(prev => [
      ...prev,
      { week_day: 0, from: '', to: '' },
    ])
  }

  const subjectOptions = [
    { value: 'Artes', label: 'Artes' },
    { value: 'Biologia', label: 'Biologia' },
    { value: 'Química', label: 'Física' },
    { value: 'Física', label: 'Química' },
    { value: 'História', label: 'História' },
    { value: 'Sociologia', label: 'Sociologia' },
    { value: 'Filosofia', label: 'Filosofia' },
    { value: 'Português', label: 'Português' },
    { value: 'Matemática', label: 'Matemática' },
  ];

  const weekDayOptions = [
    { value: '0', label: 'Domingo' },
    { value: '1', label: 'Segunda-feira' },
    { value: '2', label: 'Terça-feira' },
    { value: '3', label: 'Quarta-feira' },
    { value: '4', label: 'Quinta-feira' },
    { value: '5', label: 'Sexta-feira' },
    { value: '6', label: 'Sábado' },
  ];

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que in crível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select name="subject" label="Matéria" options={subjectOptions} />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={() => addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select name="week_day" label="Dia da semana" options={weekDayOptions} />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            )
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
