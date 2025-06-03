const panels = document.querySelectorAll(".qq-panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    
    
    removeActiveClasses();
    panel.classList.add('qq-panel_active');
  })
});

function removeActiveClasses() {
    panels.forEach((panel) => {
    panel.classList.remove('qq-panel_active');
  })
}




