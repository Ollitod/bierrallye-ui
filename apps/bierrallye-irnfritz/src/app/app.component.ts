import { Component, computed, OnInit } from '@angular/core';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { RouterOutlet } from '@angular/router';
import {
  Role,
  TokenService,
  UserService,
} from '@bierrallye/shared/data-access';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
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
