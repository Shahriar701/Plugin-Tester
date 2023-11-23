<template>
    <div class="drop-zone-scopped">
        <ProgramHeader text="Drop Zone" :leftIcon="leftIcon" :customClickAction="customClickAction" :rightIcon="rightIcon"
            :leftIconBackgroundColor="leftIconBackgroundColor" />
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
            <ComponentDropZone>
            </ComponentDropZone>
        </div>
        <div>
            <DropZoneButtons first_button_text="Cancel" second_button_text="Save" />
        </div>
    </div>
</template>
  
<script>
import leftIcon from "../assets/programIcon.svg";
import rightIcon from "../assets/expandIcon.svg";

export default {
    components: {
    },
    data() {
        return {
            isDrawerOpen: false,
            leftIcon: leftIcon,
            rightIcon: rightIcon,
            leftIconBackgroundColor: "#8e5563",
        };
    },
    methods: {
        customClickAction() {
            this.isDrawerOpen = !this.isDrawerOpen;
            console.log(this.isDrawerOpen);
        },
        loadIcon(fileName) {
            return require(`@/assets/${fileName}`);
        },
        loadJson(program) {
            this.componentProps.components = program
        }
    },
};
</script>
  
<style lang="scss" scoped>
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
  