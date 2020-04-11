import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { reducers, metaReducers } from './reducers'
import { NavbarComponent } from './components/shared/navbar/navbar.component'
import { AppComponent } from './app.component'
import { NewsModule } from './modules/news/news.module'

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    NewsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
