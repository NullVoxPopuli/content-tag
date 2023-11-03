/* tslint:disable */
/* eslint-disable */
/**
*/
export class Preprocessor {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} src
* @param {string | undefined} filename
* @returns {string}
*/
  process(src: string, filename?: string): string;
/**
* @param {string} src
* @param {string | undefined} filename
* @returns {any}
*/
  parse(src: string, filename?: string): any;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_preprocessor_free: (a: number) => void;
  readonly preprocessor_new: () => number;
  readonly preprocessor_process: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly preprocessor_parse: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
