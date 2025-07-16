const imageMap = {
  tourism: 'images/travel.jpg' ,
  corporate: 'images/corporate.jpg',
  student: 'images/students (3).jpg',
  working: 'images/professionals.jpg',
  backpacker: 'images/students.jpg',
  medical: 'images/medical.jpg',
  event: 'images/wedding.jpg',
  construction: 'images/worker.jpg',
  airport: 'images/air.jpg',
  relocation: 'images/rent.jpg',
};





function toggleDropdown() {
  const menu = document.getElementById('dropdownContent');

  if (menu.classList.contains('active')) {
    // Add smooth close with delay
    menu.classList.remove('active'); 
  } else {
    menu.classList.add('active'); 
  }
}

function showImage(sector) {
  const display = document.getElementById('displayArea');
  display.innerHTML = `
    <div class="image-container">
      <img src="${imageMap[sector]}" alt="${sector} Image">
    </div>
  `;

  const menu = document.getElementById('dropdownContent');
  menu.classList.remove('active'); 
}



