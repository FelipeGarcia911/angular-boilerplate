import { Item } from './item'

export class Response {
  public status: string
  public totalResults: number
  public articles: Array<Item>

  constructor(
    status = '',
    totalResults = 0,
    articles: Array<Item> = [new Item()]
  ) {
    this.status = status
    this.totalResults = totalResults
    this.articles = articles
  }
}
