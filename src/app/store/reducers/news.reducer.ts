import { createReducer, on } from '@ngrx/store'
import * as Actions from '../actions/news.actions'
import { Response } from 'src/app/services/http/models/response'

export interface State {
  response: Response
}

const initialState: State = {
  response: new Response(),
}

const newsReducerFnc = createReducer(
  initialState,
  on(Actions.success, (state, { payload }) => ({
    ...state,
    response: payload,
  })),
  on(Actions.reset, () => initialState)
)

export function newsReducer(state: any, action: any) {
  return newsReducerFnc(state, action)
}
