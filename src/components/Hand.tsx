import { FC } from 'react'
import s from './Hand.module.css'

interface Props {
  name: string
  icon: JSX.Element
}

const Hand: FC<Props> = ({ name, icon }) => {
  return (
    <>
      <button className={s.button}>
        {icon}
        {name}
      </button>
    </>
  )
}

export default Hand
