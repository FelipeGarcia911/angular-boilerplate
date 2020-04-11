import { Subscription } from 'rxjs'
import { Component, OnInit, OnDestroy } from '@angular/core'

import { NewsService } from 'src/app/store/services/news/news.service'
import { Response } from 'src/app/services/http/models/response'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit, OnDestroy {
  news = new Response()
  news$: Subscription

  constructor(private service: NewsService) {}

  ngOnInit(): void {
    this.news$ = this.service
      .getAllNews()
      .subscribe((result) => (this.news = result))
  }

  ngOnDestroy(): void {
    this.news$.unsubscribe()
  }
}
