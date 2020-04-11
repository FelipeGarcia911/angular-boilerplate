import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Response } from './models/response'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  private endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.apiKey}`

  constructor(private client: HttpClient) {}

  getAll(): Observable<Response[]> {
    return this.client.get<Response[]>(this.endpoint)
  }
}
