import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DsgvoDialogComponent } from './dsgvo-dialog.component';

describe('DsgvoDialogComponent', () => {
  let component: DsgvoDialogComponent;
  let fixture: ComponentFixture<DsgvoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsgvoDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DsgvoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
