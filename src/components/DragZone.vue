<template>
  <div class="drag-zone-scoped">
    <!-- Tabs -->
    <div class="tabs">
      <div @click="activateTab(1)" :class="{ active: activeTab === 1 }">Tab 1</div>
      <div @click="activateTab(2)" :class="{ active: activeTab === 2 }">Tab 2</div>
      <div @click="activateTab(3)" :class="{ active: activeTab === 3 }">Tab 3</div>
    </div>

    <!-- Tab Content -->
    <div v-if="activeTab === 1">Tab 1 Content</div>
    <div v-if="activeTab === 2">Tab 2 Content</div>
    <div v-if="activeTab === 3">Tab 3 Content</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    activateTab(tabNumber) {
      this.activeTab = tabNumber;
    },
  },
  props: {
    isOpen: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.drag-contents {
  display: flex;
  flex-direction: column;
}


.tabs {
  display: flex;
  border-bottom: 1px solid #b31b1b;
}

.tabs div {
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  border-right: 1px solid #ccc;
  /* Add border to separate tabs */
}

.tabs div:last-child {
  border-right: none;
  /* Remove border from the last tab */
}

.tabs div.active {
  background-color: #fff;
}
</style>
