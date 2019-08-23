import { Action } from '@ngrx/store';
import { Hero } from 'src/app/hero';


export enum HeroActionTypes {
  GetHeroes = '[Heores] Get heroes',
  InitializeHero = '[Heroes] Initialize hero',
  DeleteHero = '[Heroes] DeleteHero',
  SetCurrentHero = '[Heroes] Set Current Hero',
  SaveHero = '[Heroes] Save hero'
}

export class GetHeroes implements Action {
  readonly type = HeroActionTypes.GetHeroes;

  constructor(public payload: Hero[]) {}
}

export class InitializeHero implements Action {
  readonly type = HeroActionTypes.InitializeHero;
}

export class DeleteHero implements Action {
  readonly type = HeroActionTypes.DeleteHero;

  constructor(public payload: Hero) {}
}

export class SetCurrentHero implements Action {
  readonly type = HeroActionTypes.SetCurrentHero;

  constructor(public payload: Hero) {}
}

export class SaveHero implements Action {
  readonly type = HeroActionTypes.SaveHero;
  constructor(public payload: Hero) {}
}

export type HeroActions = GetHeroes
  | InitializeHero
  | DeleteHero
  | SetCurrentHero
  | SaveHero;
