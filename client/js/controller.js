// https://maqsud-me.herokuapp.com/api/v1

////////////////////////////////////////

const showProject = async function () {
  try {
    const res = await fetch(
      "https://maqsud-me.herokuapp.com/api/v1/projects/627ea2f9176c6b5edfa5bbbc"
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message.message} (${res.status})`);

    let project = data.data.project;
    console.log(project);
  } catch (err) {
    console.log(err);
  }
};
showProject();

console.log("re");
