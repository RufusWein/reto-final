import { OfertModule } from './ofert.module';

describe('OfertModule', () => {
  let ofertModule: OfertModule;

  beforeEach(() => {
    ofertModule = new OfertModule();
  });

  it('should create an instance', () => {
    expect(ofertModule).toBeTruthy();
  });
});
