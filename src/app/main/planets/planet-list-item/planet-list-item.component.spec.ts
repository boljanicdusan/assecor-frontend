import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetListItemComponent } from './planet-list-item.component';

describe('PlanetListItemComponent', () => {
  let component: PlanetListItemComponent;
  let fixture: ComponentFixture<PlanetListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
