document.addEventListener('alpine:init', () => {
    Alpine.data('functions', () => ({
      darkmode: localStorage.getItem('darkmode') === 'true', // Load darkmode state from localStorage
      toggleDarkMode() {
        this.darkmode = !this.darkmode;
        document.body.classList.toggle('darkmode', this.darkmode);
        localStorage.setItem('darkmode', this.darkmode);
      },
      init() {
        document.body.classList.toggle('darkmode', this.darkmode);
      }
    }));
  });