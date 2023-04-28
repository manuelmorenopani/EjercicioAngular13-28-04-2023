import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems = [
    { name: 'home', route: '/' },
    { name: 'contacto', route: '/contacto' },
    { name: 'curriculum', route: '/curriculum' },
    { name: 'sobremi', route: '/sobremi' }
  ];
  constructor() { }
}

 
