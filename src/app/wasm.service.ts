// src/app/services/wasm.service.ts
import { Injectable } from '@angular/core';
import loader, { Imports } from '@assemblyscript/loader';

const DEFAULT_IMPORTS: Imports = { 
  env: {
    abort: function() {
      throw new Error('Abort called from wasm file');
    },
  },
  index: {
    primeNumberLog: function(primeNumber: number) {
      console.log(`primeNumberLog: ${primeNumber}`);
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class WasmService {
  private wasm: any;
  private wasmReady: Promise<void>;

  constructor() {
    this.wasmReady = this.loadWasm();
  }

  private async loadWasm() {
    const response = await fetch('assets/wasm/index.wasm');
    const buffer = await response.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(buffer);
    this.wasm = wasmModule.instance.exports;
  }

  async add(a: number, b: number): Promise<number> {
    await this.wasmReady;
    return this.wasm.add(a, b);
  }
}
