(module
 (type $0 (func (param f64 f64) (result f64)))
 (memory $0 0)
 (export "add" (func $src/wasm/assembly/index/add))
 (export "memory" (memory $0))
 (func $src/wasm/assembly/index/add (param $0 f64) (param $1 f64) (result f64)
  local.get $0
  local.get $1
  f64.add
 )
)
