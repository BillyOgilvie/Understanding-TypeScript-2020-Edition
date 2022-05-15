const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const searchAdressHandler = (e: Event) => {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  // send to google API
};

form.addEventListener('submit', searchAdressHandler);
