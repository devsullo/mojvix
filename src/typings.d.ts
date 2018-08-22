/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface Element {
  documentOffsetTop(): number;
}
interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
declare var debug: {
  log: any;
  error: any;
  info: any;
  warn: any;
}
interface Number {
  pad(): string;
}
