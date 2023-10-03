import React from 'react'
import { errorConstants } from '../../utils/constants'


function ErrorPage() {
  return (
    <div>
        <h1>{errorConstants.PRODUCTS_NOT_FOUND}</h1>
    </div>
  )
}

export default ErrorPage