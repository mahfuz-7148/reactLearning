import React from 'react'

const ExplorerData = (exploData) => {

    const explorerStyle = {
        border: '5px solid green',
        padding: '50px 100px',
        margin: '50px 50px',
        backgroundColor: 'cyan',
        fontSize: '18px'
    }

  return (
    <div style={explorerStyle}>
       <h2>Explorer Dynamic Data</h2>
       <h3>Name: {exploData.name} </h3>
       <h3>Age: {exploData.age} </h3>
       <h3>Profession: {exploData.profession} </h3>
    </div>
  )
}

export default ExplorerData