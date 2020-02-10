import { NavigationActions } from 'react-navigation';

let _navigator;

export function setTopLevelNavigator(navigatorRef) {
  if (!_navigator) {
    _navigator = navigatorRef;
  }
  return;
}

export function navigate(routeName, params) {
  if (!routeName) {
    return;
  }
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}
