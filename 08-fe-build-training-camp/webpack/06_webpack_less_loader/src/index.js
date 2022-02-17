import './index.less';

const mixinUI = () => {
  const H2 = document.createElement('h2');
  H2.innerHTML = 'Webpack less-loader';
  H2.className = 'title';
  document.body.appendChild(H2);
};

mixinUI();
