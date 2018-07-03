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
interface Number {
  pad(): string;
}
