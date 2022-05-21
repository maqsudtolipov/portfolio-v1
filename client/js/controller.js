// https://maqsud-me.herokuapp.com/api/v1

////////////////////////////////////////
const projectsContiner = document.querySelector('#projects');
const tagsContainer = document.querySelector('.tags');

const renderSpinner = function (parenEl) {
  const markup = `
  <div class="spinner-container">
  <div class="spinner">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1 {
      fill: #7e859780;
    }

    .cls-2 {
      fill: #2663ff;
    }

    </style></defs><path class="cls-1" d="M256,0C114.61,0,0,114.57,0,256S114.61,512,256,512,512,397.33,512,256,397.37,0,256,0Zm0,446C151.06,446,66,360.88,66,256S151.06,66,256,66,446,151,446,256,360.92,446,256,446Z" transform="translate(0.01 0.05)"></path><path class="cls-2" d="M255.5,35.63v.68a32.69,32.69,0,0,1-27.92,32.3A190.14,190.14,0,0,0,68,228.72a32.69,32.69,0,0,1-32.08,28h0a32.63,32.63,0,0,1-32.55-37.4C20.08,108.43,107.37,20,218.08,3.32A32.64,32.64,0,0,1,255.5,35.63Z" transform="translate(0.01 0.05)"></path></svg>
  </div>
  </div>`;
  parenEl.innerHTML = '';
  parenEl.insertAdjacentHTML('afterbegin', markup);
};

const renderTags = function (tags) {
  let markup = '';

  tags.forEach((tag) => {
    markup += `
    <li class="project__tag project__tag--${tag}">${tag.toUpperCase()}</li>
    `;
  });

  return markup;
};

const showProjects = async function () {
  try {
    // Loading project
    renderSpinner(projectsContiner);
    const res = await fetch('https://maqsud-me.herokuapp.com/api/v1/projects');
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message.message} (${res.status})`);

    let projects = data.data.projects;

    // Rendering project

    projectsContiner.innerHTML = '';

    projects.forEach((project) => {
      const markup = `
        <div class="project">
        <div class="project__img">
          <a href="#" target="_blank">
            <img src="${project.image}" alt="My third recent work"
          /></a>
        </div>

        <div class="project__header">
          <p class="project__title">${project.title}</p>

          <div class="project__links">
            <a href="${project.github}" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="${project.github}" target="_blank">
              <ion-icon name="link-outline"></ion-icon>
            </a>
          </div>
        </div>

        <ul class="project__tags">
          ${renderTags(project.tags)}
        </ul>
        <p class="project__info">${project.description}</p>
        </div>`;
      projectsContiner.insertAdjacentHTML('beforeend', markup);
    });
  } catch (err) {
    console.log(err);
  }
};
showProjects();
