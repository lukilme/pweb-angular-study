import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Entity1Component } from '../entity1/entity1.component';
import { Entity2Component } from '../entity2/entity2.component';
import { Entity3Component } from '../entity3/entity3.component';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  standalone: true,
  imports: [MatTabsModule, Entity1Component,Entity2Component, Entity3Component],
})
export class ContainerComponent {

}
