import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'
import { tap, map, mergeMap, catchError } from 'rxjs/operators'

import { GET_ALL, SUCCESS } from '../types/news.types'
import { ApiCallService } from 'src/app/services/http/api-call.service'

@Injectable()
export class NewsEffects {
  constructor(private actions$: Actions, private service: ApiCallService) {}

  getNews$ = createEffect(() =>
    this.actions$.pipe(
      tap((ev) => console.log(ev)),
      ofType(GET_ALL),
      mergeMap(() =>
        this.service.getAll().pipe(
          map((movies) => ({ type: SUCCESS, payload: movies })),
          catchError(() => EMPTY)
        )
      )
    )
  )
}
