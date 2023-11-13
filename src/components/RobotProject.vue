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
    <ProgramDrawer :isOpen="isDrawerOpen" @close-drawer="closeDrawer" />
  </div>
</template>

<script>
import ProgramHeader from "../../node_modules/dynamic-tree-plugin/src/components/ProgramHeader.vue";
import ProgramDrawer from "@/components/ProgramDrawer.vue";

export default {
  components: {
    ProgramHeader,
    ProgramDrawer,
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
      // Your custom click action for the image
      console.log("Image clicked in the main project");
      // You can add more functionality here as needed
      this.isDrawerOpen = !this.isDrawerOpen; // Toggle the drawer state
    },
  },
};
</script>

<style scoped>
.Robot {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Set min-height to 100% of the viewport height */
  background-color: #ecf0f3;
}

.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  background-color: #ecf0f3;
  border: 1px solid #ccc;
  height: 100vh;
}
.flex-grow {
  flex: 1; /* Make the ComponentDropZone grow to fill the available vertical space */
  min-height: 0; /* Allow the ComponentDropZone to shrink if necessary */
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
}</style>
