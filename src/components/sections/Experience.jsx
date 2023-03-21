import React from 'react';
import Job from './Job.jsx';
import Line from './Line.jsx';

const Experience = () => {

  const jobs = [
    {
      id: 1,
      title: "3D Designer (intern)",
      name: "ПАО Сатурн",
      period: "Июль 2014 — Август 2014"
    },
    {
      id: 2,
      title: "3D Designer (junior)",
      name: "РСК МиГ",
      period: "Декабрь 2014 — Ноябрь 2015"
    },
    {
      id: 3,
      title: "3D Designer",
      name: "ПАО Ил",
      period: "Ноябрь 2016 — Сентябрь 2018"
    },
    {
      id: 4,
      title: "3D Design teacher",
      name: `ГБОУ ДО "ЦДТ "Строгино"`,
      period: "Сентябрь 2017 — Агуст 2019"
    },
    {
      id: 5,
      title: "Computer Science teacher",
      name: "ГБОУ Школа 1288",
      period: "Сентябрь 2017 — по сей день"
    },
    {
      id: 6,
      title: "DevOps intern",
      name: "Fish Run Games (не оплачиваемая)",
      period: "Сентябрь 2021 — Ноябрь 2021"
    },
    {
      id: 7,
      title: "FrontEnd intern",
      name: "The Rolling Scopes School (обучение)",
      period: "Март 2022 — Июль 2022"
    },
    {
      id: 8,
      title: "FullStack junior",
      name: "Fish Run Games (проектная)",
      period: "Январь 2022 — Февраль 2023"
    },
    {
      id: 9,
      title: "React JS developer",
      name: "WeScience",
      period: "Январь 2022 — по сей день"
    },
  ]

  return (
    <section className='main--experience'>
      <h2 className="main--title">Опыт</h2>
      {jobs.reverse().map((example) => 
        <>
          <Job
            example={example}
            key={example.id}
          />
          <Line style={'line--dotted'} />
        </>
      )}
    </section>
  );
};

export default Experience;