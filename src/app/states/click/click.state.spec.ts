import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ClickState } from './click.state';
import { Click } from './click.actions';

describe('Click actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ClickState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    store.dispatch(new Click());
    store.select(state => state.click.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining([]));
    });
  });

});
