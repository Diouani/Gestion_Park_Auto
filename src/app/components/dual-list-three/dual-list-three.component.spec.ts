import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualListThreeComponent } from './dual-list-three.component';

describe('DualListThreeComponent', () => {
  let component: DualListThreeComponent;
  let fixture: ComponentFixture<DualListThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualListThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualListThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
