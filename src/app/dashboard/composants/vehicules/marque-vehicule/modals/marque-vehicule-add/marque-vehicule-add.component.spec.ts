import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueVehiculeAddComponent } from './marque-vehicule-add.component';

describe('MarqueVehiculeAddComponent', () => {
  let component: MarqueVehiculeAddComponent;
  let fixture: ComponentFixture<MarqueVehiculeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueVehiculeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueVehiculeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
