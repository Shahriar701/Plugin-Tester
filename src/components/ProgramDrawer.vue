<template>
    <div v-if="isOpen" class="program-drawer">
        <div class="drawer-content">
            <h3>Drawer Title</h3>
        </div>
        <div class="close-drawer" @click="closeDrawer">
            <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve">
                <polygon
                    points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 " />
            </svg>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        isOpen: Boolean,
    },
    methods: {
        closeDrawer() {
            // You can dispatch an action to close the drawer
            // For simplicity, we're emitting an event in this example
            this.$emit('close-drawer');
        },
    },
};
</script>
  
<style scoped>
.program-drawer {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    /* Adjust the width as needed */
    background-color: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    padding: 20px;
    z-index: 1000;
}

.drawer-content {
    /* Add your styles for drawer content */
}

.close-drawer {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>
  