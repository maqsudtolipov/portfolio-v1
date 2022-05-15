// https://maqsud-me.herokuapp.com/api/v1

////////////////////////////////////////
const projectsContiner = document.querySelector("#projects");

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
  parenEl.innerHTML = "";
  parenEl.insertAdjacentHTML("afterbegin", markup);
};

const showProject = async function () {
  try {
    // Loading project
    renderSpinner(projectsContiner);
    const res = await fetch(
      "https://maqsud-me.herokuapp.com/api/v1/projects/627ea2f9176c6b5edfa5bbbc"
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message.message} (${res.status})`);

    let project = data.data.project;
    console.log(project);

    // Rendering project
    const markup = `
      <div class="work">
        <div class="work__img">
          <a href="#" target="_blank">
            <img src="${project.image}" alt="My recent work"
          /></a>
        </div>
        <p class="work__title">${project.name}</p>
        <p class="work__info">${project.description}</p>
      </div>`;
    projectsContiner.innerHTML = "";
    projectsContiner.insertAdjacentHTML("beforeend", markup);
  } catch (err) {
    console.log(err);
  }
};
showProject();

console.log("re");
