<template>
  <div class="Robot">
    <div class="main-container">
      <ProgramHeader text="Program" :custom-click-action="customClickAction" />
      <div class="text-input">
        <TextInputComponent text="Name" />
      </div>
      <div class="description-accordion">
        <AccordionTextBoxComponent text="Description" />
      </div>
      <div>
        <DropZoneHeaderComponent />
      </div>
      <div class="flex-grow">
        <ComponentDropZone />
      </div>
      <div>
        <DropZoneButtons first_button_text="Cancel" second_button_text="Save" />
      </div>
    </div>
    <div class="drag-zone">
      <div class="drag-contents">
        <ProgramHeader text="ITEMS"></ProgramHeader>
        <DragZone :isOpen="isDrawerOpen" @close-drawer="closeDrawer" />
      </div>
    </div>
  </div>
</template>

<script>
import DragZone from './DragZone.vue';


export default {
  components: {
    DragZone
  },
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    closeDrawer() {
      this.isDrawerOpen = false;
    },
    customClickAction() {
      this.isDrawerOpen = !this.isDrawerOpen;
      console.log(this.isDrawerOpen);
    },
  },
};
</script>

<style lang="scss" scoped>
.Robot {
  display: flex;
  flex-direction: row;
}


.main-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 1200px;
  background-color: #ecf0f3;
  border: 1px solid #ccc;
  height: 100vh;
  // position: relative; /* Set position relative for children with absolute or fixed positioning */
}

.drag-zone {
  width: 50%;
}

.flex-grow {
  flex: 1;
  min-height: 0;
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
</style>

