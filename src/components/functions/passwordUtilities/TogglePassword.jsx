export default function togglePassword(e) {
  if (e.target.getAttribute('reveal') === 'false') {
    e.target.innerHTML = e.target.getAttribute('password');
    e.target.setAttribute('reveal', 'true');
  } else {
    e.target.innerHTML = '******';
    e.target.setAttribute('reveal', 'false');
  }
}
