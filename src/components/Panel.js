import React, { useState } from 'react'

function Panel({color}) {

    const [state, setState] = useState(true);

    let styles = {
        transition: 'all 1s',
        width: "300px",
        height: "300px",
        border: "1px solid red",
        borderRadius: "20px",
    }

  return (
    <div
        class={state? `w-3/6 h-2/5 border border-solid rounded-xl ${color} m-10 transition ease-linear duration-1000` : styles}
        style={styles}
        onClick={() => {setState(!state)}} >
    </div>
  )
}

export default Panel