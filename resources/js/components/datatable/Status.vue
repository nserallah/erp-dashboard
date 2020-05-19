<template>
      <span class="center-btns">
          <span :class="{'badge': true, 'badge-success': item.is_active , 'badge-danger' : !item.is_active}">
              {{ item.is_active ? 'Active' : 'Inactive' }}
          </span>
      </span>
</template>

<script>
    export default {
        name: "Status",
        props: {
            item: {
                required: true,
            }
        }
    }
</script>

<style scoped>

</style>