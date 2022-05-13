// https://maqsud-me.herokuapp.com/api/v1

////////////////////////////////////////
const projectsContiner = document.querySelector("#projects");

const renderSpinner = function (parenEl) {
  const markup = `
  Loading ...
  `;
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
