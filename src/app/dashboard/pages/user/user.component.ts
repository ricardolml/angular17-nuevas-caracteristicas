import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
})
export default class UserComponent {
  private router = inject(ActivatedRoute);
  private userService = inject(UsersService);
  // public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.router.params.pipe(
      switchMap(({ id }) => this.userService.getUsersById(id)),
    ),
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return ` Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }

    return 'Información del usuario';
  });

  // constructor() {
  //   this.router.params.subscribe((params) => {
  //     console.log({ params });
  //   });
  // }
}
