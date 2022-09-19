export const setFontsize = () => {
  const fontSize = document.querySelectorAll(".fontSize");
  fontSize.forEach((el) => {
    var font_size = el.getAttribute("data-font");
    el.setAttribute("style", `font-size:${font_size}px`);
  });
};
