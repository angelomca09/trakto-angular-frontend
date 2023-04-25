import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaterialDidatico } from './material-didatico';

const API_URL = 'https://api.trakto.io';

@Injectable({ providedIn: 'root' })
export class MaterialDidaticoService {

  constructor(private http: HttpClient) { }

  listMaterials() {
    const total_per_page = 10
    const params = new HttpParams()
      .append('total_per_page', total_per_page.toString());

    return this.http
      .get<{ data: MaterialDidatico[] }>(API_URL + '/document', { params });
  }

}
