// script.js

const api = "https://api.github.com/users/";

// Load Axios correctly
const axiosScript = document.createElement("script");
axiosScript.src =
  "https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js";
axiosScript.integrity =
  "sha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==";
axiosScript.crossOrigin = "anonymous";
document.head.appendChild(axiosScript);

const main = document.getElementById("main");
const inputForm = document.getElementById("userInput");
const inputBox = document.getElementById("inputBox");

// Fetch user data
const userGetFunction = (name) => {
  axios(api + name)
    .then((response) => {
      userCard(response.data);
      repoGetFunction(name);
    })
    .catch((err) => {
      if (err.response && err.response.status === 404) {
        errorFunction("No profile with this username");
      }
    });
};

// Fetch repositories
const repoGetFunction = (name) => {
  axios(api + name + "/repos?sort=created")
    .then((response) => {
      repoCardFunction(response.data);
    })
    .catch(() => {
      errorFunction("Problem fetching repos");
    });
};

// Create user card
const userCard = (user) => {
  const id = user.name || user.login;
  const info = user.bio ? `<p>${user.bio}</p>` : "";

  const cardElement = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${id}" class="avatar">
      </div>

      <div class="user-info">
        <h2>${id}</h2>
        ${info}
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;

  main.innerHTML = cardElement;
};

// Error card
const errorFunction = (error) => {
  main.innerHTML = `
    <div class="card">
      <h1>${error}</h1>
    </div>
  `;
};

// Create repo links
const repoCardFunction = (repos) => {
  const reposElement = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposElement.appendChild(repoEl);
  });
};

// Form submit
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = inputBox.value.trim();

  if (user) {
    userGetFunction(user);
    inputBox.value = "";
  }
});
