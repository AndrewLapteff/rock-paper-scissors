import { FC } from 'react'
import s from './Hand.module.css'
import { useAppContext } from '../context/AppContext'

interface Props {
  name: string
  icon: JSX.Element
  onClick?: () => void
  key?: string
  selected: string
}

const Hand: FC<Props> = ({ name, icon, onClick, selected }) => {
  const { state } = useAppContext()

  return (
    <>
      <button
        disabled={!!state.runTimer}
        placeholder="button"
        style={{
          backgroundColor: selected == name ? 'black' : 'white',
          scale: selected == name ? '120%' : '100%',
        }}
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
