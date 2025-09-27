// toggle password
document.getElementById('togglePw')?.addEventListener('click', ()=>{
  const f = document.getElementById('loginPassword');
  f.type = f.type === 'password' ? 'text' : 'password';
});
document.getElementById('togglePw2')?.addEventListener('click', ()=>{
  const f = document.getElementById('signupPassword');
  f.type = f.type === 'password' ? 'text' : 'password';
});

// dark mode
const darkMode = document.getElementById('darkMode');
if(darkMode){
  darkMode.addEventListener('change', ()=>{
    document.body.classList.toggle('dark', darkMode.checked);
  });
}

// login form validation
document.getElementById('loginForm')?.addEventListener('submit', e=>{
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const pw = document.getElementById('loginPassword').value;
  if(!email.includes('@')) return alert('Invalid email');
  if(pw.length < 6) return alert('Password must be at least 6 characters');
  alert('Login successful (demo)');
});

// signup validation + strength
document.getElementById('signupForm')?.addEventListener('submit', e=>{
  e.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const pw = document.getElementById('signupPassword').value;
  if(!email.includes('@')) return alert('Invalid email');
  if(pw.length < 6) return alert('Password must be at least 6 characters');
  alert('Signup successful (demo)');
});
document.getElementById('signupPassword')?.addEventListener('input', e=>{
  const val = e.target.value;
  const bar = document.getElementById('strengthBar');
  let strength = 0;
  if(val.length >= 6) strength++;
  if(/[A-Z]/.test(val)) strength++;
  if(/[0-9]/.test(val)) strength++;
  if(/[^A-Za-z0-9]/.test(val)) strength++;
  bar.style.width = (strength*25)+'%';
});
