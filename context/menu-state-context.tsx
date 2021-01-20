import React, { createContext, useContext, useState } from 'react';

interface ContextProps {
	catalogState: boolean,
	mobileCatalog: boolean,
	mobileSearch: boolean,
	callMePopUp: boolean,
	toggleCatalog(): void,
	closeCatalog(): void,
	toggleMobileCatalog(): void,
	closeMobileCatalog(): void,
	openMobileSearch(): void,
	closeMobileSearch(): void,
	openCallMe(): void,
	closeCallMe(): void,
	form: any,
	setToForm(): void
}

const MenuContext = createContext<ContextProps>({} as ContextProps);

export const usePopUp = () => {
	return useContext(MenuContext)
}

export const MenuStateProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
	const [catalogState, setCatalogState] = useState(false)
	const [mobileCatalog, setMobileCatalog] = useState(false)
	const [mobileSearch, setMobileSearch] = useState(false)
	const [callMePopUp, setCallMe] = useState(false)
	const [form, setForm] = useState({ name: '', surname: '', phone: '', address: '', shipment: 'ship', payment: 'cash', products: [] })

	//catalog
	const toggleCatalog = () => {
		setCatalogState(!catalogState)
	}

	const closeCatalog = () => {
		setCatalogState(false)
	}

	//mobile catalog
	const toggleMobileCatalog = () => {
		setMobileCatalog(!mobileCatalog)
	}

	const closeMobileCatalog = () => {
		setMobileCatalog(false)
	}


	//mobile search
	const openMobileSearch = () => {
		setMobileSearch(true)
	}

	const closeMobileSearch = () => {
		setMobileSearch(false)
	}

	//call me pop up

	const openCallMe = () => {
		setCallMe(true)
	}

	const closeCallMe = () => {
		setCallMe(false)
	}

	const setToForm = (obj) => {
		setForm(obj)
	}


	return (
		<MenuContext.Provider value={{
			catalogState,
			toggleCatalog,
			closeCatalog,
			mobileCatalog,
			toggleMobileCatalog,
			closeMobileCatalog,
			openMobileSearch,
			closeMobileSearch,
			mobileSearch,
			callMePopUp,
			openCallMe,
			closeCallMe,
			// form,
			// setToForm
		}
		}>
			{ children}
		</MenuContext.Provider>
	)
}