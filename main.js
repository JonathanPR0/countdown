const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const button = document.querySelector('#sing-up');
const modal = document.querySelector('#modal-container');
const closeModal = document.querySelector('#close');
const now = new Date();

function countdown() {
  function randomDate() {
    switch (now.getMonth() + 4) {
      case 2:
        return `January ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 3:
        return `February ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 4:
        return `March ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 5:
        return `April ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 6:
        return `May ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 7:
        return `June ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 8:
        return `July ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 9:
        return `August ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 10:
        return `September ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 11:
        return `October ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 12:
        return `November ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
      case 13:
        return `December ${Math.floor(Math.random() * 28)} ${
          now.getMonth() <= 10 ? now.getFullYear() : now.getFullYear() + 1
        } 23:59`;
        break;
    }
  }

  const launch = new Date(randomDate());

  setInterval(() => {
    const now = new Date();
    const secondsLeft = (launch / 1000 - now / 1000).toFixed(0);
    const minutesLeft = (secondsLeft / 60).toFixed(0);
    const hoursLeft = (minutesLeft / 60).toFixed(0);
    const daysLeft = (hoursLeft / 24).toFixed(0);

    days.innerHTML = `${
      daysLeft < 10 ? '0' + daysLeft : daysLeft
    }<span>:</span>`;
    hours.innerHTML = `${
      hoursLeft % 24 < 10 ? '0' + (hoursLeft % 24) : hoursLeft % 24
    }<span>:</span>`;
    minutes.innerHTML = `${
      minutesLeft % 60 < 10 ? '0' + (minutesLeft % 60) : minutesLeft % 60
    }<span>:</span>`;
    seconds.innerHTML = `${
      secondsLeft % 60 < 10 ? '0' + (secondsLeft % 60) : secondsLeft % 60
    }`;
  }, 1000);
}

function toggleModal() {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('active');
  });
  closeModal.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.remove('active');
  });
}
toggleModal();
countdown();
