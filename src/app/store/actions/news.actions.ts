import { createAction, props } from '@ngrx/store'
import { GET_ALL, SUCCESS, ERROR, RESET } from '../types/news.types'
import { Response } from 'src/app/services/http/models/response'

export const getAll = createAction(GET_ALL)
export const success = createAction(SUCCESS, props<{ payload: Response }>())
export const error = createAction(ERROR)
export const reset = createAction(RESET)
