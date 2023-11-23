<template>
  <div class="Robot">
    <div class="dynamic-container">
      <component :is="currentComponent" v-bind="componentProps" />
    </div>
    <div class="drag-zone">
      <div class="drag-contents">
        <ProgramHeader text="Drag Zone" :customClickAction="customClickAction" :leftIcon="leftIcon" :rightIcon="rightIcon"
          :leftIconBackgroundColor=leftIconBackgroundColor></ProgramHeader>
        <DragZone :programList="programList" @load-json="(program) => loadJson(program)" />
      </div>
    </div>
  </div>
</template>

<script>
import DragZone from "./DragZone.vue";
import leftIcon from "../assets/programIcon.svg";
import rightIcon from "../assets/expandIcon.svg";
import DropZone from './DropZone.vue';

export default {
  components: {
    DragZone,
    DropZone
  },
  data() {
    return {
      isDrawerOpen: false,
      leftIcon: leftIcon,
      rightIcon: rightIcon,
      leftIconBackgroundColor: "#8e5563",
      programList: [
        {
          name: "MoveJoint",
          customClickAction: "customClickAction",
          left_icon: "27_dark.svg",
          right_icon: "drag.svg",
          leftIconBackgroundColor: "#537190",
          payload: {
            name: "",
            description: "",
            points: [],
            speed: 50,
            cceleration: 50
          },
          components: [
            {
              key: "name",
              type: "TextInputComponent",
              label: "Name",
              hint: "Enter name.."
            },
            {
              key: "description",
              type: "TextAreaComponent",
              header: "Description"
            },
            {
              key: "points",
              type: "DropZoneComponent",
              header: "Points"
            },
            {
              key: "speed",
              type: "TextSliderComponent",
              prefix: "Speed",
              postfix: "%",
              min: 0,
              max: 100
            },
            {
              key: "acceleration",
              type: "TextSliderComponent",
              prefix: "Acceleration",
              postfix: "%",
              min: 0,
              max: 100
            }
          ]
        },
        {
          name: "MoveLinear",
          customClickAction: "customClickAction",
          left_icon: "26_dark.svg",
          right_icon: "drag.svg",
          leftIconBackgroundColor: "#537190",
          payload: {
            name: "",
            description: "",
            points: [],
            speed: 50,
            cceleration: 50
          },
          components: [
            {
              key: "name",
              type: "TextInputComponent",
              label: "Name",
              hint: "Enter name.."
            },
            {
              key: "description",
              type: "TextAreaComponent",
              header: "Description"
            },
            {
              key: "points",
              type: "DropZoneComponent",
              header: "Points"
            },
            {
              key: "speed",
              type: "TextSliderComponent",
              prefix: "Speed",
              postfix: "%",
              min: 0,
              max: 100
            },
            {
              key: "acceleration",
              type: "TextSliderComponent",
              prefix: "Acceleration",
              postfix: "%",
              min: 0,
              max: 100
            }
          ]
        },
        {
          name: "MoveCircular",
          customClickAction: "customClickAction",
          left_icon: "icon_move_circular.svg",
          right_icon: "drag.svg",
          leftIconBackgroundColor: "#537190",
          payload: {
            name: "",
            description: "",
            points: [],
            speed: 50,
            cceleration: 50
          },
          components: [
            {
              key: "name",
              type: "TextInputComponent",
              label: "Name",
              hint: "Enter name.."
            },
            {
              key: "description",
              type: "TextAreaComponent",
              header: "Description"
            },
            {
              key: "points",
              type: "DropZoneComponent",
              header: "Points"
            },
            {
              key: "speed",
              type: "TextSliderComponent",
              prefix: "Speed",
              postfix: "%",
              min: 0,
              max: 100
            },
            {
              key: "acceleration",
              type: "TextSliderComponent",
              prefix: "Acceleration",
              postfix: "%",
              min: 0,
              max: 100
            }
          ]
        },
        {
          name: "MoveComposite",
          customClickAction: "customClickAction",
          left_icon: "icon_move_circular.svg",
          right_icon: "drag.svg",
          leftIconBackgroundColor: "#537190",
          payload: {
            name: "",
            description: "",
            points: [],
            speed: 50,
            cceleration: 50
          },
          components: [
            {
              key: "name",
              type: "TextInputComponent",
              label: "Name",
              hint: "Enter name.."
            },
            {
              key: "description",
              type: "TextAreaComponent",
              header: "Description"
            },
            {
              key: "points",
              type: "DropZoneComponent",
              header: "Points"
            },
            {
              key: "speed",
              type: "TextSliderComponent",
              prefix: "Speed",
              postfix: "%",
              min: 0,
              max: 100
            },
            {
              key: "acceleration",
              type: "TextSliderComponent",
              prefix: "Acceleration",
              postfix: "%",
              min: 0,
              max: 100
            }
          ]
        },
        {
          name: "MoveRecordedPath",
          customClickAction: "customClickAction",
          left_icon: "icon_recorded_path.svg",
          right_icon: "drag.svg",
          leftIconBackgroundColor: "#537190",
          payload: {
            name: "",
            description: "",
            points: [],
            speed: 50,
            cceleration: 50
          },
          components: [
            {
              key: "name",
              type: "TextInputComponent",
              label: "Name",
              hint: "Enter name.."
            },
            {
              key: "description",
              type: "TextAreaComponent",
              header: "Description"
            },
            {
              key: "points",
              type: "DropZoneComponent",
              header: "Points"
            },
            {
              key: "speed",
              type: "TextSliderComponent",
              prefix: "Speed",
              postfix: "%",
              min: 0,
              max: 100
            },
            {
              key: "acceleration",
              type: "TextSliderComponent",
              prefix: "Acceleration",
              postfix: "%",
              min: 0,
              max: 100
            }
          ]
        },
      ],
      currentComponent: 'DropZone',
      componentProps: {
        components: {}
      }
    };
  },
  methods: {
    customClickAction() {
      this.isDrawerOpen = !this.isDrawerOpen;
      console.log(this.isDrawerOpen);
      this.currentComponent = DropZone
    },
    moveProgramToDropZone(programDetails) {
      this.programList.push(programDetails);
    },
    handleComponentAdded(componentList) {
      console.log("Updated component list:", componentList);
      this.programList = componentList;
    },
    loadIcon(fileName) {
      return require(`@/assets/${fileName}`);
    },
    loadJson(program) {
      this.componentProps.components = program
      this.currentComponent = "FormComponent"
    }
  },
};
</script>

<style lang="scss" scoped>
.Robot {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.dynamic-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 1200px;
  background-color: #ecf0f3;
  border: 1px solid #ccc;
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
