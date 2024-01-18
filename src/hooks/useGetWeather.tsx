import axios from 'axios';
import {useEffect, useState} from 'react';
import {API_KEY} from '@env';
import * as Location from 'expo-location';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      setErrorMsg('could not fetch the current forecast');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('permission to access location was denied');
      }
      let currenLocation = await Location.getCurrentPositionAsync({});
      setLat(currenLocation.coords.latitude);
      setLon(currenLocation.coords.longitude);

      await fetchWeatherData();
    })();
  }, [lat, lon]);
  return [loading, errorMsg, weather];
};
