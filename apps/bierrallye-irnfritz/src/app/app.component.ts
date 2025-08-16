import { Component, computed, inject, OnInit } from '@angular/core';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {
  Role,
  TokenService,
  UserService,
} from '@bierrallye/shared/data-access';
import { MatIconRegistry } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  private router = inject(Router);

  private _hiddenHeaderRoutes = ['/overview'];

  showHeader = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(
        (event) =>
          !this._hiddenHeaderRoutes.some((url) =>
            event.urlAfterRedirects.endsWith(url)
          )
      )
    )
  );

  isUser = computed(() => this.userService.user()?.role === Role.USER);

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }

  ngOnInit(): void {
    if (!this.tokenService.isExpired()) {
      this.userService.loginUser();
    }
  }
}
