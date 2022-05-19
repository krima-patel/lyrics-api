import renderToDom from '../helpers/renderToDom';

// STRUCTURE FOR HTML:
const htmlStructure = () => {
  const domString = `<div id="form-container"></div>
  <div id="lyrics-container"></div>`;
  renderToDom('#app', domString);
};

export default htmlStructure;
