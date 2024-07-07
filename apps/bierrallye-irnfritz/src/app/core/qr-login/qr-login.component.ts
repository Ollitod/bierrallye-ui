import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { NgxKjuaComponent } from 'ngx-kjua';
import { QrLoginData, QrLoginService } from '@bierrallye/racing/data-access';
import { ParticipantNamesPipe } from './participant-names.pipe';

@Component({
  selector: 'app-qr-login',
  standalone: true,
  imports: [NgxKjuaComponent, ParticipantNamesPipe],
  templateUrl: './qr-login.component.html',
  styleUrls: ['./qr-login.component.scss'],
})
export class QrLoginComponent implements AfterViewInit {
  encodedURL?: string;
  data?: QrLoginData;

  @ViewChild('imgBuffer') imageElement?: ElementRef;

  image?: HTMLImageElement;

  private qrLoginService = inject(QrLoginService);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    this.qrLoginService.messagesOfType('payload').subscribe((data) => {
      this.data = data;
      this.cdr.detectChanges();
    });

    this.qrLoginService.receiverInitialized();
  }

  ngAfterViewInit(): void {
    setTimeout(() => (this.image = this.imageElement?.nativeElement), 500);
  }
}
