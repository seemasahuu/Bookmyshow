import React from 'react'

export const Sidebar = ({vissibal,offvisible}) => {
    if (!vissibal) return null;
  return (
    <div>
          <div className="fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm" onClick={offvisible}>
          <div className="bg-white h-full w-80 flex justify-center items-center rounded-sm absolute top-0 right-0"></div> 
          </div>
    </div>
  )
}
