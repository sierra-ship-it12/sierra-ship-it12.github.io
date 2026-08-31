const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

// Function to open the menu
function openMenu() {
  sideMenu.classList.add('active');
  overlay.classList.add('active');
}

// Function to close the menu
function closeMenu() {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
}

// Event Listeners
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu); // Close menu when clicking outside
