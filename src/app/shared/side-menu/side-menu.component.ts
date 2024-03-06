import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public menuItems = routes
    .map((router) => router.children ?? [])
    .flat()
    .filter((router) => router && router.path)
    .filter((router) => !router.path?.includes(':'));
  constructor() {}
}
