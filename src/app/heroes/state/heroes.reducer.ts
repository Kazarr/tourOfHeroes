import { Hero } from 'src/app/model/Hero';
import { HeroActions, HeroActionTypes } from './heroes.actions';

export interface HeroState {
  currentHero: Hero;
  heroes: Hero[];
}

const initialState: HeroState = {
  currentHero: null,
  heroes: []
};

export function reducer(state = initialState, action: HeroActions): HeroState {
  switch (action.type) {

    case HeroActionTypes.SetCurrentHero:
      return {
        ...state,
        currentHero: { ...action.payload }
      };

    case HeroActionTypes.GetHeroesSuccess:
      return {
        ...state,
        heroes: action.paylaod
      };

    case HeroActionTypes.InitializeHero:
      return {
        ...state,
        currentHero: {
          id: 0,
          name: 'DefaulHero',
          // stamina: 0,
          // agility: 0,
          // strenght: 0,
          // intelect: 0,
          // level: 0
        }
      };

    case HeroActionTypes.DeleteHeroSuccess:
      return {
        ...state,
        heroes: [...state.heroes].filter(hero => hero.id !== action.payload.id)
      };

    case HeroActionTypes.SaveHeroSuccess:
      return {
        ...state,
        heroes: [...state.heroes, action.payload]
      };

    case HeroActionTypes.UpdateHeroSuccess:
      const newHeroes = state.heroes;
      const heroIndex = newHeroes.findIndex(h => h.id === action.payload.id);
      newHeroes[heroIndex] = action.payload;
      return {
          ...state,
          heroes: state.heroes.map(hero => hero.id === action.payload.id
            ? {...action.payload} : hero)
        };

    default:
      return state;
  }
}

