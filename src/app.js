import { getRandomColor } from './utils';

function initApp() {
  console.log('Hello world');

  // Создаем кнопку
  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Изменить цвет страницы';
  
  // Добавляем кнопку в body
  document.body.appendChild(button);

  // Добавляем обработчик события click
  button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });
}

export default initApp;
