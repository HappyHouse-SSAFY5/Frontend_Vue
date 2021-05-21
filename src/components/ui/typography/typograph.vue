<template>
  <p>
    <slot>{{ text }}</slot>
  </p>
</template>

<script>
export default {
  name: 'Typography'
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
