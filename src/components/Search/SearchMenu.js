/**
 * Массив с названиями пунктов меню.
 * @param props.items
 *
 * Обработчик нажатия на пункт меню, меняет состояние компонента Search.
 * @param props.HandleClick
 *
 * @returns {JSX.Element}
 */

export default function SearchMenu(props) {
	return (
		<nav className={'search__menu'}>
			<ul>
				<li><a href={'/'}>Карта</a></li>
				<li><a href={'/'}>Картинки</a></li>
				<li><a href={'/'}>Музыка</a></li>
			</ul>
		</nav>
	)
}