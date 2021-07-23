// import {  useState } from 'react';
// import { GetStaticProps } from 'next';

import Header from '@components/Header';
import Landing from '@components/Landing';

// export const getStaticProps: GetStaticProps = async () => {
// 	//Fetch Portfolio Data
// 	try {
// 		const response = await fetch(process.env.API_URL as string, {
// 			headers: {
// 				'X-Master-Key': process.env.API_KEY as string,
// 			},
// 		});
// 		const { record }: TAPIResponse = await response.json();

// 		return {
// 			props: { data: record },
// 		};
// 	} catch (error) {
// 		console.log(error);

// 		return {
// 			props: { data: {}, error: 'Oh oh Something Went Wrong! Try Later 😢' },
// 		};
// 	}
// };

//{ data }: { data: TDataFormat }

const Home = () => {
	return (
		<>
			<Header />
			<Landing />
		</>
	);
};

export default Home;
