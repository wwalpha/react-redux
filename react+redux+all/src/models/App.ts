import { Record } from 'immutable';

export interface IApp extends AppProps, Record<AppProps> {
  get<K extends keyof AppProps>(key: K): AppProps[K];
}

export interface AppUIProps {
  count: number;
}

export interface AppProps extends AppUIProps {}

/**
 * App共通ステータス
 */
export default class App extends Record<AppProps>({
  count: 0
}) {
  add() {
    return this.set('count', this.count + 1);
  }

  remove() {
    return this.set('count', this.count - 1);
  }
}
