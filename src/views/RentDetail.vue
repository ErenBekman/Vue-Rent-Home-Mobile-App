<template>
	<h2 v-if="!loadMemory">dont loaded</h2>
	<rent-home-overview
		v-else
		:location="loadMemory.location"
		:description="loadMemory.description"
		:image="loadMemory.image"
		:cost="loadMemory.cost"
	></rent-home-overview>
</template>

<script>
import RentHomeOverview from '../components/RentHomeOverview';
export default {
	components: { RentHomeOverview },
	data() {
		return {
			homeId: this.$route.params.id,
		};
	},
	computed: {
		loadMemory() {
			return this.$store.getters.getHome(this.homeId);
		},
	},
};
</script>
