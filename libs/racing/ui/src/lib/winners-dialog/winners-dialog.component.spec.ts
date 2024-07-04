import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinnersDialogComponent } from './winners-dialog.component';

describe('WinnersDialogComponent', () => {
  let component: WinnersDialogComponent;
  let fixture: ComponentFixture<WinnersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnersDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
