import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  constructor() { }
// Function to get user's location
getUserLocation(): Promise<any> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get latitude and longitude
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Call reverse geocoding API to get complete location details
          const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAaWJlQv3RFB52IeexFWROKctl8GsEtdgQ`;
          // Replace "YOUR_API_KEY" with your actual API key for Google Geocoding API

          fetch(geocodingUrl)
            .then((response) => response.json())
            .then((data) => {
              if (data.status === 'OK' && data.results.length > 0) {
                // Extract the required location details from the response
                const location = {
                  address: data.results[0].formatted_address,
                  city: '',
                  area:'',
                  state: '',
                  country: '',
                  postalCode: '',
                  latitude: latitude,
                  longitude: longitude
                };

                // Extract city, state, country, and postal code from the response
                const addressComponents = data.results[0].address_components;
                addressComponents.forEach((component:any) => {
                  if (component.types.includes('locality')) {
                    location.city = component.long_name;
                  }
                  if (component.types.includes('administrative_area_level_1')) {
                    location.state = component.long_name;
                  }
                  if (component.types.includes('country')) {
                    location.country = component.long_name;
                  }
                  if (component.types.includes('postal_code')) {
                    location.postalCode = component.long_name;
                  }
                  if (component.types.includes('sublocality')) {
                    location.area = component.long_name;
                  }
                });

                resolve(location);
              } else {
                reject('Unable to fetch location details');
              }
            })
            .catch((error) => {
              reject(error);
            });
        },
        (error) => {
          reject('Failed to get user location');
        }
      );
    } else {
      reject('Geolocation is not supported by this browser');
    }
  });

}
}