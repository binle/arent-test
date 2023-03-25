import { APP_EVENTS } from '../constants';
import { LoadingEmitData } from '../definitions';

class MyEventEmitter {
  private mapFunctions: { [key: string]: Function[] } = {};

  on(name: string, func: Function, onlyOne?: boolean) {
    if (!name) {
      return;
    }
    this.mapFunctions[name] = this.mapFunctions[name] || [];
    if (!onlyOne || this.mapFunctions[name].length === 0) {
      this.mapFunctions[name].push(func);
    }
    if (!onlyOne) {
      return this.off.bind(this, name, func);
    }
  }

  emit<T extends any>(name: string, data: T) {
    if (!name) {
      return;
    }
    for (const func of this.mapFunctions[name] || []) {
      func(data);
    }
  }

  off(name: string, removedFunc?: Function) {
    if (!name) {
      return;
    }
    this.mapFunctions[name] = this.mapFunctions[name] || [];
    if (removedFunc) {
      for (let index = 0; index < this.mapFunctions[name].length; index++) {
        const func = this.mapFunctions[name][index];
        if (func === removedFunc) {
          this.mapFunctions[name].splice(index, 1);
          break;
        }
      }
    } else {
      this.mapFunctions[name] = [];
    }
  }
}

export const appEventEmitter = new MyEventEmitter();

export const processLoading = <T,>(promise: Promise<T>, tms?: number): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    const startTime = Date.now();
    appEventEmitter.emit(APP_EVENTS.app_loading, {
      display: true,
    });
    promise
      .then((value) => {
        setTimeout(() => {
          appEventEmitter.emit<LoadingEmitData>(APP_EVENTS.app_loading, {
            display: false,
            message: 'Processing....',
          });
          resolve(value);
        }, startTime + (tms || 500) - Date.now());
      })
      .catch((error) => {
        setTimeout(() => {
          appEventEmitter.emit(APP_EVENTS.app_loading, {
            display: false,
          });
          reject(error);
        }, startTime + (tms || 500) - Date.now());
      });
  });
};
