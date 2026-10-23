const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const sidebar=$('#sidebar'),scrim=$('#scrim'),dropdown=$('#userDropdown'),toast=$('#toast');
let toastTimer;
function notify(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2400)}
function closeMenu(){sidebar.classList.remove('open');scrim.classList.remove('show')}
function navigate(page){
  const target=$('#page-'+page);
  if(!target){return}
  $$('.page').forEach(p=>p.classList.remove('active'));target.classList.add('active');
  $$('.nav-link').forEach(a=>a.classList.toggle('active',a.dataset.page===page));
  dropdown.classList.remove('open');closeMenu();
  window.scrollTo({top:0,behavior:'smooth'});
  history.replaceState(null,'','#'+page);
}
$$('[data-page]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();navigate(link.dataset.page)}));
$('#menuToggle').addEventListener('click',()=>{sidebar.classList.toggle('open');scrim.classList.toggle('show')});
scrim.addEventListener('click',closeMenu);
$('#userToggle').addEventListener('click',()=>dropdown.classList.toggle('open'));
document.addEventListener('click',e=>{if(!e.target.closest('.user-wrap'))dropdown.classList.remove('open')});
$$('[data-expand]').forEach(btn=>btn.addEventListener('click',()=>{const el=$('#'+btn.dataset.expand+'Sub');el.classList.toggle('open');btn.querySelector('b').textContent=el.classList.contains('open')?'⌄':'›'}));
$('#themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');$('#themeToggle').textContent=document.body.classList.contains('dark')?'☀':'☾';localStorage.setItem('rsayel-theme',document.body.classList.contains('dark')?'dark':'light')});
if(localStorage.getItem('rsayel-theme')==='dark'){document.body.classList.add('dark');$('#themeToggle').textContent='☀'}
$('#langToggle').addEventListener('click',()=>notify('Language selector demo'));
$('#soundToggle').addEventListener('click',()=>notify('Sound setting toggled'));
$('#profileForm').addEventListener('submit',e=>{e.preventDefault();notify('Profile changes saved in this demo.')});
$('#securitySave').addEventListener('click',()=>notify('Password update requires a connected backend.'));
$('#refreshNumbers').addEventListener('click',()=>notify('No numbers available to refresh.'));
$('#testSend').addEventListener('click',()=>{$('#testNotice').textContent='Demo only: connect an SMS provider to send messages.'});
$('#logout').addEventListener('click',e=>{e.preventDefault();notify('Demo logout: authentication is not connected.')});
const hash=location.hash.slice(1);if(hash&&$('#page-'+hash))navigate(hash);
function updateClock(){const d=new Date();$('#clock').textContent=d.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})+' ☾'}updateClock();
