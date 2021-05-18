<template>
  <div id="app">
<!--    <div v-for="contact in contacts" :key="contact.id">-->
<!--      <ContactList-->
<!--          :contactId="contact.id"-->
<!--          :contactName="contact.name"-->
<!--          :contactNumber="contact.number"-->
<!--          :contactEmail="contact.address"-->
<!--          :isFavourite="contact.favourite"-->
<!--          @changeFavourite="changeFavourite"-->
<!--      />-->
<!--    </div>-->
    <HeaderComponent @changeRoute="changeRoute"/>

    <router-view />

    <template v-if="false">
      <SignUp v-if="activeRoute === 'sign-up'"/>
      <MonsterGame  v-if="activeRoute === 'game-zone'"/>
    </template>




  </div>
</template>

<script>
// import ContactList from "@/components/ContactList";
import HeaderComponent from "@/components/HeaderComponent";
import MonsterGame from "@/Views/MonsterGame/MonsterGame";
import SignUp from "@/Views/Authorization/SignUp";

export default {
  name: 'App',
  components: {
    // ContactList
    MonsterGame,
    SignUp,
    HeaderComponent
  },
  data: () => ({
    contacts: [
      {
        id: 1,
        name: "Lisa",
        number: "87000000",
        address: "lisa@gmail.com",
        favourite: true,
      },
      {
        id: 2,
        name: "John",
        number: "777778555",
        address: "john@gmail.com",
        favourite: false,
      },
      {
        id: 3,
        name: "GrandPA",
        number: "999999",
        favourite: true,
      },
    ],
    activeRoute: 'game-zone'
  }),
  methods: {
    changeFavourite(id) {
      const tempContact = this.contacts.find((value) =>
        value.id === id
      )
      tempContact.favourite = !tempContact.favourite
    },
    changeRoute(newRoute) {
      this.activeRoute = newRoute;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px 40px;
}
</style>
