import { MenuStateProvider } from '../context/menu-state-context'
import { CallMePopUp } from '../components/popups/call-me'
import { MobileMenu } from '../components/popups/mobile-menu'
import { MobileSearch } from '../components/popups/mobile-search'
import { useStore } from "../redux/store";
import { Provider } from "react-redux";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

	const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<MenuStateProvider>
				<CallMePopUp />
				<MobileMenu />
				<MobileSearch />
				<Component {...pageProps} />
			</MenuStateProvider>
		</Provider>
	)
}

export default MyApp