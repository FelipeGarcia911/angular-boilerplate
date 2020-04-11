import { ListComponent } from './list.component'
import { Response } from 'src/app/services/http/models/response'

export default {
  title: 'News List',
  component: ListComponent,
}

export const EmptyResponse = () => ({
  component: ListComponent,
  props: {
    news: new Response(),
  },
})

EmptyResponse.story = {
  parameters: { notes: 'List with empty items' },
}

export const FullResponse = () => ({
  component: ListComponent,
  props: {
    news: new Response(),
  },
})

FullResponse.story = {
  parameters: { notes: 'List with items' },
}
