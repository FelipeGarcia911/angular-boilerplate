import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListComponent } from './components/list/list.component'
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { ListItemComponent } from './components/list-item/list-item.component'
import { NewsComponent } from './news.component'

@NgModule({
  declarations: [
    ListItemComponent,
    ListComponent,
    NewsComponent,
    SearchBarComponent,
  ],
  imports: [CommonModule],
})
export class NewsModule {}
