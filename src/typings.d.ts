/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module jasmine {
  interface Matchers {
    toBePlaying(song): void;
  }
}
