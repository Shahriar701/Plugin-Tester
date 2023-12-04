<template>
  <div class="main-container">
    <div class="Robot">
      <div class="dynamic-container">
        <ProgramHeaderComponent :properties="programHeaderProperties" />
        <component
          :is="currentComponent"
          v-bind="componentProps"
          :key="componentProps.form.id"
        />
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
          id: 'move-joint',
          left_icon: '27_dark.svg',
          right_icon: 'drag.svg',
          leftIconBackgroundColor: '#537190',
          payload: {
            name: '',
            description: '',
            points: [],
            speed: 50,
            acceleration: 50,
            blending: false
          },
          components: [
            {
              key: 'name',
              type: 'TextInputComponent',
              props: {
                label: 'Name',
                hint: 'Enter name..'
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
        },
        {
          name: 'MoveLinear',
          id: 'move-linear',
          left_icon: '26_dark.svg',
          right_icon: 'drag.svg',
          leftIconBackgroundColor: '#537190',
          payload: {
            name: '',
            description: '',
            points: [],
            speed: 50,
            acceleration: 50,
            blending: false
          },
          components: [
            {
              key: 'name',
              type: 'TextInputComponent',
              props: {
                label: 'Name',
                hint: 'Enter name..'
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
            },
            {
              key: 'blending',
              type: 'CheckBoxComponent',
              props: {
                prefix: 'Blending',
                hasChild: true,
                childComponents: [
                  {
                    componentName: 'TextSliderComponent',
                    props: {
                      prefix: 'Blending Radius',
                      postfix: 'mm',
                      min: 0,
                      max: 100
                    }
                  }
                ]
              },
              children: [
                {
                  componentName: 'TextSliderComponent',
                  props: {
                    prefix: 'Blending Radius',
                    postfix: 'mm',
                    min: 0,
                    max: 100
                  }
                }
              ]
            }
          ]
        },
        {
          name: 'MoveCircular',
          id: 'move-circular',
          left_icon: 'icon_move_circular.svg',
          right_icon: 'drag.svg',
          leftIconBackgroundColor: '#537190',
          payload: {
            name: '',
            description: '',
            points: [],
            speed: 50,
            acceleration: 50,
            blending: false
          },
          components: [
            {
              key: 'name',
              type: 'TextInputComponent',
              props: {
                label: 'Name',
                hint: 'Enter name..'
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
        },
        {
          name: 'MoveComposite',
          id: 'move-composite',
          left_icon: 'icon_move_circular.svg',
          right_icon: 'drag.svg',
          leftIconBackgroundColor: '#537190',
          payload: {
            name: '',
            description: '',
            points: [],
            speed: 50,
            acceleration: 50,
            blending: false
          },
          components: [
            {
              key: 'name',
              type: 'TextInputComponent',
              props: {
                label: 'Name',
                hint: 'Enter name..'
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
        },
        {
          name: 'MoveRecordedPath',
          id: 'move-recorded-path',
          left_icon: 'icon_recorded_path.svg',
          right_icon: 'drag.svg',
          leftIconBackgroundColor: '#537190',
          payload: {
            name: '',
            description: '',
            points: [],
            speed: 50,
            acceleration: 50,
            blending: false
          },
          components: [
            {
              key: 'name',
              type: 'TextInputComponent',
              props: {
                label: 'Name',
                hint: 'Enter name..'
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
      ],
      currentComponent: 'DropZone',
      componentProps: {
        form: {}
      },
      programHeaderProperties: {
        header: 'Drop Zone',
        left_icon: leftIcon,
        right_icon: rightIcon,
        leftIconBackgroundColor: '#537190'
      },
      programHeaderDragProperties: {
        header: 'Drag Zone',
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
      this.componentProps.form = program
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
