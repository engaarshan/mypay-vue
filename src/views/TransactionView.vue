<template>
  <div>
    <!-- dashboard Content -->
    <div class="container mx-auto">
      <TransactionComponent />
    </div>
  </div>
</template>

<script>

import TransactionComponent from '../components/TransactionComponent.vue';

export default {
  name: 'TransactionView',
  
	components: {
		TransactionComponent,
	},
}
</script>
