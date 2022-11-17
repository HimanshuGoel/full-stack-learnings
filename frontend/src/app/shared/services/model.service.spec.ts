import { TestBed } from '@angular/core/testing';

import { ModelService } from './model.service';

// file.only
describe('Model Service', () => {
  let modelService: ModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelService]
    });

    modelService = TestBed.inject(ModelService);
  });

  xit('should be created', () => {
    expect(modelService).toBeTruthy();
  });

  xit('should handle invalid inputs correctly', () => {
    let model: object;

    model = {};
    modelService.setModelByPath(model, '', 'some value');
    expect(model).toEqual({});

    model = {};
    modelService.setModelByPath('', 'a', 'some value');
    expect(model).toEqual({});

    model = {};
    modelService.setModelByPath(undefined, 'a', 'some value');
    expect(model).toEqual({});

    model = {};
    modelService.setModelByPath(null, 'a', 'some value');
    expect(model).toEqual({});

    model = {};
    modelService.setModelByPath(null, null, 'some value');
    expect(model).toEqual({});

    model = {};
    modelService.setModelByPath(null, null, null);
    expect(model).toEqual({});
  });

  xdescribe('setModelByPath', () => {
    it(`should set the values correctly on blank modal as per path and data`, () => {
      let model: object;

      // Type 1
      model = {};
      modelService.setModelByPath(model, 'a', 'value of a');
      expect(model).toEqual({ a: 'value of a' });

      model = {};
      modelService.setModelByPath(model, 'a', 1);
      expect(model).toEqual({ a: 1 });

      model = {};
      modelService.setModelByPath(model, 'a', false);
      expect(model).toEqual({ a: false });

      model = {};
      modelService.setModelByPath(model, 'a', true);
      expect(model).toEqual({ a: true });

      model = {};
      modelService.setModelByPath(model, 'a', {});
      expect(model).toEqual({ a: {} });

      model = {};
      modelService.setModelByPath(model, 'a', []);
      expect(model).toEqual({ a: [] });

      model = {};
      modelService.setModelByPath(model, 'a', { aa: 'value of aa' });
      expect(model).toEqual({ a: { aa: 'value of aa' } });

      // Type 2
      model = {};
      modelService.setModelByPath(model, 'a.b', 'value of a');
      expect(model).toEqual({ a: { b: 'value of a' } });

      model = {};
      modelService.setModelByPath(model, 'a.b', 1);
      expect(model).toEqual({ a: { b: 1 } });

      model = {};
      modelService.setModelByPath(model, 'a.b', false);
      expect(model).toEqual({ a: { b: false } });

      model = {};
      modelService.setModelByPath(model, 'a.b', true);
      expect(model).toEqual({ a: { b: true } });

      model = {};
      modelService.setModelByPath(model, 'a.b', {});
      expect(model).toEqual({ a: { b: {} } });

      model = {};
      modelService.setModelByPath(model, 'a.b', []);
      expect(model).toEqual({ a: { b: [] } });

      model = {};
      modelService.setModelByPath(model, 'a.b', { aa: 'value of aa' });
      expect(model).toEqual({ a: { b: { aa: 'value of aa' } } });

      // Type 3
      model = {};
      modelService.setModelByPath(model, 'a.b.c', 'value of a');
      expect(model).toEqual({ a: { b: { c: 'value of a' } } });

      model = {};
      modelService.setModelByPath(model, 'a.b.c', 1);
      expect(model).toEqual({ a: { b: { c: 1 } } });

      model = {};
      modelService.setModelByPath(model, 'a.b.c', false);
      expect(model).toEqual({ a: { b: { c: false } } });

      model = {};
      modelService.setModelByPath(model, 'a.b.c', true);
      expect(model).toEqual({ a: { b: { c: true } } });

      model = {};
      modelService.setModelByPath(model, 'a.b.c', {});
      expect(model).toEqual({ a: { b: { c: {} } } });

      model = {};
      modelService.setModelByPath(model, 'a.b.c', []);
      expect(model).toEqual({ a: { b: { c: [] } } });

      model = {};
      modelService.setModelByPath(model, 'a.b.c', { aa: 'value of aa' });
      expect(model).toEqual({ a: { b: { c: { aa: 'value of aa' } } } });

      // Type 4
      model = {};
      modelService.setModelByPath(model, 'a[0]', { aa: 'value of aa index 0' });
      console.log(model);
      expect(model).toEqual({ a: [{ aa: 'value of aa index 0' }] });

      model = {};
      modelService.setModelByPath(model, 'a[1]', { aa: 'value of aa index 0' });
      console.log(model);
      expect(model).toEqual({ a: [undefined, { aa: 'value of aa index 0' }] });

      model = {};
      modelService.setModelByPath(model, 'a[2]', { aa: 'value of aa index 0' });
      console.log(model);
      expect(model).toEqual({ a: [undefined, undefined, { aa: 'value of aa index 0' }] });

      model = {};
      modelService.setModelByPath(model, 'a[0].b.c', { d: 'value of d' });
      console.log(model);
      expect(model).toEqual({ a: [{ b: { c: { d: 'value of d' } } }] });

      model = {};
      modelService.setModelByPath(model, 'a.b[0].c', { d: 'value of d' });
      console.log(model);
      expect(model).toEqual({ a: { b: [{ c: { d: 'value of d' } }] } });
    });

    it(`should set the values correctly on blank modal as per mapped path and data`, () => {
      let model: object;

      model = {};
      modelService.setModelByPath(model, 'a..b', false);
      expect(model).toEqual({ a: { b: false } });

      //   model = {};
      //   modelService.setModelByPath(model, 'process.d.e.f.map($.g)', { d: 'value of d' });
      //   expect(model).toEqual({ a: { b: [{ c: { d: 'value of d' } }] } });

      //   model = {};
      //   modelService.setModelByPath(model, 'process.d.e.f.map($)', { d: 'value of d' });
      //   expect(model).toEqual({ a: { b: [{ c: { d: 'value of d' } }] } });

      //   model = {};
      //   modelService.setModelByPath(model, 'process.d.e.f.map($.g)[1]', { d: 'value of d' });
      //   expect(model).toEqual({ a: { b: [{ c: { d: 'value of d' } }] } });
    });
  });

  fit('should get chained properties', () => {
    const model = {
      a: {
        b: {
          c: 'value of c'
        }
      }
    };
    // let result = modelService.getChainedProperty('a.b.c', model);
    // expect(result).toEqual('value of c');

    // result = modelService.getChainedProperty('a...b.c', model);
    // expect(result).toEqual('value of c');

    // result = modelService.getChainedProperty('a..b.c', model);
    // expect(result).toEqual('value of c');

    const result = modelService.getChainedProperty('z.a.b.c', model);
    expect(result).toEqual('value of c');
  });
});
