import { ActionReducerMap, MetaReducer } from '@ngrx/store'
import { environment } from '../../../environments/environment'
import * as fromNews from './news.reducer'

export interface State {
  news: fromNews.State
}

export const reducers: ActionReducerMap<State> = {
  news: fromNews.newsReducer,
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : []
