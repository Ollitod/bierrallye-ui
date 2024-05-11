import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  CheckInService,
  CheckOutService,
  ITeam,
  TeamService,
} from '@bierrallye/racing/data-access';
import { switchMap } from 'rxjs';
import { IUser, UserService } from '@bierrallye/shared/data-access';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ToastrService } from 'ngx-toastr';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bierrallye-racing-feature-race',
  standalone: true,
  imports: [MatButtonModule, ZXingScannerModule, CommonModule],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent {
  scannerOpenCheckin = false;
  scannerOpenCheckout = false;

  team?: ITeam;
  user?: IUser;

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private checkInService: CheckInService,
    private checkOutService: CheckOutService,
    private toastr: ToastrService
  ) {
    this.userService.user
      .pipe(
        takeUntilDestroyed(),
        switchMap((user) => {
          this.user = user;
          return this.teamService.get(user?.uuid || '');
        })
      )
      .subscribe((team) => (this.team = team));
  }

  openScannerCheckin(): void {
    this.scannerOpenCheckin = true;
  }

  openScannerCheckout(): void {
    if (this.team?.teamStartTime) {
      this.scannerOpenCheckout = true;
    }
  }

  checkIn(url: string) {
    this.scannerOpenCheckin = false;
    this.checkInService.checkIn(url).subscribe({
      next: (team) => {
        this.team = team;
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
        this.team = team;
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
