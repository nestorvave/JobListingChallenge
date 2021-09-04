let data = `
[
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "images/photosnap.svg",
      "neew": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "neew": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "neew": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "neew": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "neew": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "neew": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "neew": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "neew": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "neew": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "neew": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]
  
`;

let users = JSON.parse(data);
const filters = document.querySelector("#filter-picked");
const jobs = document.querySelector(".jobs");
const filterbox = document.querySelector(".filters");
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => clear());

//create userBOX
users.forEach((user, index) => {
  const {
    id,
    company,
    logo,
    neew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = user;

  //MAIN BOX
  const mainBox = document.createElement("section");
  mainBox.classList.add("job");
  jobs.append(mainBox);
  const job = document.createElement("div");
  job.classList.add("job-js");

  
  mainBox.append(job);
  //PICTURE
  const img = document.createElement("img");
  img.classList.add('logo');
  img.setAttribute("src", logo);
  mainBox.append(img);
  //ABOUTBOX
  const aboutBox = document.createElement("div");
  aboutBox.classList.add("about");
  job.appendChild(aboutBox);
  //COMPANY
  const companyBox = document.createElement("div");
  companyBox.classList.add("company");
  companyBox.innerHTML = company;
  aboutBox.appendChild(companyBox);

  //NEW
  if (neew) {
    const newBox = document.createElement("div");
    newBox.classList.add("new");
    newBox.innerHTML = "NEW!";
    aboutBox.append(newBox);
  }

  //FEATURE
  if (featured) {
    const featureBox = document.createElement("div");
    featureBox.classList.add("ft");
    featureBox.innerHTML = "FEATURED!";
    aboutBox.append(featureBox);
  }

  //Position
  const positionBox = document.createElement("p");
  positionBox.classList.add("position");
  positionBox.innerHTML = position;
  job.append(positionBox);

  //infoBox
  const infoBox = document.createElement("div");
  infoBox.classList.add("third-info");
  job.append(infoBox);

  //posted

  const posted = document.createElement("div");
  posted.classList.add("font-prop");
  posted.classList.add("posted");
  posted.innerHTML = postedAt + " | ";
  infoBox.append(posted);

  //contract

  const contractBox = document.createElement("div");
  contractBox.classList.add("font-prop");
  contractBox.classList.add("contract");
  contractBox.innerHTML = contract + " | ";
  infoBox.append(contractBox);

  //remote

  const remoteBox = document.createElement("div");
  remoteBox.classList.add("font-prop");
  remoteBox.classList.add("remote");
  remoteBox.innerHTML = location;
  infoBox.append(remoteBox);

  // SKILLS
  const skillsBox = document.createElement("div");
  skillsBox.classList.add("skills");
  mainBox.appendChild(skillsBox);

  languages.forEach((language) => {
    const skillBox = document.createElement("div");
    skillBox.classList.add("skill");
    skillBox.innerHTML = language;
    skillsBox.append(skillBox);
    mainBox.classList.add(language);

    skillBox.addEventListener("click", () => pickItem(skillBox));
  });

  tools.forEach((tool) => {
    const toolBox = document.createElement("div");
    toolBox.classList.add("skill");
    toolBox.innerHTML = tool;
    skillsBox.appendChild(toolBox);
    mainBox.classList.add(tool);
    toolBox.addEventListener("click", () => pickItem(toolBox));
  });
  //level
  const levelBox = document.createElement("div");
  levelBox.classList.add("skill");
  levelBox.innerHTML = level;
  skillsBox.append(levelBox);
  mainBox.classList.add(level);
  levelBox.addEventListener("click", () => pickItem(levelBox));

  const roles = document.createElement("div");
  roles.classList.add("skill");
  roles.innerHTML = role;
  skillsBox.append(roles);
  mainBox.classList.add(role);
  roles.addEventListener("click", () => pickItem(roles));
});
//ROLE








function pickItem(x) {
  if (!filters.classList.contains(x.innerText)) {
    //CREATE DIV WITH BUTTON
    filterbox.classList.remove("none");
    filterbox.classList.add("showbox");

    const skillFilter = document.createElement("div");
    skillFilter.classList.add("skill-selected");
    skillFilter.innerHTML = x.innerHTML;
    filters.classList.add(skillFilter.innerText);
    filters.append(skillFilter);
    const buttonTrash = document.createElement("button");
    buttonTrash.classList.add("delete");
    const trash = document.createElement("img");
    trash.setAttribute("src", "images/001-letra-x.svg");
    buttonTrash.append(trash);
    buttonTrash.value = skillFilter.innerHTML;
    skillFilter.append(buttonTrash);
    for (let i = 1; i < jobs.childNodes.length; i++) {
      if (!jobs.childNodes[i].classList.contains(x.innerText)) {
        jobs.childNodes[i].classList.add("none");
      }
    }

    buttonTrash.addEventListener("click", () => {
      filters.classList.remove(skillFilter.innerText);
      skillFilter.remove();
      for (let i = 1; i < jobs.childNodes.length; i++) {
        if (filters.classList.length > 0) {
          for (let x = 0; x < filters.classList.length; x++) {
            if (jobs.childNodes[i].classList.contains(filters.classList[x])) {
              jobs.childNodes[i].classList.remove("show");
              jobs.childNodes[i].classList.remove("none");
              jobs.childNodes[i].classList.add("show");

            } else {
              jobs.childNodes[i].classList.remove("show");
              jobs.childNodes[i].classList.remove("none");
              jobs.childNodes[i].classList.add("none");

            }
          }
        } else {
          jobs.childNodes[i].classList.add("show");
          jobs.childNodes[i].classList.remove("show");
          jobs.childNodes[i].classList.remove("none");
          filterbox.classList.add("none");
          filterbox.classList.remove("showbox");
        }
      }
    });
  }
}

function clear() {
  filterbox.classList.remove("showbox");
  filterbox.classList.add("none");
  for (let i = 1; i < jobs.childNodes.length; i++) {
    jobs.childNodes[i].classList.remove("none");
  }
  const childFilter = filterbox.childNodes[1];
  for (let x = 0; x < childFilter.childNodes.length; x = 0) {
    childFilter.removeChild(childFilter.childNodes[x]);
  }
  filters.className = "";
}
