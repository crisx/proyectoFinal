import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { PhotoPage } from '../photo/photo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PhotoPage;
  tab2Root = ListPage;

  constructor() {

  }
}
