<template>
  <div class="projects">
    <div class="projects__head">
      <Heading>
        {{ data.title }}
      </Heading>
      <div class="projects__buttons">
        <template v-for="(group, index) in data.groups" :key="index">
          <Button
              @click="() => changeGroup(group)"
              type="button"
              :class="activeGroup.name === group.name && 'is-active'"
          >
            <ControllerIcon v-if="group.icon === 'controller'" class="mr-1"/>
            <WebsiteIcon v-if="group.icon === 'website'" class="mr-1"/>
            {{ group.name }}
          </Button>
        </template>
      </div>
    </div>
    <div class="projects__body">
      <div class="projects__display">
          <template v-for="(group, index) in data.groups" :key="index">
            <Transition name="list" :duration="900">
              <div v-show="activeGroup.name === group.name" class="projects__list">
                <template v-for="(project, projectIndex) in group.items" :key="projectIndex">
                    <Project v-bind="project"/>
                </template>
              </div>
            </Transition>
          </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import data from '@/assets/json/experience.json'
import {ref} from 'vue'
import Project from '@/components/Project.vue'
import Button from '@/components/Button.vue'

import ControllerIcon from '@/assets/images/controller.svg'
import WebsiteIcon from '@/assets/images/website.svg'

const activeGroup = ref(data.groups[0])

const activeProject = ref(0)

const changeGroup = (newGroup) => {
  activeGroup.value = newGroup
  activeProject.value = 0
}

</script>

<style lang="scss">
@keyframes projects-in {
  from {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes projects-out {
  0% {
    opacity: 1;
  }

  60% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}

.projects {
  margin: 128px 0;
}

.projects__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.projects__buttons {
  display: flex;
  gap: 16px;
}

.projects__list {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &.list-enter-active {
    animation: projects-in 1000ms;
  }

  &.list-leave-active {
    animation: projects-out 1000ms;
    position: absolute;
    left: 0;
    right: 0;
  }
}

.projects__body {
  display: flex;
  margin-top: 64px;
}

.projects__lists {
  flex: 1 1 25%;
  padding-right: 32px;
}

.projects__display {
  position: relative;
  display: flex;
  gap: 32px;
  flex-direction: column;
}
</style>