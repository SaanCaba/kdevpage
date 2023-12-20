import './App.css';
import { projectsData } from './projectsData';

function App() {
  return (
    <main>
      <section className='home-section'>
        <div className='home-info-container'>
          <h1 className='home-title'>Knight Developers</h1>
          <span>Desarrollo web</span>
        </div>
        <img
          className='img-home'
          src='https://www.udacity.com/blog/wp-content/uploads/2020/06/HTML_Blog-scaled.jpeg'
          alt='html_img'
        />
      </section>
      <section className='projects-section'>
        <h1 className='projects-title'>Proyectos</h1>
        <div className='projects-container'>
          <div className='grid-projects'>
            {projectsData.map((project, i) => (
              <div key={i}>
                <img
                  className='img-project'
                  src={project.img}
                  alt='imagen proyecto'
                />
                <h1 className='project-title'>{project.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
