import { NavbarComponent } from './navbar.component';

export default {
  title: 'Navbar',
  component: NavbarComponent,
};

export const ShortTitle = () => ({
  component: NavbarComponent,
  props: {
    title: 'Brand',
  },
});

ShortTitle.story = {
  parameters: { notes: 'Navbar with short text.' },
};

export const LongTitle = () => ({
  component: NavbarComponent,
  props: {
    title: 'My Custom Brand Name',
  },
});

LongTitle.story = {
  parameters: { notes: 'Navbar with long title.' },
};
