import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  hasOwnProperty = Object.prototype.hasOwnProperty;

  getChainedProperty(path: string, parentModel: any, ignoreUndefined = false): any {
    if (!path) {
      return parentModel;
    }
    let propChain = path.split('.');
    if (ignoreUndefined) {
      propChain = path.split('.').filter((segment) => !!segment);
    }
    propChain.forEach((n, i) => {
      console.log(parentModel);
      console.log(n);
      if (parentModel[n] === undefined && i < propChain.length - 1) {
        if (ignoreUndefined) {
          return;
        } else {
          parentModel[n] = {};
        }
      }
      parentModel = n !== '' ? parentModel[n] : parentModel;
    });
    return parentModel;
  }

  setModelByPath(model: any, path: string, value: any) {
    if (model === null || model === undefined || !this.isObjectType(model) || !path) {
      return model;
    }

    const pathSegments = this.getPathSegments(path);
    const length = pathSegments.length;
    const lastIndex = length - 1;

    let index = -1;
    let nested = model;
    while (nested !== null && ++index < length) {
      const key = pathSegments[index].toString();
      let newValue = value;
      if (index !== lastIndex) {
        const objValue = nested[key];
        newValue = this.isObjectType(objValue)
          ? objValue
          : this.isIndexType(pathSegments[index + 1])
          ? []
          : {};
      }
      this.setValue(nested, key, newValue);
      nested = nested[key];
    }
    return model;
  }

  private getPathSegments(path: string) {
    path = path.replace('$.', '$');
    const terms = ['.', '.map', '['];
    const containTerms = terms.some((t) => path.includes(t));
    if (!containTerms) {
      return [path];
    } else {
      const result = [];
      const pathSeg = path.split('.').filter((p) => !!p);
      pathSeg.forEach((p, i) => {
        const arrayPathSegments = p.split('[');
        if (!p.startsWith('map($') && arrayPathSegments.length === 2) {
          result.push(arrayPathSegments[0]);
          if (arrayPathSegments[1].slice(-1) === ']') {
            result.push(arrayPathSegments[1].slice(0, -1));
          }
        } else {
          if (p.startsWith('map($')) {
            const mappedIndex = p.split('$').pop().split(')')[0];
            if (mappedIndex) {
              result.push(mappedIndex);
            }
            const arrayIndex = p.substring(p.indexOf('[') + 1, p.lastIndexOf(']'));
            if (arrayIndex) {
              result.push(arrayIndex);
            }
          } else if (pathSeg[i + 1] && pathSeg[i + 1].startsWith('map($')) {
            result.push(`${arrayPathSegments[0]}[]`);
          } else {
            result.push(arrayPathSegments[0]);
          }
        }
      });
      console.log(result);
      return result;
    }
  }

  private isObjectType(value: any) {
    return value !== null && typeof value === 'object';
  }

  private isIndexType(value: any) {
    return !Number.isNaN(Number(value)) && !Number.isNaN(parseFloat(value));
  }

  private setValue(object, key, value) {
    const objValue = object[key];

    if (!this.isEqual(objValue, value)) {
      this.assignValue(object, key, value);
    } else if (value === undefined && !(key in object)) {
      this.assignValue(object, key, value);
    }
  }

  private isEqual(value, other) {
    return value === other || (value !== value && other !== other);
  }

  private assignValue(object, key, value) {
    object[key] = value;
  }
}
