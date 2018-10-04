import { AddItemModule } from './add-item.module';

describe('AddItemModule', () => {
  let addItemModule: AddItemModule;

  beforeEach(() => {
    addItemModule = new AddItemModule();
  });

  it('should create an instance', () => {
    expect(addItemModule).toBeTruthy();
  });
});
