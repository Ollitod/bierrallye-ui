import { Component, computed, OnInit } from '@angular/core';
import { FooterComponent } from './core/footer/footer.component';
import { HardfactsComponent } from './info/hardfacts/hardfacts.component';
import { HeaderComponent } from './core/header/header.component';
import { RouterOutlet } from '@angular/router';
import { GeneralInfoComponent } from './info/general-info/general-info.component';
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
  standalone: true,
  imports: [
    HeaderComponent,
    HardfactsComponent,
    FooterComponent,
    RouterOutlet,
    GeneralInfoComponent,
  ],
})
export class AppComponent implements OnInit {
  isUser = computed(() => this.userService.userSignal()?.role === Role.USER);

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
