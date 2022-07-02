import { createStore } from 'vuex';

const store = createStore({
	state: () => ({
		RentHomeData: [
			{
				id: 1,
				location: 'London, GB',
				image:
					'https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-e82b1.appspot.com/o/images%2FzkhwO1xgjgP5dhifRRZZ0Vu8hxH2-exterior_2.jpeg-55b3e0b3-0dc0-404c-a4bc-d0917cdbb078?alt=media&token=edf3dba3-1867-4b4b-8448-195cd1c0156f',
				description:
					'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota Madison was named the capital of the Wisconsin Territory in 1836',
				cost: '$ 500',
			},
			{
				id: 2,
				location: 'Madison, WI',
				image:
					'https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-e82b1.appspot.com/o/images%2FzkhwO1xgjgP5dhifRRZZ0Vu8hxH2-exterior_5.jpeg-c0409136-75e4-4f90-abc5-d7bdeba30ceb?alt=media&token=e7c294bc-d93e-41f0-945e-1099fba5b8ec',
				description:
					'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota Madison was named the capital of the Wisconsin Territory in 1836',
				cost: '$ 600',
			},
			{
				id: 3,
				location: 'America, USA',
				image:
					'https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-e82b1.appspot.com/o/images%2FzkhwO1xgjgP5dhifRRZZ0Vu8hxH2-exterior_1.jpeg-09f4d5cd-614f-4615-8b23-b0e4b6e34602?alt=media&token=59fd2147-0d5d-4a3d-972c-e329b034f287',
				description:
					'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota Madison was named the capital of the Wisconsin Territory in 1836',
				cost: '$ 700',
			},
		],
	}),

	getters: {
		getHouses: (state) => state.RentHomeData,
		getHome: (state) => {
			return (memoryId) => {
				console.log('memoryId :>> ', memoryId);
				return state.RentHomeData.find((memory) => memory.id == memoryId);
			};
		},
	},
	mutations: {
		addHome(state, homeData) {
			const newHome = {
				id: new Date().toISOString(),
				location: homeData.location,
				image: homeData.image,
				description: homeData.description,
				cost: homeData.cost,
			};
			state.RentHomeData.unshift(newHome);
		},
	},
	actions: {
		addHome(context, homeData) {
			context.commit('addHome', homeData);
		},
	},
});

export default store;
