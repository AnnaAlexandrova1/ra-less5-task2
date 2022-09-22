/**
 * NewsMenu
 * Массив с названиями пунктов меню ['Сейчас в новостях', 'В мире', 'Рекомендуем']
 * @param props.items
 *
 * обработчик нажатия на пункт меню меняет состояние компонента News, в следствии чего
 * компонент NewsList отображает соответствующий список новостей.
 * @param props.handleClick
 *
 * @returns {JSX.Element}
 */

export default function NewsMenu(props) {
  return (
    <nav className={'news__menu menu-news'}>
      <ul>
        <li><a href={'/'}>Сейчас в новостях</a></li>
        <li><a href={'/'}>В мире</a></li>
        <li><a href={'/'}>Рекомендуем</a></li>
        <li><div className='date'>19 сентября 2022 г.</div></li>
      </ul>
    </nav>
  )
}