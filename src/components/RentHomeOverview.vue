<template>
	<ion-toolbar>
		<ion-buttons slot="start">
			<ion-back-button default-href="/tabs/tab2"> </ion-back-button>
		</ion-buttons>
	</ion-toolbar>
	<ion-img :src="image"></ion-img>
	<ion-list>
		<ion-item>
			<ion-label class="font-weight-bold">
				{{ location }} - {{ cost }}/ Month
			</ion-label>
		</ion-item>
		<ion-item>
			<!-- <ion-label>{{ location }}</ion-label> -->
			14229 Colonial Lakes Dr Orlando, Florida(FL), 32826
		</ion-item>
		<ion-item>
			<p class="font-weight-bold">Description :</p>
		</ion-item>
		<ion-item>
			{{ description }}
		</ion-item>
		<ion-item>2 Bedrooms</ion-item>
		<ion-item>2 Bathrooms</ion-item>
		<ion-item>Parking Spot</ion-item>
	</ion-list>
	<ion-footer class="ion-no-border">
		<ion-toolbar>
			<ion-title>Footer </ion-title>
		</ion-toolbar>
	</ion-footer>
</template>

<script>
import {
	IonImg,
	IonToolbar,
	IonBackButton,
	IonButtons,
	IonList,
	IonItem,
	IonLabel,
	IonFooter,
	IonTitle,
} from '@ionic/vue';
export default {
	props: ['image', 'description', 'location', 'cost'],
	components: {
		IonImg,
		IonBackButton,
		IonButtons,
		IonToolbar,
		IonList,
		IonItem,
		IonLabel,
		IonFooter,
		IonTitle,
	},
};
</script>

<style scoped>
.font-weight-bold {
	font-weight: 800;
	font-size: 18px;
}
capacitor-google-map {
	display: inline-block;
	width: 275px;
	height: 400px;
}
</style>
