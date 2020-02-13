import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import NoteListContext from '../../utils/NoteListContext';

const PublicOnlyRoute = ({ component, ...props }) => {
  const Component = component
  return (
    <NoteListContext.Consumer>
      {({ hasAuthToken }) => (
        <Route
          render={componentProps => (
            hasAuthToken
              ? <Redirect
                to={{
                  pathname: '/home',
                  state: { from: componentProps.location }
                }}
              />
              : <Component {...componentProps} />
          )}
        />
      )}
    </NoteListContext.Consumer>
  )
}

export default PublicOnlyRoute;