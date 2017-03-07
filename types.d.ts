// Type definitions for mobx-react-router 3.1
// Project: https://github.com/alisd23/mobx-react-router

import { History } from 'history';

declare namespace MobxReactRouter {

  export type Action = 'POP' | 'PUSH' | 'REPLACE';
  export type TransitionHook = (location: Location, callback: (result: any) => void) => any;
  export type LocationListener = (location: Location) => void;
  export type UnsubscribeCallback = () => any;
  export type ListenerLike = (...args: any[]) => any;

  export interface HistoryLike {
    push(path: any): any;
    replace(path: any): any;
    go(n: number): any;
    goBack(): any;
    goForward(): any;
    listen(listener: ListenerLike): UnsubscribeCallback;
  }

  export interface Location {
    pathname: string;
    search: string;
    action: string;
    key: string;
    state: any;
    query: any;
    hash?: string;
    basename?: string;
  }

  export interface LocationDescriptor {
    pathname?: string;
    search?: string;
    action?: string;
    state?: any;
    hash?: string;
    key?: string;
  }

  export interface SynchronizedHistory extends History {
    unsubscribe?: UnsubscribeCallback;
  }

  export class RouterStore {
    location: Location;
    history: SynchronizedHistory;
    push(path: string): void;
    push(location: LocationDescriptor): void;
    replace(path: string): void;
    replace(location: LocationDescriptor): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
  }

  export function syncHistoryWithStore(history: HistoryLike, store: RouterStore): SynchronizedHistory;
}

export = MobxReactRouter;
