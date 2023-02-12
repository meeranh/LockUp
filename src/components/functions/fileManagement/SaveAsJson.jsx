export default function saveAsJson(data) {
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'passwords.json';
  link.href = url;
  link.click();
}
