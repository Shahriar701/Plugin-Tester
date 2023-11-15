<template>
  <div class="drag-zone-scoped">
    <div class="tabs">
      <div @click="activateTab(1)" :class="{ active: activeTab === 1 }">Tab 1</div>
      <div @click="activateTab(2)" :class="{ active: activeTab === 2 }">Tab 2</div>
      <div @click="activateTab(3)" :class="{ active: activeTab === 3 }">Tab 3</div>
    </div>
    <div v-if="activeTab === 1">
      <div v-for="(program, index) in programs" :key="index">
        <ProgramHeader :text="program.text" :custom-click-action="program.customClickAction" 
                       :programIcon="program.programIcon" :expandIcon="program.expandIcon" />
      </div>
    </div>
    <div v-if="activeTab === 2">Tab 2 Content</div>
    <div v-if="activeTab === 3">Tab 3 Content</div>
  </div>
</template>

<script>

import programIcon from '../assets/27_dark.svg';
import expandIcon from '../assets/expandIcon.svg'
import ProgramHeader from '../../node_modules/dynamic-tree-plugin/src/components/ProgramHeader.vue';

export default {
  data() {
    return {
      activeTab: 1,
      programIcon: programIcon,
      expandIcon: expandIcon,
      // programList: [
      //   { text: "MoveJoint", customClickAction: "action1", programIcon, expandIcon },
      //   { text: "MoveLinear", customClickAction: "action2", programIcon, expandIcon },
      //   { text: "MoveCircular", customClickAction: "action3", programIcon, expandIcon },
      //   { text: "MoveComposite", customClickAction: "action4", programIcon, expandIcon },
      //   { text: "MoveRecordedPath", customClickAction: "action5", programIcon, expandIcon },
      // ],
    };
  },
  methods: {
    activateTab(tabNumber) {
      this.activeTab = tabNumber;
    },
  },
  props: {
    isOpen: Boolean,
    programs: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProgramHeader,
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
