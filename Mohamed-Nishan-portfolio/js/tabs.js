// js/tabs.js
document.querySelectorAll(".custom-tabs li").forEach(tab => {
  tab.addEventListener("click", function() {
    document.querySelectorAll(".custom-tabs li").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    this.classList.add("active");
    const target = this.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});


  // Get all education tabs and panes
  const eduTabs = document.querySelectorAll('.edu-tabs li');
  const eduPanes = document.querySelectorAll('.edu-tab-pane');

  eduTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      eduTabs.forEach(t => t.classList.remove('active'));
      // Add active to the clicked tab
      tab.classList.add('active');

      const target = tab.getAttribute('data-tab');
      // Hide all panes
      eduPanes.forEach(pane => pane.classList.remove('active'));
      // Show the selected pane
      document.getElementById(target).classList.add('active');
    });
  });

