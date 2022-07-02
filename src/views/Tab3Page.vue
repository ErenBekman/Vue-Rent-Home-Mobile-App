<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Add Home</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<add-rent-home @save-memory="saveMemory"></add-rent-home>
			</ion-header>
		</ion-content>
	</ion-page>
</template>

<script>
import AddRentHome from '../components/AddRentHome.vue';
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
} from '@ionic/vue';

export default {
	name: 'Tab3Page',
	components: {
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonPage,
		AddRentHome,
	},
	methods: {
		saveMemory(homeData) {
			this.$store.dispatch('addHome', homeData);
			this.$router.replace('/tabs/tab2');
		},
	},
};
</script>
