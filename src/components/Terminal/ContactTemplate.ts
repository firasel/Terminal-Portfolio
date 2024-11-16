const contactTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `
  Email: 
  <a href="mailto:info@ayencha.com" class="text-emerald-400">
    info@ayencha.com
  </a>
  <br />
  Mobile: 
  <a href="tel:+31619627867" class="text-emerald-400">
    +3119627867
  </a>
  <br />
  `;
  return parentDiv;
};
export default contactTemplate;
