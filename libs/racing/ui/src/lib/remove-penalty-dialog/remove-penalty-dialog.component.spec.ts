import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemovePenaltyDialogComponent } from './remove-penalty-dialog.component';

describe('RemovePenaltyDialogComponent', () => {
  let component: RemovePenaltyDialogComponent;
  let fixture: ComponentFixture<RemovePenaltyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemovePenaltyDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemovePenaltyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
