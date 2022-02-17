import imgBg from './bg.jpeg';

const mixinUI = () => {
  const img = document.createElement('img');
  // img.src = require('./bg.jpeg').default;
  img.src = imgBg;
  document.body.appendChild(img);
};

mixinUI();
