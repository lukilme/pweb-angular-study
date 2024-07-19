import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity2Component } from './entity2.component';

describe('Entity2Component', () => {
  let component: Entity2Component;
  let fixture: ComponentFixture<Entity2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Entity2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entity2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
