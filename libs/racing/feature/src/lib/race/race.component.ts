import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Team, TimeTrackingApiService } from '@bierrallye/racing/data-access';
import { BehaviorSubject, switchMap } from 'rxjs';
import { UserService } from '@bierrallye/shared/data-access';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ToastrService } from 'ngx-toastr';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'bierrallye-racing-feature-race',
  imports: [
    MatButtonModule,
    ZXingScannerModule,
    CommonModule,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaceComponent {
  private userService = inject(UserService);
  private timeTrackingApiService = inject(TimeTrackingApiService);
  private toastr = inject(ToastrService);

  private team$ = new BehaviorSubject<Team | undefined>(undefined);

  scannerOpenCheckin = signal(false);
  scannerOpenCheckout = signal(false);
  team = toSignal(this.team$);

  constructor() {
    toObservable(this.userService.user)
      .pipe(
        switchMap((user) => this.timeTrackingApiService.team(user?.uuid || ''))
      )
      .subscribe((team) => this.team$.next(team));
  }

  openScannerCheckin(): void {
    this.scannerOpenCheckin.set(true);
  }

  openScannerCheckout(): void {
    if (this.team()?.startTime) {
      this.scannerOpenCheckout.set(true);
    }
  }

  checkIn(url: string) {
    this.scannerOpenCheckin.set(false);
    this.timeTrackingApiService.checkIn(url).subscribe({
      next: (team) => {
        this.team$.next(team);
        this.toastr.success('Lauf! Es geht um Leben und Tod', 'Eingecheckt');
      },
      error: (error) => {
        this.toastr.error(error, 'Fehler');
      },
    });
  }

  checkOut(url: string) {
    this.scannerOpenCheckout.set(false);
    this.timeTrackingApiService.validatedCheckOut(url).subscribe({
      next: (team) => {
        this.team$.next(team);
        this.toastr.success('Glückwunsch! Ihr seid angekommen', 'Ausgecheckt');
      },
      error: (error) => {
        this.toastr.error(error, 'Fehler');
      },
    });
  }

  cancelScanning(): void {
    this.scannerOpenCheckin.set(false);
    this.scannerOpenCheckout.set(false);
  }
}
