<template>
  <div>
    <!-- dashboard Content -->
    <div class="container mx-auto">
      <DashboardComponent />
    </div>
  </div>
</template>

<script>

import DashboardComponent from '../components/DashboardComponent.vue';

export default {
  name: 'HomeView',
  
	components: {
		DashboardComponent,
	},
}
</script>
