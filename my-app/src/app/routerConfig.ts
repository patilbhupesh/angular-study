import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'header',
    component: HeaderComponent
  },
  {
    path: 'Footer',
    component: FooterComponent
  },
  { path: 'leftsidebar',
    component: LeftSideBarComponent
  },
  { path: 'maincontent',
  component: MainContentComponent
}
];
export default appRoutes;
