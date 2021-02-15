
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import new_year from '../../assets/projects_images/new_year.jpg'
import color_classification from '../../assets/projects_images/color_classification.jpg'
import clima from '../../assets/projects_images/clima.png'
import crudreactl from '../../assets/projects_images/crudreactl.png';
import peliculas from '../../assets/projects_images/peliculas.png';
import presupuesto from '../../assets/projects_images/presupuesto.png';
import cotizacion from '../../assets/projects_images/cotizacion.png';

const data_projects = [
    {
        name: 'App de Peliculas',
        image: peliculas,
        deployed_url: 'https://peliculas-steven-app.netlify.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react.js']
    },

    {
        name: 'App de Presupuesto',
        image: presupuesto,
        deployed_url: 'https://presupuesto-steven-app.netlify.app/',
        github_url: 'https://github.com/Dey-Sumit/Dev-talks',
        category: ['node.js', 'mongoDB', 'react.js']
    },

  

    {
        name: 'App Clima',
        image: clima,
        deployed_url: 'https://clima-app-steven.netlify.app/',
        category: ['react.js']
    },

    {
        name: 'Crud laravel con ReactJs',
        image: crudreactl,
        deployed_url: 'https://crud-reactjs-steven-app.netlify.app/',
        category: ['laravel']
    },

    {
        name: 'Aplicacion de Cotizacion en php ',
        image: cotizacion,
        deployed_url: 'https://app-steven-cotizacion.herokuapp.com/',
        category: ['php']
    },

   

   
]

export default data_projects;