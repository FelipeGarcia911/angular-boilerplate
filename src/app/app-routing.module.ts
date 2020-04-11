import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NewsComponent } from './modules/news/news.component'

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
