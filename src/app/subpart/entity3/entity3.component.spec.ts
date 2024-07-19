import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity3Component } from './entity3.component';

describe('Entity3Component', () => {
  let component: Entity3Component;
  let fixture: ComponentFixture<Entity3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Entity3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entity3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
