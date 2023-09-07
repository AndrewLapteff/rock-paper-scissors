import { FC } from 'react'
import s from './Hand.module.css'

interface Props {
  name: string
  icon: JSX.Element
  onClick: () => void
}

const Hand: FC<Props> = ({ name, icon, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={s.button}>
        {icon}
        {name}
      </button>
    </>
  )
}

export default Hand
