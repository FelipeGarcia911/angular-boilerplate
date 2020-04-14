import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular'
import CATEGORIES_QUERY from '../../../cms/queries/categorie/categories'

import { Subscription } from 'rxjs'
import { Component, OnInit, Input, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() title = 'Navbar'

  data: any = {}
  loading = true
  errors: any

  private queryCategories: Subscription

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.fetchCategories()
  }

  fetchCategories(): void {
    this.queryCategories = this.apollo
      .watchQuery({ query: CATEGORIES_QUERY })
      .valueChanges.subscribe((result) => {
        this.data = result.data
        this.loading = result.loading
        this.errors = result.errors
      })
  }

  ngOnDestroy(): void {
    this.queryCategories.unsubscribe()
  }
}
