<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Explore </ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<div class="font-weight-bold">
				<h3>Recommended</h3>
			</div>

			<ion-slides pager="true" :options="slideOpts" ref="slides">
				<ion-slide>
					<h1>
						<ion-chip>
							<ion-label color="secondary">Secondary Label</ion-label>
						</ion-chip>
						<ion-img
							src="https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-e82b1.appspot.com/o/images%2FzkhwO1xgjgP5dhifRRZZ0Vu8hxH2-exterior_1.jpeg-09f4d5cd-614f-4615-8b23-b0e4b6e34602?alt=media&token=59fd2147-0d5d-4a3d-972c-e329b034f287"
						>
						</ion-img>
					</h1>
				</ion-slide>
				<ion-slide>
					<h1>
						<ion-img
							src="https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-e82b1.appspot.com/o/images%2FzkhwO1xgjgP5dhifRRZZ0Vu8hxH2-exterior_2.jpeg-55b3e0b3-0dc0-404c-a4bc-d0917cdbb078?alt=media&token=edf3dba3-1867-4b4b-8448-195cd1c0156f"
						></ion-img>
					</h1>
				</ion-slide>
				<ion-slide>
					<h1>
						<ion-img
							src="https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-e82b1.appspot.com/o/images%2FzkhwO1xgjgP5dhifRRZZ0Vu8hxH2-exterior_5.jpeg-c0409136-75e4-4f90-abc5-d7bdeba30ceb?alt=media&token=e7c294bc-d93e-41f0-945e-1099fba5b8ec"
						></ion-img>
					</h1>
				</ion-slide>
			</ion-slides>
			<div class="font-weight-bold">
				<h3>Categories</h3>
			</div>
			<ion-grid>
				<ion-row>
					<ion-col router-link="/tabs/tab2">
						<ion-img
							src="https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-e82b1.appspot.com/o/images%2FzkhwO1xgjgP5dhifRRZZ0Vu8hxH2-exterior_5.jpeg-c0409136-75e4-4f90-abc5-d7bdeba30ceb?alt=media&token=e7c294bc-d93e-41f0-945e-1099fba5b8ec"
						></ion-img>
						<h2>Places for rent</h2>
					</ion-col>
					<ion-col router-link="/tabs/tab3">
						<ion-img
							src="https://firebasestorage.googleapis.com/v0/b/house-marketplace-app-e82b1.appspot.com/o/images%2FzkhwO1xgjgP5dhifRRZZ0Vu8hxH2-exterior_2.jpeg-55b3e0b3-0dc0-404c-a4bc-d0917cdbb078?alt=media&token=edf3dba3-1867-4b4b-8448-195cd1c0156f"
						></ion-img>
						<h2>Places for sale</h2>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>

<script>
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonSlides,
	IonSlide,
	IonImg,
	IonChip,
	IonLabel,
	IonCol,
	IonGrid,
	IonRow,
} from '@ionic/vue';

export default {
	name: 'Tab1Page',
	components: {
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonPage,
		IonSlides,
		IonSlide,
		IonImg,
		IonChip,
		IonLabel,
		IonCol,
		IonGrid,
		IonRow,
	},
	data() {
		return {
			slideOpts: {
				initialSlide: 1,
				speed: 400,
			},
		};
	},
};
</script>

<style>
.font-weight-bold {
	font-weight: 800;
}
</style>
