import { Item } from './item'

export class Response {
  public status: string
  public totalResults: number
  public articles: Array<Item>
}
