const grid = document.getElementById("vlogGrid");
const viewer = document.getElementById("vlogViewer");

vlogs.forEach((vlog, index) => {
  const card = document.createElement("div");
  card.classList.add("vlog-card");
  card.innerHTML = 
    `<a href="#" onclick="loadVlog(${index}); return false;">
      <img src="${vlog.images[0]}" alt="${vlog.title}" />
      <span>${vlog.title}</span>
    </a>`;
  grid.appendChild(card);
});

function loadVlog(index) {
  const vlog = vlogs[index];
  viewer.innerHTML = `
    <h2>${vlog.title}</h2>
    <div class="vlog-images">
      ${vlog.images.map(img => `<img src="${img}" alt="${vlog.title} image">`).join('')}
    </div>
    <button onclick="closeVlog()">Back</button>
  `;
  viewer.style.display = "block";
  grid.style.display = "none";
}

function closeVlog() {
  viewer.style.display = "none";
  grid.style.display = "grid";
}
