import AppNavigator from '../components/routes';
import { NavigationActions } from 'react-navigation';

const firstAction = AppNavigator.router.getActionForPathAndParams('MainScreenNavigator');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('FirstScreen');
const initialNavState = AppNavigator.router.getStateForAction(tempNavState);
const navigation = (state=initialNavState, action) => {
  let nextState;
  switch (action.type) {
      case 'LOGIN':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          state
        );
        break;
      case 'Navigation/BACK':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          state
        );
        break;
      case 'LOGOUT':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Login' }),
          state
        );
        break;
      case 'CUSTOM_ROUTE':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: action.routeName, params:action.params }),
          state
        );
        break;
        case 'Navigation/NAVIGATE':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: action.routeName }),
          state
        );
        break;
      default:
        return state;

  }
  return nextState || state;

}

export default navigation
