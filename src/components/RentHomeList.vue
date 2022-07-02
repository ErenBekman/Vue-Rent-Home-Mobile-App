<template>
	<ion-list>
		<rent-home-list-item
			v-for="item in data"
			:key="item.id"
			:data="item"
		></rent-home-list-item>
	</ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import RentHomeListItem from './RentHomeListitem.vue';
export default {
	props: ['data'],
	components: {
		IonList,
		RentHomeListItem,
	},
};
</script>
