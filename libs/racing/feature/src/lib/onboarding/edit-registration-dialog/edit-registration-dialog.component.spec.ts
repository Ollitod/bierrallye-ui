import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRegistrationDialogComponent } from './edit-registration-dialog.component';

describe('EditRegistrationDialogComponent', () => {
  let component: EditRegistrationDialogComponent;
  let fixture: ComponentFixture<EditRegistrationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRegistrationDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditRegistrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
