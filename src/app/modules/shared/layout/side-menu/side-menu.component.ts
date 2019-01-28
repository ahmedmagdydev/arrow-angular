import {Component} from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

  sideMenu: any[] = [
      {title: 'home', class: 'home', path: '/home', active: 'active', sub: [
              {title: 'new', class: 'icon-Shape-1083-1', path: '/home', queryParams: { status: 'new' }},
              {title: 'done', class: 'icon-Shape-1083-1', path: '/home', queryParams: { status: 'done' }},
              {title: 'assigned', class: 'icon-Shape-1083-1', path: '/home', queryParams: { status: 'assigned' }},
              {title: 'waiting', class: 'icon-Shape-1083-1', path: '/home', queryParams: { status: 'waiting' }},
              {title: 'delayed', class: 'icon-Shape-1083-1', path: '/home', queryParams: { status: 'delayed' }},
          ]},
      {title: 'correspondences', class: 'correspondence', path: '/corres', sub: [
              {title: 'new', class: 'icon-Shape-1083-1', path: '/corres', queryParams: { status: 'new' }},
              {title: 'done', class: 'icon-Shape-1083-1', path: '/corres', queryParams: { status: 'done' }},
              {title: 'assigned', class: 'icon-Shape-1083-1', path: '/corres', queryParams: { status: 'assigned' }},
              {title: 'waiting', class: 'icon-Shape-1083-1', path: '/corres', queryParams: { status: 'waiting' }},
              {title: 'delayed', class: 'icon-Shape-1083-1', path: '/corres', queryParams: { status: 'delayed' }},
              {title: 'deleted', class: 'icon-Shape-1083-1', path: '/corres', queryParams: { status: 'deleted' }},
              {title: 'recall', class: 'icon-Shape-1083-1', path: '/corres', queryParams: { status: 'recall' }},
              {title: 'global', class: 'icon-Shape-1083-1', path: '/corres', queryParams: { status: 'global' }},
              {title: 'notifications', class: 'icon-Shape-1083-1', path: '/corres', queryParams: { status: 'notifications' }},
              {title: 'personalFolders', class: 'icon-Shape-1083-1', path: '/corres', queryParams: { status: 'personalFolders' }},
          ]},
      {title: 'addressBook', class: 'address', path: '/address-book'},
      {title: 'reports', class: 'reports', path: ''},
      {title: 'search', class: 'search', path: '/search'},
      {title: 'tasks', class: 'tasks', path: ''},
      {title: 'monitor', class: 'monitor', path: ''},
  ];
  @Language() lang: string;
  constructor() { }

}
