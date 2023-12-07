<template>
  <div class="drop-zone-scopped">
    <div class="text-input">
      <TextInputComponent label="Name" hint="Enter Name" />
    </div>
    <div class="description-accordion">
      <TextAreaComponent header="Description" hint="Description..." />
    </div>
    <div class="flex-grow">
      <DropZoneComponent> </DropZoneComponent>
    </div>
  </div>
</template>

<script>
import leftIcon from '../assets/programIcon.svg'
import rightIcon from '../assets/expandIcon.svg'

export default {
  components: {},
  data() {
    return {
      isDrawerOpen: false,
      leftIcon: leftIcon,
      rightIcon: rightIcon,
      leftIconBackgroundColor: '#8e5563'
    }
  },
  methods: {
    customClickAction() {
      this.isDrawerOpen = !this.isDrawerOpen
      console.log(this.isDrawerOpen)
    },
    loadIcon(fileName) {
      return require(`@/assets/${fileName}`)
    },
    loadJson(program) {
      this.componentProps.components = program
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-grow {
  flex: 1;
  min-height: 0;
  height: 100vh;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.description-accordion {
  padding: 12px;
}

.text-input {
  padding: 12px;
}

.text-input,
.description-accordion {
  padding: 8px;
}
</style>
