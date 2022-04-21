<template>
  <div>
    <div class="d-flex flex-row justify-end pr-0" @click="close">
      <v-btn
        fab
        x-small
        color="error lighten-1"
        dark
        class="ma-3"
      >
        <v-icon dark small>
          mdi-close
        </v-icon>
      </v-btn>
    </div>
    <v-list>
      <v-divider/>
      <v-list-item nuxt active-class="activeLink" to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Главная</v-list-item-title>
      </v-list-item>

      <v-list-item nuxt active-class="activeLink" to="/news">
          <v-list-item-icon>
            <v-icon>mdi-newspaper-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Новости</v-list-item-title>
      </v-list-item>
      <v-list-group prepend-icon="mdi-account">
        <template v-slot:activator>
          <v-list-item-title>Абитуриентам</v-list-item-title>
        </template>
        <v-list-item nuxt active-class="activeLink" to="/#directions" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-ballot</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Направления</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt active-class="activeLink" to="/abiturients#rules" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-archive</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Правила приёма</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt active-class="activeLink" to="/computer_school" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-monitor-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Компьютерная школа</v-list-item-title>
        </v-list-item>
        
      </v-list-group>
      <v-list-group
        prepend-icon="mdi-account-tie"
      >
        <template v-slot:activator>
          <v-list-item-title>Студентам</v-list-item-title>
        </template>
        <v-list-item nuxt active-class="activeLink" to="/labs" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-flask</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Лаборатории</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt active-class="activeLink" to="/ideas" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-lightbulb-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Идеи</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt active-class="activeLink" to="/projects" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-file-document-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Проекты</v-list-item-title>
        </v-list-item>
        
      </v-list-group>
      <v-list-group
        prepend-icon="mdi-layers"
      >
        <template v-slot:activator>
          <v-list-item-title>Курсы</v-list-item-title>
        </template>
        <v-list-item nuxt active-class="activeLink" to="/northvalley" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-stairs-up</v-icon>
          </v-list-item-icon>
          <v-list-item-title class=word-wrap>Проф переподготовка</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt active-class="activeLink" to="/computer_school" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-monitor-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Компьютерная школа</v-list-item-title>
        </v-list-item>
        
      </v-list-group>
      <v-list-group
        prepend-icon="mdi-message-question"
      >
        <template v-slot:activator>
          <v-list-item-title>FAQ</v-list-item-title>
        </template>
        <v-list-item nuxt active-class="activeLink" to="/faq" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-help</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Частые вопросы</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt active-class="activeLink" to="/faq#ask" v-scroll-to="'#ask'" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-chat-question</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Задать вопрос</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-account-multiple"
      >
        <template v-slot:activator>
          <v-list-item-title>Люди</v-list-item-title>
        </template>
        <v-list-item nuxt exact active-class="activeLink" to="/teachers" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-human-male-board-poll</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Преподаватели</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt exact active-class="activeLink" to="/graduates" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-human-greeting-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Выпускники</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-handshake"
      >
        <template v-slot:activator>
          <v-list-item-title>Трудоустройство</v-list-item-title>
        </template>
        <v-list-item nuxt exact active-class="activeLink" to="/job" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Резюме</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt exact active-class="activeLink" to="/job/vacancies" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-card-search</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Вакансии</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
    </div>
</template>

<script>
export default {
    props:{
        value: {
            type: Boolean,
            default: false
        },
    },
    methods: {
      close() {
        this.$emit('close')
      }
    },
}
</script>

