import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import en from "../../languages/english.json";
import tel from "../../languages/telugu.json";
import hindi from "../../languages/hindi.json";

export const LangContext = React.createContext();

const local = navigator.language;

let lang = en;
if (local === "hindi") {
	lang = hindi;
} else {
	if (local === "telugu") lang = tel;
	else lang = en;
}

const LangWrapper = (props) => {
	const [locale, setLocale] = useState(local);
	const [messages, setMessages] = useState(lang);

	function selectLangFunc(e) {
		const newLocale = e.target.value;
		setLocale(newLocale);
		if (newLocale === "hindi") {
			setMessages(hindi);
		} else {
			if (newLocale === "telugu") setMessages(tel);
			else setMessages(en);
		}
	}

	return (
		<LangContext.Provider value={{ locale, selectLangFunc }}>
			<IntlProvider messages={messages} locale={locale}>
				{props.children}
			</IntlProvider>
		</LangContext.Provider>
	);
};

export default LangWrapper;
