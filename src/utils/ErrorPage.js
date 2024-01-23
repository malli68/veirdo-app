import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div>
        <h1>Oops!</h1>
        <p>sorry, an unexpected error has occured</p>
        <i>{error.statusText || error.message}</i>
    </div>
  )
}

export default ErrorPage;