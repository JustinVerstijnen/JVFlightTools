const tools = [
  {
    title: "Unit Calculator",
    description: "Convert common aviation units quickly, including distance, speed, pressure, temperature and other values used during flight preparation.",
    toolUrl: "unitcalculator/index.html",
    shortcut: "flighttools.justinverstijnen.nl/unitcalculator",
    github: "https://github.com/JustinVerstijnen/JVFlightToolsSWA/tree/main/unitcalculator",
    image: "unitcalculator/unitcalculator.png"
  },
  {
    title: "Runway Visualizer",
    description: "Visualize runway orientation and runway numbers to support runway briefing and wind/runway awareness.",
    toolUrl: "runwayvisualizer/index.html",
    shortcut: "flighttools.justinverstijnen.nl/runwayvisualizer",
    github: "https://github.com/JustinVerstijnen/JVFlightToolsSWA/tree/main/runwayvisualizer",
    image: "runwayvisualizer/runwayvisualizer.jpeg"
  },
  {
    title: "Flight Lesson Tracker",
    description: "Track flight lessons and keep practical training progress organized in one simple overview.",
    toolUrl: "flightlessontracker/index.html",
    shortcut: "flighttools.justinverstijnen.nl/flightlessontracker",
    github: "https://github.com/JustinVerstijnen/JVFlightToolsSWA/tree/main/flightlessontracker",
    image: "flightlessontracker/flightlessontracker.png"
  },
  {
    title: "P/D Altitude Calculator",
    description: "Calculate pressure altitude and density altitude for performance planning based on atmospheric conditions.",
    toolUrl: "pressuredensityaltitudecalculator/index.html",
    shortcut: "flighttools.justinverstijnen.nl/pressuredensityaltitudecalculator",
    github: "https://github.com/JustinVerstijnen/JVFlightToolsSWA/tree/main/pressuredensityaltitudecalculator",
    image: "pressuredensityaltitudecalculator/pressuredensityaltitudecalculator.png"
  },
  {
    title: "Course Calculator",
    description: "Calculate course-related values for flight planning and navigation preparation.",
    toolUrl: "coursecalculator/index.html",
    shortcut: "flighttools.justinverstijnen.nl/coursecalculator",
    github: "https://github.com/JustinVerstijnen/JVFlightToolsSWA/tree/main/coursecalculator",
    image: "coursecalculator/coursecalculator.png"
  },
  {
    title: "Top of Descent Calculator",
    description: "Estimate top of descent information to support descent planning during navigation preparation.",
    toolUrl: "topofdescentcalculator/index.html",
    shortcut: "flighttools.justinverstijnen.nl/topofdescentcalculator",
    github: "https://github.com/JustinVerstijnen/JVFlightToolsSWA/tree/main/topofdescentcalculator",
    image: "topofdescentcalculator/topofdescent.png"
  },
  {
    title: "Weather Preparation",
    description: "Prepare and review weather information for flights with a dedicated weather preparation workflow.",
    toolUrl: "weatherpreparation/index.html",
    shortcut: "flighttools.justinverstijnen.nl/weatherpreparation",
    github: "https://github.com/JustinVerstijnen/JVFlightToolsSWA/tree/main/weatherpreparation",
    image: "weatherpreparation/weatherpreparation.png"
  }
];

const grid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

function githubSvg() {
  return `<span class="github-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg></span>`;
}

function createToolCard(tool) {
  const article = document.createElement("article");
  article.className = "tool-card";
  article.innerHTML = `
    <a class="tool-image-link" href="${tool.toolUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open ${tool.title}">
      <img class="tool-image" src="${tool.image}" alt="${tool.title} preview" loading="lazy" />
    </a>
    <div class="tool-content">
      <h2 class="tool-title">${tool.title}</h2>
      <p class="tool-description">${tool.description}</p>
      <div class="tool-actions">
        <a class="tool-primary" href="${tool.toolUrl}" target="_blank" rel="noopener noreferrer">Use tool</a>
        <a class="tool-github" href="${tool.github}" target="_blank" rel="noopener noreferrer">${githubSvg()} GitHub</a>
      </div>
      <a class="shortcut-link" href="https://${tool.shortcut}" target="_blank" rel="noopener noreferrer">${tool.shortcut}</a>
    </div>
  `;
  return article;
}

function renderTools(query = "") {
  const search = query.trim().toLowerCase();
  const filtered = tools.filter((tool) => {
    return [tool.title, tool.description, tool.shortcut, tool.github]
      .join(" ")
      .toLowerCase()
      .includes(search);
  });

  grid.innerHTML = "";
  filtered.forEach((tool) => grid.appendChild(createToolCard(tool)));
  emptyState.style.display = filtered.length ? "none" : "block";
}

searchInput.addEventListener("input", (event) => renderTools(event.target.value));
renderTools();
