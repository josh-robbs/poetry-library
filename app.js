createDiv(){
  const div = document.getElementsById('div-2')

  const p = document.createElement('p');
  p.textContent = 'Buenos dias';
  div.appendChild(p);

}
createDiv()