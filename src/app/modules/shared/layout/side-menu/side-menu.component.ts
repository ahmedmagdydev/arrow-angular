import {Component} from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

  @Language() lang: string;
  constructor() { }

}
