import { RemoveItemModule } from './remove-item.module';

describe('RemoveItemModule', () => {
  let removeItemModule: RemoveItemModule;

  beforeEach(() => {
    removeItemModule = new RemoveItemModule();
  });

  it('should create an instance', () => {
    expect(removeItemModule).toBeTruthy();
  });
});
