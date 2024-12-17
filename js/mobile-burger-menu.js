(() => {
    const refs = {
      openModalBtn: document.querySelector('[mobile-burger-menu-open]'),
      closeModalBtn: document.querySelector('[mobile-burger-menu-open-close]'),
      modal: document.querySelector('[mobile-burger-menu]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();