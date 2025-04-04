import React from 'react'

interface ListItemProps {
    title : string,
    description : string
}

const ListItem = ({title, description}:ListItemProps) => {
  return (
    <div className='w-full bg-neutral-400 flex flex-col'>
        <title className='text-2xl font-semibold'>{title}</title>
        <p>{description}</p>
    </div>
  )
}

export default ListItem