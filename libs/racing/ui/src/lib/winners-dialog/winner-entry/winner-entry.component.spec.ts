import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinnerEntryComponent } from './winner-entry.component';

describe('WinnerEntryComponent', () => {
  let component: WinnerEntryComponent;
  let fixture: ComponentFixture<WinnerEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnerEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
