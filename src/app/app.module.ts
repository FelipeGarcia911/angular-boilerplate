import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { StoreModule } from '@ngrx/store'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'

import { reducers, metaReducers } from './reducers'
import { NavbarComponent } from './components/shared/navbar/navbar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { GraphQLModule } from './graphql.module'
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    BrowserAnimationsModule,
    GraphQLModule,
    MarkdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
