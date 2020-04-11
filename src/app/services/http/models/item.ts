export class Item {
  public author: string
  public title: string
  public description: string
  public urlToImage: string

  constructor(author = '', title = '', description = '', urlToImage = '') {
    this.author = author
    this.title = title
    this.description = description
    this.urlToImage = urlToImage
  }
}
