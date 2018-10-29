
import { Observable, of } from 'rxjs';

import { ICurrentWeather } from './../interfaces';
import { IWeatherService } from './weather.service';

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Margherita',
    country: 'IN',
    date: 1485789600,
    image: '',
    temperature: 300.32,
    description: 'light intensity drizzle',
  };

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
