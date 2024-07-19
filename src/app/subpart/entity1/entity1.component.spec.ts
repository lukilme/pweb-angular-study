import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity1Component } from './entity1.component';

describe('Entity1Component', () => {
  let component: Entity1Component;
  let fixture: ComponentFixture<Entity1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Entity1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entity1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
