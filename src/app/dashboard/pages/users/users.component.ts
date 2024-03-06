import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TitleComponent],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {
  public userServices = inject(UsersService);

  constructor() {}

  ngOnInit(): void {
    console.log(this.userServices.users());
  }
}
