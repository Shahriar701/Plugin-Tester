<template>
  <div class="Robot">
    <div class="main-container">
      <ProgramHeader
        text="Drop Zone"
        :custom-click-action="customClickAction"
        :programIcon="programIcon"
        :expandIcon="expandIcon"
        :programList="programList"
      />
      <div class="text-input">
        <TextInputComponent text="Name" />
      </div>
      <div class="description-accordion">
        <AccordionTextBoxComponent text="Description" />
      </div>
      <div>
        <DropZoneHeaderComponent />
      </div>
      <div class="flex-grow" @click="testClick">
        <ComponentDropZone @component-added="handleComponentAdded">
          <!-- Your slot content goes here -->
        </ComponentDropZone>
      </div>
      <div>
        <DropZoneButtons first_button_text="Cancel" second_button_text="Save" />
      </div>
    </div>
    <div class="drag-zone">
      <div class="drag-contents">
        <ProgramHeader
          text="Drag Zone"
          :custom-click-action="customClickAction"
          :programIcon="programIcon"
          :expandIcon="expandIcon"
          :programList="programList"
        ></ProgramHeader>
        <DragZone
          :isOpen="isDrawerOpen"
          :programList="programList"
          @close-drawer="closeDrawer"
          @move-to-drop-zone="moveProgramToDropZone"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import DragZone from "./DragZone.vue";
  import programIcon from "../assets/programIcon.svg";
  import expandIcon from "../assets/expandIcon.svg";
  import ComponentDropZone from "../../node_modules/dynamic-tree-plugin/src/components/ComponentDropZone.vue";

  export default {
    components: {
      DragZone,
      ComponentDropZone,
    },
    data() {
      return {
        isDrawerOpen: false,
        programIcon: programIcon,
        expandIcon: expandIcon,
        programList: [
          {
            text: "MoveJoint",
            customClickAction: this.customClickAction,
            programIcon,
            expandIcon,
          },
          {
            text: "MoveLinear",
            customClickAction: this.customClickAction,
            programIcon,
            expandIcon,
          },
          {
            text: "MoveCircular",
            customClickAction: this.customClickAction,
            programIcon,
            expandIcon,
          },
          {
            text: "MoveComposite",
            customClickAction: this.customClickAction,
            programIcon,
            expandIcon,
          },
          {
            text: "MoveRecordedPath",
            customClickAction: this.customClickAction,
            programIcon,
            expandIcon,
          },
        ],
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
      moveProgramToDropZone(programDetails) {
        // Add the programDetails to the programs array
        this.programList.push(programDetails);
      },
      handleComponentAdded(componentList) {
        // Update the programs array or perform any other necessary actions
        console.log("Updated component list:", componentList);
        this.programList = componentList;
      },
      testClick() {
        console.log("Click event in Robot.vue");
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
