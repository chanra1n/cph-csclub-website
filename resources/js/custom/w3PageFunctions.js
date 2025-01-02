// Side navigation
function w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "100%";
  x.style.fontSize = "40px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Tabs
function openCity(evt, cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-dark-grey";
}

// Accordions
function myAccFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Slideshows
var slideIndex = 1;

function plusDivs(n) {
  slideIndex = slideIndex + n;
  showDivs(slideIndex);
}

function showDivs(n) {
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// Progress Bars
function move() {
  var elem = document.getElementById("myBar");
  var width = 5;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}



window.onload = function () {
  document.body.style.opacity = 1;
  var timeOfLastUpdate = "2024-10-20T14:20:00";
  getLastCommit('chanra1n', 'cph-csclub-website');

  if (window.location.pathname.includes('activities')) {
    updateMenuItems();
  }

}

self.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    console.log('APP resumed');
    window.location.reload();
  }
});

VANTA.TRUNK({
  el: "#pageHeader",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 5.00,
  scaleMobile: 5.00,
  spacing: 10,
  chaos: 1.10,
  color: "#34624150",
  backgroundColor: "#231F20",
});

async function getLastCommit(repoOwner, repoName) {
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const commits = await response.json();
    const lastCommit = commits[0];

    // Extract the date in ISO format
    const isoDate = lastCommit.commit.author.date;

    // Reformat the date
    const formattedDate = formatDateToCustom(isoDate);

    console.log(`Last commit date (formatted): ${formattedDate}`);
    console.log(`Message: ${lastCommit.commit.message}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Function to format ISO date to the desired format
function formatDateToCustom(isoDate) {
  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

// Function to create a card dynamically
function createCard({ title, iconClass, content, actions = [] }, containerId = 'pageContent') {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID '${containerId}' not found.`);
    return;
  }

  // Create card wrapper
  const cardWrapper = document.createElement('div');
  cardWrapper.className = 'w3-quarter';

  // Create card
  const card = document.createElement('div');
  card.className = 'w3-card w3-container';

  // Add title with icon
  const cardTitle = document.createElement('h3');
  if (iconClass) {
    const icon = document.createElement('i');
    icon.className = iconClass;
    cardTitle.appendChild(icon);
    cardTitle.appendChild(document.createTextNode(' ')); // Space between icon and text
  }
  cardTitle.appendChild(document.createTextNode(title));

  // Add content
  const cardContent = document.createElement('p');
  cardContent.innerHTML = content;

  // Add actions (buttons or links)
  const actionsContainer = document.createElement('div');
  actions.forEach(action => {
    const button = document.createElement('button');
    button.className = action.className || 'w3-button';
    button.innerHTML = action.label;
    button.onclick = action.onClick || (() => window.location.href = action.href);
    actionsContainer.appendChild(button);
  });

  // Append all elements to the card
  card.appendChild(cardTitle);
  card.appendChild(document.createElement('hr'));
  card.appendChild(cardContent);
  card.appendChild(actionsContainer);

  // Append card to the wrapper
  cardWrapper.appendChild(card);

  // Append wrapper to the container
  container.appendChild(cardWrapper);
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
  document.getElementById('postbody').style.opacity = 0.5;
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById('postbody').style.opacity = 1;
}

// Function to create a post dynamically
function createPost({ title, content, image = '', button = '', link = '', size = 'third', show = true }, containerId = 'postbody') {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID '${containerId}' not found.`);
    return;
  }

  const blockInline = size === 'half' ? 'block' : 'inline-block';
  const showPost = show ? '100%' : '0%';
  const pointerEvents = show ? 'auto' : 'none';
  const displayButton = button ? 'block' : 'none';
  const hidePadding = button ? '' : 'padding-bottom:5px';

  // Create post structure
  const postWrapper = document.createElement('div');
  postWrapper.className = `w3-${size} w3-container w3-margin-bottom post`;
  postWrapper.style.display = blockInline;
  postWrapper.style.opacity = showPost;
  postWrapper.style.pointerEvents = pointerEvents;

  const postContent = document.createElement('div');
  postContent.className = 'w3-container w3-black';
  postContent.style = hidePadding;

  const postTitle = document.createElement('h1');
  postTitle.innerHTML = `<b>${title}</b>`;

  const postHr = document.createElement('hr');

  const postBody = document.createElement('p');
  postBody.innerHTML = content;

  const postButton = document.createElement('button');
  postButton.style.display = displayButton;
  postButton.innerHTML = `${button} <i style="margin-left:5px" class="ri-external-link-fill"></i>`;
  postButton.onclick = () => window.location.href = link;

  // Append all elements to the post
  postContent.appendChild(postTitle);
  postContent.appendChild(postHr);
  postContent.appendChild(postBody);
  if (button) postContent.appendChild(postButton);
  postWrapper.appendChild(postContent);

  // Append post to the container
  container.appendChild(postWrapper);
}

// Function to update the menu items based on the variables
function updateMenuItems() {
  // Select all dynamically created menu items
  const sidebar = document.getElementById("mySidebar-items");
  const links = sidebar.querySelectorAll("a");

  links.forEach(link => {
    // Highlight the active menu item
    console.log(window.location.href);
    console.log(link.href);
    if (window.location.href.includes(link.href)) {
      link.style.color = "yellow";
    } else {
      link.style.color = ""; // Reset if not active
    }

    // Determine which link corresponds to which variable
    if (link.href.includes("https://csclubhumboldt.org") && !home_enabled) {
      link.classList.add("disabled");
    } else if (link.href.includes("https://csclubhumboldt.org/activities/index.html") && !news_enabled) {
      link.classList.add("disabled");
    } else if (link.href.includes("https://csclubhumboldt.org/activities/hackathon/index.html") && !hackathon_enabled) {
      link.classList.add("disabled");
    } else if (link.href.includes("https://csclubhumboldt.org/activities/icpc/index.html") && !icpc_enabled) {
      link.classList.add("disabled");
    } else {
      link.classList.remove("disabled");
    }
  });
}

// Function to dynamically create menu items
function createMenuItems() {
  const menuItems = [
    { href: "https://csclubhumboldt.org", iconClass: "ri-home-4-fill", text: "Home", enabled: home_enabled },
    { href: "https://csclubhumboldt.org/activities/index.html", iconClass: "ri-newspaper-fill", text: "Club News", enabled: news_enabled },
    { href: "https://csclubhumboldt.org/activities/hackathon/index.html", iconClass: "ri-terminal-box-fill", text: "Hackathon", enabled: hackathon_enabled },
    { href: "https://csclubhumboldt.org/activities/icpc/index.html", iconClass: "ri-trophy-fill", text: "ICPC", enabled: icpc_enabled },
  ];

  const sidebar = document.getElementById("mySidebar-items");
  sidebar.innerHTML = ""; // Clear any existing items

  menuItems.forEach(item => {
    const a = document.createElement("a");
    a.href = item.href;
    a.onclick = w3_close;
    a.className = "w3-bar-item w3-button w3-padding";
    a.style.fontWeight = "bold";

    const icon = document.createElement("i");
    icon.className = item.iconClass;
    icon.style.marginRight = "5px";

    a.appendChild(icon);
    a.appendChild(document.createTextNode(" " + item.text));
    sidebar.appendChild(a);

    if (!item.enabled) {
      a.classList.add("disabled");
    }
  });
}

// Initialize menu
createMenuItems();
updateMenuItems();


// Call the function to create menu items on page load
window.onload = function () {
  document.body.style.opacity = 1;
  var timeOfLastUpdate = "2024-10-20T14:20:00";
  getLastCommit('chanra1n', 'cph-csclub-website');

  if (window.location.pathname.includes('activities')) {
    createMenuItems();
    updateMenuItems();
  }

  
}

