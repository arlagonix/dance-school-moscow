import styles from './index.module.css'

type PropsType = {
  isOpen: boolean
  clickHandler: () => void
}

const ToggleMenu = ({ isOpen, clickHandler }: PropsType) => {
  return (
    <div className={styles['menu-icon']}>
      <input
        className={styles['menu-icon__cheeckbox']}
        type="checkbox"
        checked={isOpen}
        onChange={clickHandler}
      />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default ToggleMenu
