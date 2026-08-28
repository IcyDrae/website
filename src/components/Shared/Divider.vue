<template>
  <div class="divider"
  :class="{ 'divider--full-width': fullWidth }"></div>
</template>

<script>
export default {
  name: "Divider",
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>
