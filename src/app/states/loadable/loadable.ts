import { Selector, State, createSelector } from '@ngxs/store';

export interface LoadableStateModel {
  loading: boolean;
  loaded: boolean;
}

export interface LoadableState {
  loading: boolean;
  loaded: boolean;
}