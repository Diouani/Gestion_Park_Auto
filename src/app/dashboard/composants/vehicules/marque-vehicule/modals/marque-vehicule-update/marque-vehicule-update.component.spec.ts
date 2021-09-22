import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueVehiculeUpdateComponent } from './marque-vehicule-update.component';

describe('MarqueVehiculeUpdateComponent', () => {
  let component: MarqueVehiculeUpdateComponent;
  let fixture: ComponentFixture<MarqueVehiculeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueVehiculeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueVehiculeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
