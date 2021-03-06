import { Skipass } from './../Model/ski-pass.model';
import { Weather } from './../Model/weather.model';
import { Track } from './../Model/track.model';

import { Mount } from './../Model/mount.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Skiresort } from '../Model/ski-resort.model';






const baseUrl: string = 'http://localhost:3000/api/skiresorts';

@Injectable({
  providedIn: 'root'
})
export class SkiResortService {

  constructor(private http: HttpClient) { }

  getSkiresorts(): Observable<Skiresort[]> {
    return this.http.get<Skiresort[]>(baseUrl).pipe(map(
      data => {
        let retVal = Array<Skiresort>();
        data.forEach(item => retVal.push(new Skiresort(item)));
        return retVal;
      }
    ));
  }

  getMounts(id: number): Observable<Mount> {
    return this.http.get<Mount>(baseUrl + "/" + id).pipe(map(
      response => {
        return new Mount(response);
      })
    );
  }

  getTracks(id: number, params?): Observable<Track[]> {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
        .set("sort", params.sort || "") 
 };
    }

    return this.http
    .get<Track[]>(baseUrl + "/" + id + "/tracks",queryParams)
    .pipe(map(
      data => {
        let retVal = Array<Track>();
        data.forEach(item => retVal.push(new Track(item)));
        return retVal;
      }
    ));
  }
  getWeathers(id:number): Observable<Weather[]> {
    return this.http.get<Weather[]>(baseUrl + "/" + id + '/weather').pipe(map(
      data => {
        let retVal = Array<Weather>();
        data.forEach(item => retVal.push(new Weather(item)));
        return retVal;
      }
    ));
  }
  getSkipasses(id:number): Observable<Skipass[]> {
    return this.http.get<Skipass[]>(baseUrl + "/" + id + '/skipass').pipe(map(
      data => {
        let retVal = Array<Skipass>();
        data.forEach(item => retVal.push(new Skipass(item)));
        return retVal;
      }
    ));
  }

}
