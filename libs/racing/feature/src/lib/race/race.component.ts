import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  CheckInService,
  CheckOutService,
  TeamService,
} from '@bierrallye/racing/data-access';
import { switchMap } from 'rxjs';
import { UserService } from '@bierrallye/shared/data-access';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ToastrService } from 'ngx-toastr';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'bierrallye-racing-feature-race',
  standalone: true,
  imports: [
    MatButtonModule,
    ZXingScannerModule,
    CommonModule,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent {
  private userService = inject(UserService);
  private teamService = inject(TeamService);
  private checkInService = inject(CheckInService);
  private checkOutService = inject(CheckOutService);
  private toastr = inject(ToastrService);

  scannerOpenCheckin = false;
  scannerOpenCheckout = false;

  user = this.userService.user.asReadonly();
  team = toSignal(
    toObservable(this.user).pipe(
      switchMap((user) => this.teamService.get(user?.uuid || ''))
    )
  );

  openScannerCheckin(): void {
    this.scannerOpenCheckin = true;
  }

  openScannerCheckout(): void {
    if (this.team()?.startTime) {
      this.scannerOpenCheckout = true;
    }
  }

  checkIn(url: string) {
    this.scannerOpenCheckin = false;
    this.checkInService.checkIn(url).subscribe({
      next: (team) => {
        this.team = signal(team).asReadonly();
        this.toastr.success('Lauf! Es geht um Leben und Tod', 'Eingecheckt');
      },
      error: (error) => {
        this.toastr.error(error, 'Fehler');
      },
    });
  }

  checkOut(url: string) {
    this.scannerOpenCheckout = false;
    this.checkOutService.validatedCheckOut(url).subscribe({
      next: (team) => {
        this.team = signal(team).asReadonly();
        this.toastr.success('Glückwunsch! Ihr seid angekommen', 'Ausgecheckt');
      },
      error: (error) => {
        this.toastr.error(error, 'Fehler');
      },
    });
  }

  cancelScanning(): void {
    this.scannerOpenCheckin = false;
    this.scannerOpenCheckout = false;
  }
}
