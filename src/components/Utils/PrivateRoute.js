import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import NoteListContext from '../../utils/note-list-context';

const PrivateRoute = ({ component, ...props }) => {
  const Component = component
  return (
    <NoteListContext.Consumer>
      {({ hasAuthToken }) => (
        <Route
          render={componentProps => (
            hasAuthToken
              ? <Component {...componentProps} />
              : <Redirect
                to={{
                  pathname: '/login',
                  state: { from: componentProps.location }
                }}
              />
          )}
        />
      )}
    </NoteListContext.Consumer>
  )
}

export default PrivateRoute;