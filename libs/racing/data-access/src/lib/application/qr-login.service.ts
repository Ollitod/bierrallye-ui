import { Injectable, OnDestroy } from '@angular/core';
import { QrLoginData } from '../model/qr-login-data.model';
import { filter, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QrLoginService implements OnDestroy {
  private channel?: BroadcastChannel;
  private onMessage = new Subject<QrLoginData>();

  constructor() {
    this.initialize();
  }

  private initialize() {
    this.channel = new BroadcastChannel('qr-login');
    this.channel.onmessage = (message) => this.onMessage.next(message.data);
  }

  ngOnDestroy() {
    this.channel?.close();
  }

  publish(data: QrLoginData) {
    this.channel?.postMessage(data);
  }

  receiverInitialized() {
    this.publish({ type: 'notifyReady' });
  }

  messagesOfType(type: 'notifyReady' | 'payload'): Observable<QrLoginData> {
    return this.onMessage.pipe(filter((message) => message.type === type));
  }
}
