<template>
  <div class="drag-zone-scoped">
    <div class="tabs">
      <div @click="activateTab(1)" :class="{ active: activeTab === 1 }">
        Motions
      </div>
      <div @click="activateTab(2)" :class="{ active: activeTab === 2 }">
        Logics
      </div>
      <div @click="activateTab(3)" :class="{ active: activeTab === 3 }">
        Apps
      </div>
    </div>
    <div v-if="activeTab === 1">
      <div v-for="(program, index) in programList" :key="index">
        <ProgramHeaderComponent
          :header="program.name"
          :customClickAction="() => customClickAction(program)"
          :leftIcon="loadIcon(program.left_icon)"
          :rightIcon="loadIcon(program.right_icon)"
          :leftIconBackgroundColor="program.leftIconBackgroundColor"
        />
      </div>
    </div>
    <div v-if="activeTab === 2">
      Logics
    </div>
    <div v-if="activeTab === 3">
      Apps
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1
    }
  },
  methods: {
    activateTab(tabNumber) {
      this.activeTab = tabNumber
    },
    moveToComponentDropZone(program) {
      this.$emit('move-to-drop-zone', program)
      console.log('clicked worked')
    },
    loadIcon(fileName) {
      return require(`@/assets/${fileName}`)
    },
    customClickAction(program) {
      this.$emit('load-json', program)
    },

    hasProgramHeaderComponent(components) {
      return components.some(
        component => component.type === 'ProgramHeaderComponent'
      )
    },

    getProgramHeaderComponent(components) {
      const programHeaderComponent = components.find(
        component => component.type === 'ProgramHeaderComponent'
      )
      return programHeaderComponent ? programHeaderComponent.type : null
    }
  },
  props: {
    programList: Array,
    program: Object
  }
}
</script>

<style lang="scss" scoped>
.drag-contents {
  display: flex;
  flex-direction: column;
}

.tabs {
  display: flex;
  border-bottom: solid #b31b1b;
}

.tabs div {
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  border-right: 1px solid #ccc;
}

.tabs div:last-child {
  border-right: none;
}

.tabs div.active {
  background-color: #fff;
}
</style>
