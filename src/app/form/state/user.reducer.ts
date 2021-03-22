import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/user.model';
import * as userActions from './actions';


const getProductFeatureState = createFeatureSelector<User>('user');
export const getShowProductCode = createSelector(
  getProductFeatureState, state => state
);



const initialState: User = {
  firstName: 'No name',
  lastName: '',
  email: '',
  monthlyAdvertBudget: 0,
  phoneNumber: ''
};

// tslint:disable-next-line: typedef
export function reducer(state: User = initialState, action: userActions.StoreUser): User {
  console.log(state);
  switch (action.type) {
    case userActions.ADD_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}



export { reducer as userReducer } from './user.reducer';
