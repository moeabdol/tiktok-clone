import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';

const useWarmUpBrowser = () => {
	useEffect(() => {
		// Warm up the android browser to improve UX
		// https://docs.expo.dev/guides/authentication/#improving-user-experience
		void WebBrowser.warmUpAsync();
		return () => {
			void WebBrowser.coolDownAsync();
		};
	}, []);
};

export default useWarmUpBrowser;
