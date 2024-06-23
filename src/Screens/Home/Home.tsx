import { useUser } from '@clerk/clerk-expo';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { supabase } from '../../Utils/SupabaseConfig';

function Home() {
	const { user } = useUser();

	const updateAvatar = async () => {
		await supabase
			.from('users')
			.update({ avatar_url: user?.imageUrl })
			.eq('email', user?.primaryEmailAddress?.emailAddress ?? '')
			.is('avatar_url', null)
			.select();
	};

	useEffect(() => {
		user && updateAvatar();
	}, [user]);

	return (
		<View>
			<Text>Home Screen</Text>
		</View>
	);
}

export default Home;
