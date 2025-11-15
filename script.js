document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(!name||!email||!message){
    status.textContent = 'Please complete all fields.'; return;
  }
  status.textContent = 'Sending...';
  setTimeout(()=>{
    status.textContent = 'Thanks ' + (name.split(' ')[0]||name) + '! Message received (demo).';
    form.reset();
  },800);
});
