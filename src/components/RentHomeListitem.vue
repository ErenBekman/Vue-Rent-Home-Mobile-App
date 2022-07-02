<template>
	<ion-card :router-link="`/rent/${data.id}`">
		<ion-img :src="data.image"></ion-img>
		<ion-card-header>
			<ion-card-subtitle>Rent a Home </ion-card-subtitle>
			<ion-card-title>{{ data.location }}</ion-card-title>
			<ion-card-title
				><ion-text color="danger">
					<h4>{{ data.cost }}/ Month</h4>
				</ion-text></ion-card-title
			>
		</ion-card-header>
		<ion-card-content>
			{{ data.description }}
		</ion-card-content>
	</ion-card>
</template>

<script>
import { IonImg, IonCard } from '@ionic/vue';
export default {
	props: ['data'],
	components: {
		IonCard,
		IonImg,
	},
};
</script>
