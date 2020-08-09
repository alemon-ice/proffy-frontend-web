import React from 'react';

import { PageHeader, TeacherItem } from 'components/organisms';
import { Input, Select } from 'components/atoms';

import './styles.css';

const TeacherList: React.FC = () => {

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
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis">
        <form action="" id="search-teachers">
          <Select name="subject" label="Matéria" options={subjectOptions} />
          <Select name="week_day" label="Dia da semana" options={weekDayOptions} />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>
      <TeacherItem />
      <main />
    </div>
  );
};

export default TeacherList;
