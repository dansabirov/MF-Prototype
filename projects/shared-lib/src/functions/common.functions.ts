// import { NotificationService } from '@shared/services';
import { cloneDeep, identity, isEmpty, sortBy, template, templateSettings } from 'lodash';

export function classNames(...args: any[]) {
  const classes = [];

  for (const arg of args) {
    if (!arg) {
      continue;
    }

    const argType = typeof arg;

    if (argType === 'string') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner: any = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  const result = classes.join(' ');
  return result || undefined;
}

export function stringTemplate(templateStr: string, data: any) {
  templateSettings.interpolate = /\${([\s\S]+?)}/g;

  const compiled = template(templateStr);
  const resultString = compiled(data);
  return resultString;
}

export function numberMedian(arr: number[]) {
  if (isEmpty(arr)) {
    return undefined;
  }
  arr = arr.slice(0);
  const middle = (arr.length + 1) / 2,
    sorted = sortBy(arr, identity);
  return sorted.length % 2 ? sorted[middle - 1] : (sorted[middle - 1.5] + sorted[middle - 0.5]) / 2;
}
/*
export function copyToClipboard(value: string, notificationMessage: string) {
  const zero = '0';
  const tmpElement = document.createElement('textarea');
  tmpElement.style.position = 'fixed';
  tmpElement.style.left = zero;
  tmpElement.style.top = zero;
  tmpElement.style.opacity = zero;
  tmpElement.value = value;
  document.body.appendChild(tmpElement);
  tmpElement.focus();
  tmpElement.select();
  document.execCommand('copy');
  document.body.removeChild(tmpElement);
  NotificationService.success({ my: 'right top', at: 'right top', of: window, offset: '-8 55' }, notificationMessage);
}

export function getTextWidth(text: string, font: string = '14px Roboto') {
  const canvas = (getTextWidth as any).canvas || ((getTextWidth as any).canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  const result = `${metrics.width + 2}px`;

  return result;
}

export function getTextWidthInPx(text: string, font: string = '14px Roboto', extra: number = 0) {
  const canvas = (getTextWidth as any).canvas || ((getTextWidth as any).canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);

  return metrics.width + 2 + extra;
}

export function getSortedDataByField<T extends object>(inputData: Array<any | object>, fieldName: string): Array<T | void> {
  if (!Array.isArray(inputData) || !inputData.length || typeof fieldName !== 'string') {
    return [];
  }

  return sortBy<T>(inputData, [(data: any | object) => typeof data[fieldName] === 'string' && data[fieldName].toLowerCase()]);
}

export function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    (char: string): string => {
      // tslint:disable-next-line:no-bitwise
      const seed: number = (Math.random() * 16) | 0;
      // tslint:disable-next-line:no-bitwise
      const newSym: number = char === 'x' ? seed : (seed & 0x3) | 0x8;

      return newSym.toString(16);
    }
  );
}

export function isFirefox(): boolean {
  // tslint:disable-next-line:no-bitwise
  return !!~navigator.userAgent.toLowerCase().indexOf('firefox');
}

export function isEdge(): boolean {
  // tslint:disable-next-line:no-bitwise
  return !!~navigator.userAgent.toLowerCase().indexOf('edge');
}

export function getZoomPercentage(): number {
  if (window['safari']) {
    return Math.round((window.outerWidth / window.innerWidth) * 100);
  }

  const isRetinaDisplay: boolean = window.matchMedia(
    '(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
  ).matches;

  const dividerVal: number = isRetinaDisplay ? 2 : 1;

  return Math.round((window.devicePixelRatio / dividerVal) * 100);
}

export function getSortedArrElms<T>(data: Array<T> | any): Array<T> | any {
  if (!Array.isArray(data) || !data.length) {
    return data;
  }

  const resultData: Array<T> = cloneDeep<Array<T>>(data);

  resultData.sort((a: T, b: T): number => {
    // Number in String
    if (typeof a === 'string' && typeof b === 'string' && !isNaN(+a) && !isNaN(+b)) {
      return +a - +b;
    }

    // String
    if (typeof a === 'string' && typeof b === 'string') {
      return Intl.Collator().compare(a, b);
    }

    // Any
    return +a - +b;
  });

  return resultData;
}

export function getSortedArrByFieldName<T>(data: Array<T> | any, fieldName: string): Array<T> | any {
  if (!Array.isArray(data) || !data.length || typeof fieldName !== 'string' || !fieldName.length) {
    return data;
  }

  const resultData: Array<T> = cloneDeep<Array<T>>(data);

  resultData.sort((a: T, b: T): number => Intl.Collator().compare(a[fieldName], b[fieldName]));

  return resultData;
}
*/