import React from 'react';
import Study from './Study.jsx';
import Line from './Line.jsx';

const Education = () => {

  const study = [
    {
      id: 1,
      college: "Московский Авиационный Институт (Национальный Исследовательский Университет)",
      major: "Инженер-конструктор (Самолето и вертолетостроение)",
      period: "Сентябрь 2012 — Январь 2018"
    },
    {
      id: 2,
      college: "Национальный исследовательский технологический университет «МИСиС» (НИТУ «МИСиС»)",
      major: "повышение квалификации (Искусственный интеллект: теория и методика обучения в основной школе)",
      period: "Сентябрь 2021 — Декабрь 2021"
    },
  ]
  
  return (
    <section className='main__education'>
      <h2 className="main__title">Образование</h2>

      {study.reverse().map((example) => 
        <>
        <Study
          example={example}
          key={example.id}
        />
        <Line style={'line__dotted'} />
        </>
      )}
    </section>
  );
};

export default Education;