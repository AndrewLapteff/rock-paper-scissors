import { FC } from 'react'
import s from './Hand.module.css'

interface Props {
  name: string
  icon: JSX.Element
  onClick?: () => void
  key?: string
  selected: string
}

const Hand: FC<Props> = ({ name, icon, onClick, selected }) => {
  return (
    <>
      <button
        placeholder="button"
        style={{ backgroundColor: selected == name ? 'black' : 'white' }}
        onClick={onClick}
        className={s.button}
      >
        <div style={{ color: selected == name ? 'white' : 'black' }}>
          {icon}
        </div>
        <div style={{ color: selected == name ? 'white' : 'black' }}>
          {name}
        </div>
      </button>
    </>
  )
}

export default Hand
