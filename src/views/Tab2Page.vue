<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title> Places for rent </ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<rent-home-list :data="rentHome"></rent-home-list>
		</ion-content>
	</ion-page>
</template>

<script>
import RentHomeList from '../components/RentHomeList.vue';
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
} from '@ionic/vue';

export default {
	name: 'Tab2Page',
	components: {
		RentHomeList,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonPage,
	},
	computed: {
		rentHome() {
			return this.$store.getters.getHouses;
		},
	},
};
</script>
