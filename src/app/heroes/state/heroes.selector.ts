import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroState } from './heroes.reducer';

const getHeroFeatureState = createFeatureSelector<HeroState>('heroes');

export const getCurrentHero = createSelector(
  getHeroFeatureState,
  hero => hero.currentHero
);

export const getHeroes = createSelector(
  getHeroFeatureState,
  heores => heores.heroes
);
