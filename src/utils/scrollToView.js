export const scrollToView = (elementId) => {
  if (!elementId) return;

  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // smooth scroll
  }
};
