const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');
const sidemenu = document.getElementById('sidemenu');

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

function openmenu() {
  sidemenu.style.right = '0';
}
function closemenu() {
  sidemenu.style.right = '-200px';
}

const scriptURL =
  'https://script.google.com/macros/s/AKfycbyt2iMkQJpCYp-RgKmX0C9hS56HpuTkykOWn1F1VGaDnD5AGpvA30fk_BOK-mJTvdAN/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Message Sent Successfully!';
      setTimeout(function () {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
