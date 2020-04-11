import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module'
import { reducers, metaReducers } from './store/reducers'

import { NavbarComponent } from './components/shared/navbar/navbar.component'
import { AppComponent } from './app.component'

import { NewsModule } from './modules/news/news.module'
import { NewsEffects } from './store/effects/news.effects'

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
    EffectsModule.forRoot([NewsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
