import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrainService {
  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/TrainApp/';
  constructor(private http: HttpClient) {}

  getAllStaions() {
    return this.http.get(`${this.apiUrl}GetAllStations`);
  }
  getTrainsSearch(from: number, to: number, date: string) {
    return this.http.get(
      `${this.apiUrl}GetTrainsBetweenStations?departureStationId=${from}&arrivalStationId=${to}0&departureDate=${date}`
    );
  }
}
