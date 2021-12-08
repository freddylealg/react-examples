import React, { memo } from 'react'

export const Small = memo(  ({ value }) => {
    console.log("Render de Small")
    return (
        <small> { value } </small>
    )
});