import React from 'react'

export default function ProgressionBar({ max, current })
{
  const width = (current / max) * 100

  return (
    <div id='progressionBar'>
      <div id='progressionBarFull' style={{ width: `${width}%` }}></div>
    </div>
  )
}
