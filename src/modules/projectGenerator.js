import projects from './projectsData';
const projectsArea = document.querySelector('#projects-area');

const createDomElement = (tag, id, classList, content , attrs=null) => {
   const element =  document.createElement(tag);
    if(id) element.id = id;
    if(classList){
        classList.forEach(className => {
            element.classList.add(className);
        })
    }
    if(content) element.textContent = content;
    if(attrs){
        attrs.forEach(attr => {
            element.setAttribute(attr.name, attr.value);
        }); 
    }
    return element;
}

const appendElements = (parent, elList) => {
    elList.forEach(el => {
        parent.appendChild(el);
    })
}


const generateProjects = (parentEl) => {
    projects.forEach(project => {
          const projectBox = createDomElement('div', null, ['project-box'], null);
          
          const projectBoxImage = createDomElement('div', null, ['project-box-image'], null);
          const img = createDomElement('img', null, null, null, [{name:'src', value:project.image}, {name: 'alt', value: project.title}]);
          appendElements(projectBoxImage, [img]);

          const projectBoxDetails = createDomElement('div', null, ['project-box-details'], null);

          const projectBoxDescription = createDomElement('div', null, ['project-box-description'], null);
          const h1 = createDomElement('h1', null, null, project.title);
          const p = createDomElement('p', null, null, project.description);
          appendElements(projectBoxDescription, [h1, p]);

          const projectBoxButtons = createDomElement('div', null, ['project-box-buttons'], null);
          const demoLink = createDomElement('a', null, null, 'Demo', [{name:'href', value: project.demo_link}, {name:'target', value:'_blank'}]);
          const codeLink = createDomElement('a', null, null, 'Código', [{name:'href', value: project.code_link}, {name:'target', value:'_blank'}]);
          appendElements(projectBoxButtons, [demoLink, codeLink]);

          appendElements(projectBoxDetails, [projectBoxDescription, projectBoxButtons]);

          appendElements(projectBox, [projectBoxImage, projectBoxDetails]);

          appendElements(parentEl, [projectBox]);
    });
}

generateProjects(projectsArea);
