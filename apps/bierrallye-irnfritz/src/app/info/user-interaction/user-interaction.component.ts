import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DeregisterComponent,
  RegisterComponent,
} from '@bierrallye/registration/feature';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-user-interaction',
  standalone: true,
  imports: [
    CommonModule,
    DeregisterComponent,
    MatTabsModule,
    RegisterComponent,
  ],
  templateUrl: './user-interaction.component.html',
  styleUrls: ['./user-interaction.component.scss'],
})
export class UserInteractionComponent {}
