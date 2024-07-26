import { Component, OnInit } from '@angular/core';
import { WasmService } from '../../wasm.service';

@Component({
  selector: 'app-entity1',
  templateUrl: './entity1.component.html',
  styleUrl: './entity1.component.scss',
  standalone: true
})
export class Entity1Component implements OnInit {
  result: number = 0;

  constructor(private wasmService: WasmService) {}

  async ngOnInit() {
    this.result = await this.wasmService.add(2, 3);
  }
}
