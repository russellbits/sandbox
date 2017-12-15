<template>
  <div class="message">
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {

    }
  }
}
</script>

<style>
.message {
  color: green;
  border: 1px solid gray;
  padding: 12px;
}
</style>
