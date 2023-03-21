import React from 'react';
import Skill from './Skill.jsx';

const Skills = () => {

  const skills = [
    {id: 1, name: "html", path: "html5/html5-original.svg"},
    {id: 2, name: "css", path: "css3/css3-original.svg"},
    {id: 3, name: "js", path: "javascript/javascript-plain.svg"},
    {id: 4, name: "ts", path: "typescript/typescript-plain.svg"},
    {id: 5, name: "python", path: "python/python-plain.svg"},
    {id: 6, name: "c++", path: "cplusplus/cplusplus-plain.svg"},
    {id: 7, name: "scss", path: "sass/sass-original.svg"},
    {id: 8, name: "less", path: "less/less-plain-wordmark.svg"},
    {id: 9, name: "gulp", path: "gulp/gulp-plain.svg"},
    {id: 10, name: "webpack", path: "webpack/webpack-plain.svg"},
    {id: 11, name: "bootstrap", path: "bootstrap/bootstrap-plain.svg"},
    {id: 12, name: "vue", path: "vuejs/vuejs-original.svg"},
    {id: 13, name: "react", path: "react/react-original.svg"},
    {id: 14, name: "django", path: "django/django-plain.svg"},
    {id: 15, name: "mysql", path: "mysql/mysql-original.svg"},
    {id: 16, name: "postgresql", path: "postgresql/postgresql-original.svg"},
    {id: 17, name: "sqlite", path: "sqlite/sqlite-original.svg"},
    {id: 18, name: "linux", path: "linux/linux-original.svg"},
    {id: 19, name: "ubuntu", path: "ubuntu/ubuntu-plain.svg"},
    {id: 20, name: "debian", path: "debian/debian-plain.svg"},
    {id: 21, name: "raspberrypi", path: "raspberrypi/raspberrypi-original.svg"},
    {id: 22, name: "docker", path: "docker/docker-plain.svg"},
    {id: 23, name: "git", path: "git/git-original.svg"},
    {id: 24, name: "github", path: "github/github-original.svg"},
    {id: 25, name: "gitlab", path: "gitlab/gitlab-original.svg"},
    {id: 26, name: "trello", path: "trello/trello-plain.svg"},
    {id: 27, name: "filezilla", path: "filezilla/filezilla-plain.svg"},
    {id: 28, name: "figma", path: "figma/figma-original.svg"},
    {id: 29, name: "photoshop", path: "photoshop/photoshop-line.svg"},
    {id: 30, name: "eslint", path: "eslint/eslint-original.svg"},
    {id: 31, name: "babel", path: "babel/babel-original.svg"},
    {id: 32, name: "bash", path: "bash/bash-original.svg"},
    {id: 33, name: "vim", path: "vim/vim-plain.svg"},
    {id: 34, name: "vscode", path: "vscode/vscode-original.svg"},
  ]
  
  return (
    <section className='main__skills' id='skills'>
      <h2 className="main__title">Навыки</h2>
      <div className="main__skills_container">
        {skills.map((example) =>
          <Skill
            example={example}
            key={example.id}
          />
        )}
        
      </div>
    </section>
  );
};

export default Skills;