import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { IUser, UserService } from '@bierrallye/shared/data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user?: IUser;

  constructor(private userService: UserService) {
    this.userService.user
      .pipe(takeUntilDestroyed())
      .subscribe((user) => (this.user = user));
  }

  logout(): void {
    this.userService.logout();
  }
}
