<template>
  <div class="main-container">
    <div class="Robot">
      <div class="dynamic-container">
        <ProgramHeaderComponent :properties="programHeaderProperties" />
        <component :is="currentComponent" v-bind="componentProps" />
        <div>
          <DropZoneButtons
            first_button_text="Cancel"
            second_button_text="Save"
          />
        </div>
      </div>
      <div class="drag-zone">
        <div class="drag-contents">
          <ProgramHeaderComponent :properties="programHeaderDragProperties" />

          <DragZone
            :programList="programList"
            @load-json="program => loadJson(program)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DragZone from './DragZone.vue'
import leftIcon from '../assets/programIcon.svg'
import rightIcon from '../assets/expandIcon.svg'
import DropZone from './DropZone.vue'

export default {
  components: {
    DragZone,
    DropZone
  },
  data() {
    return {
      programList: [
        {
          name: 'MoveJoint',
          left_icon: '26_dark.svg',
          right_icon: 'drag.svg',
          customClickAction: 'customClickAction',
          leftIconBackgroundColor: '#537190',
          payload: {
            name: '',
            description: '',
            points: [],
            speed: 50,
            acceleration: 50
          },
          components: [
            {
              key: 'name',
              type: 'TextInputComponent',
              props: {
                header: 'Tool'
              }
            },
            {
              key: 'description',
              type: 'TextAreaComponent',
              props: {
                header: 'Description'
              }
            },
            {
              key: 'Header',
              type: 'ProgramHeaderComponent',
              props: {
                header: 'Drop Zone',
                customClickAction: 'customClickAction',
                left_icon: '26_dark.svg',
                right_icon: 'drag.svg',
                leftIconBackgroundColor: '#537190'
              }
            },
            {
              key: 'points',
              type: 'DropZoneComponent',
              props: {
                header: 'Points'
              }
            },
            {
              key: 'speed',
              type: 'TextSliderComponent',
              props: {
                prefix: 'Speed',
                postfix: '%',
                min: 0,
                max: 100
              }
            },
            {
              key: 'acceleration',
              type: 'TextSliderComponent',
              props: {
                prefix: 'Acceleration',
                postfix: '%',
                min: 0,
                max: 100
              }
            }
          ]
        }
        // {
        //   name: 'MoveLinear',
        //   customClickAction: 'customClickAction',
        //   left_icon: '26_dark.svg',
        //   right_icon: 'drag.svg',
        //   leftIconBackgroundColor: '#537190',
        //   payload: {
        //     name: '',
        //     description: '',
        //     points: [],
        //     speed: 50,
        //     acceleration: 50,
        //     blending: false
        //   },
        //   components: [
        //     {
        //       key: 'name',
        //       type: 'TextInputComponent',
        //       props: {
        //         label: 'Name',
        //         hint: 'Enter name..'
        //       }
        //     },
        //     {
        //       key: 'description',
        //       type: 'TextAreaComponent',
        //       props: {
        //         header: 'Description'
        //       }
        //     },
        //     {
        //       key: 'points',
        //       type: 'DropZoneComponent',
        //       props: {
        //         header: 'Points'
        //       }
        //     },
        //     {
        //       key: 'speed',
        //       type: 'TextSliderComponent',
        //       props: {
        //         prefix: 'Speed',
        //         postfix: '%',
        //         min: 0,
        //         max: 100
        //       }
        //     },
        //     {
        //       key: 'acceleration',
        //       type: 'TextSliderComponent',
        //       props: {
        //         prefix: 'Acceleration',
        //         postfix: '%',
        //         min: 0,
        //         max: 100
        //       }
        //     },
        //     {
        //       key: 'blending',
        //       type: 'CheckBoxComponent',
        //       props: {
        //         prefix: 'Blending'
        //       },
        //       hasChild: true,
        //       children: [
        //         {
        //           key: 'Blending',
        //           type: 'TextSliderComponent',
        //           props: {
        //             prefix: 'Blending Radius',
        //             postfix: 'mm',
        //             min: 0,
        //             max: 100
        //           }
        //         }
        //       ]
        //     }
        //   ]
        // },
        // {
        //   name: 'MoveCircular',
        //   customClickAction: 'customClickAction',
        //   left_icon: 'icon_move_circular.svg',
        //   right_icon: 'drag.svg',
        //   leftIconBackgroundColor: '#537190',
        //   payload: {
        //     name: '',
        //     description: '',
        //     points: [],
        //     speed: 50,
        //     cceleration: 50
        //   },
        //   components: [
        //     {
        //       key: 'name',
        //       type: 'TextInputComponent',
        //       label: 'Name',
        //       hint: 'Enter name..'
        //     },
        //     {
        //       key: 'description',
        //       type: 'TextAreaComponent',
        //       header: 'Description'
        //     },
        //     {
        //       key: 'points',
        //       type: 'DropZoneComponent',
        //       header: 'Points'
        //     },
        //     {
        //       key: 'speed',
        //       type: 'TextSliderComponent',
        //       prefix: 'Speed',
        //       postfix: '%',
        //       min: 0,
        //       max: 100
        //     },
        //     {
        //       key: 'acceleration',
        //       type: 'TextSliderComponent',
        //       prefix: 'Acceleration',
        //       postfix: '%',
        //       min: 0,
        //       max: 100
        //     }
        //   ]
        // },
        // {
        //   name: 'MoveComposite',
        //   customClickAction: 'customClickAction',
        //   left_icon: 'icon_move_circular.svg',
        //   right_icon: 'drag.svg',
        //   leftIconBackgroundColor: '#537190',
        //   payload: {
        //     name: '',
        //     description: '',
        //     points: [],
        //     speed: 50,
        //     cceleration: 50
        //   },
        //   components: [
        //     {
        //       key: 'name',
        //       type: 'TextInputComponent',
        //       label: 'Name',
        //       hint: 'Enter name..'
        //     },
        //     {
        //       key: 'description',
        //       type: 'TextAreaComponent',
        //       header: 'Description'
        //     },
        //     {
        //       key: 'points',
        //       type: 'DropZoneComponent',
        //       header: 'Points'
        //     },
        //     {
        //       key: 'speed',
        //       type: 'TextSliderComponent',
        //       prefix: 'Speed',
        //       postfix: '%',
        //       min: 0,
        //       max: 100
        //     },
        //     {
        //       key: 'acceleration',
        //       type: 'TextSliderComponent',
        //       prefix: 'Acceleration',
        //       postfix: '%',
        //       min: 0,
        //       max: 100
        //     }
        //   ]
        // },
        // {
        //   name: 'MoveRecordedPath',
        //   customClickAction: 'customClickAction',
        //   left_icon: 'icon_recorded_path.svg',
        //   right_icon: 'drag.svg',
        //   leftIconBackgroundColor: '#537190',
        //   payload: {
        //     name: '',
        //     description: '',
        //     points: [],
        //     speed: 50,
        //     cceleration: 50
        //   },
        //   components: [
        //     {
        //       key: 'name',
        //       type: 'TextInputComponent',
        //       label: 'Name',
        //       hint: 'Enter name..'
        //     },
        //     {
        //       key: 'description',
        //       type: 'TextAreaComponent',
        //       header: 'Description'
        //     },
        //     {
        //       key: 'points',
        //       type: 'DropZoneComponent',
        //       header: 'Points'
        //     },
        //     {
        //       key: 'speed',
        //       type: 'TextSliderComponent',
        //       prefix: 'Speed',
        //       postfix: '%',
        //       min: 0,
        //       max: 100
        //     },
        //     {
        //       key: 'acceleration',
        //       type: 'TextSliderComponent',
        //       prefix: 'Acceleration',
        //       postfix: '%',
        //       min: 0,
        //       max: 100
        //     }
        //   ]
        // }
      ],
      currentComponent: 'DropZone',
      componentProps: {
        components: {}
      },
      programHeaderProperties: {
        header: 'Drop Zone',
        customClickAction: 'customClickAction',
        left_icon: leftIcon,
        right_icon: rightIcon,
        leftIconBackgroundColor: '#537190'
      },
      programHeaderDragProperties: {
        header: 'Drag Zone',
        customClickAction: 'customClickAction',
        left_icon: leftIcon,
        right_icon: rightIcon,
        leftIconBackgroundColor: '#537190'
      }
    }
  },
  methods: {
    customClickAction(program) {
      console.log('Custom click action received in RobotProject:', program)
      this.isDrawerOpen = !this.isDrawerOpen
      this.currentComponent = DropZone
    },
    moveProgramToDropZone(programDetails) {
      this.programList.push(programDetails)
    },
    handleComponentAdded(componentList) {
      this.programList = componentList
    },
    loadIcon(fileName) {
      return require(`@/assets/${fileName}`)
    },
    loadJson(program) {
      this.componentProps.components = program
      this.currentComponent = 'FormComponent'
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  height: 100px;
}

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
</style>
