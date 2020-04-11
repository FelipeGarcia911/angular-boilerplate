import { ListItemComponent } from './list-item.component'
import { Response } from 'src/app/services/http/models/response'
import { Item } from 'src/app/services/http/models/item'

export default {
  title: 'News List/Item',
  component: ListItemComponent,
}

export const EmptyItem = () => ({
  component: ListItemComponent,
  props: {
    article: new Item(),
  },
})

EmptyItem.story = {
  parameters: { notes: 'Item with empty props' },
}

export const FullItem = () => ({
  component: ListItemComponent,
  props: {
    article: new Item(
      'Author',
      'My awesome title',
      'Description text.......................................................................................',
      'https://cloudinary-res.cloudinary.com/image/upload/c_scale,fl_attachment,w_500/v1/logo/for_dark_bg/cloudinary_logo_for_dark_bg.png'
    ),
  },
})

FullItem.story = {
  parameters: { notes: 'Item with props' },
}
