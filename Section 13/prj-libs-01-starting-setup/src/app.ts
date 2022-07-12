import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

type GoogleGeoCodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

const GOOGLE_API_KEY = 'AIzaSyBpdA0jqV9RRFFuHKHe3qa6g8415Kmr_ig';

const searchAdressHandler = async (e: Event) => {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  try {
    const response = await axios.get<GoogleGeoCodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    );

    if (response.data.status !== 'OK') {
      throw new Error('Could not fetch location');
    }
    const coordinates = response.data.results[0].geometry.location;
    console.log(coordinates);

    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: coordinates,
        zoom: 16,
      }
    );

    new google.maps.Marker({
      position: coordinates,
      map: map,
    });
  } catch (e) {
    alert(e);
    console.log(e);
  }
};

form.addEventListener('submit', searchAdressHandler);
