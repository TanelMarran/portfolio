<template>
  <div>
    <div id="contact"/>
    <div class="contact h-walker-container">
      <div class="h-height-vh">
        <Heading class="contact__heading">
          {{ data.title }}
        </Heading>
        <p class="contact__text text text-large">
          {{ data.text }}
        </p>
        <a class="contact__email" :href="data.email.link"><EmailSvg class="contact__icon"/>{{ data.email.text }}</a>
      </div>
      <div class="h-height-vh">
        <div class="contact__link-groups">
          <div class="contact__links" v-for="(group, index) in linkGroups" :key="index">
            <h2>
              {{ group.title }}
            </h2>
            <ul class="contact__list">
              <li class="contact__list-item" v-for="(link, linkIndex) in group.items" :key="linkIndex">
                <a class="contact__link text-large" :href="link.link">
                  <LinkedInSvg v-if="link.icon === 'linkedin'" class="contact__icon"/>
                  <ItchSvg v-else-if="link.icon === 'itch'" class="contact__icon"/>
                  <GitHubSvg v-else-if="link.icon === 'github'" class="contact__icon"/>
                  <CoHostSvg v-else-if="link.icon === 'cohost'" class="contact__icon"/>
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '@/assets/json/contact.json'
import Heading from '@/components/Heading.vue'
import EmailSvg from '@/assets/images/email.svg'
import LinkedInSvg from '@/assets/images/linkedin.svg'
import CoHostSvg from '@/assets/images/cohost.svg'
import GitHubSvg from '@/assets/images/github.svg'
import ItchSvg from '@/assets/images/itch.svg'
import {computed} from 'vue'

const linkGroups = computed(() => [data.social, data.stuff])
</script>

<style lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  padding-bottom: 128px;

  @include bp(small) {
    flex-direction: row;
    padding-bottom: 0;
  }
}

.contact__text {
  margin-top: 24px;
}

.contact__email {
  margin-right: auto;
  margin-top: 32px;
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  font-size: 24px;
  line-height: 32px;

  @include bp(medium) {
    font-size: 32px;
    line-height: 48px;
  }

  .contact__icon {
    margin-right: 12px;
  }
}

.contact__list {
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
  padding-left: 0;
}

.contact__link-groups {
  display: flex;
  flex-direction: row;
  gap: 64px;
  margin-top: 32px;

  @include bp(small) {
    flex-direction: column;
    gap: 32px;
  }
}

.contact__link {
  display: inline-flex;
  padding: 0 8px;
  align-items: center;
  cursor: pointer;

  .contact__icon {
    margin-right: 8px;
  }
}

.contact__heading {
  text-align: center;

  @include bp(small) {
    text-align: left;
  }
}

.contact__icon {
  width: 1em;
  height: 1em;
}

</style>