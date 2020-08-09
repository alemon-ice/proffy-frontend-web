import React, { useState, FormEvent } from 'react';

import { PageHeader, TeacherItem } from 'components/organisms';
import { Input, Select } from 'components/atoms';
import { Teacher } from 'components/organisms/TeacherItem';

import api from 'services/api';

import './styles.css';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

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

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const { data } = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(data);
  };

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis">
        <form onSubmit={searchTeachers} id="search-teachers">
          <Select name="subject" label="Matéria"
            options={subjectOptions}
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <Select name="week_day" label="Dia da semana"
            options={weekDayOptions}
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
          />
          <Input type="time" name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      {teachers.map((teacher: Teacher) => {
        return <TeacherItem key={teacher.id} teacher={teacher} />
      })}
      <main />
    </div>
  );
};

export default TeacherList;
