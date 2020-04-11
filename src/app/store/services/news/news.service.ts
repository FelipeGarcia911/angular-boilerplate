import { Injectable } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { getAll } from '../../actions/news.actions'
import { getAllNews } from '../../selectors/news.selectors'
import { Response } from 'src/app/services/http/models/response'

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private store: Store) {}

  getAllNews(): Observable<Response> {
    this.store.dispatch(getAll())
    return this.store.pipe(select(getAllNews))
  }
}
