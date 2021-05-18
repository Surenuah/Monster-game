<template>
  <div class="signup-wrap">
      <div class="input-form">
        <p>Enter ur name</p>
        <input type="text" v-model="client.name"/>
      </div>

      <div  class="input-form">
        <p>Enter ur email</p>
        <input type="email" v-model="client.email"/>
      </div>

      <div  class="input-form">
        <p>Enter ur password</p>
        <input type="text" v-model="client.password"/>
      </div>

      <div  class="input-form">
        <p>Confirm ur password</p>
        <input type="text" v-model="confirmPassword"/>
      </div>

      <div  class="input-form">
        <p>Age</p>
        <input type="number" v-model="client.age"/>
      </div>

    <ButtonCompnent buttonText="Register"
                    buttonColor="blue"
                    @click.native="validateForm"/>
    <h2>cookieLogin {{cookieLogin}}</h2>
    <h2>cookiePass {{cookiePass}}</h2>


    {{client}}
    {{confirmPassword}}


  </div>
</template>

<script>
import ButtonCompnent from "@/components/ButtonCompnent";
export default {
  name: "SignUp",
  components: {
    ButtonCompnent
  },
  data:() => ({
    client: {

    },
    confirmPassword: null,
    cookieLogin: '',
    cookiePass: ''
  }),
  methods: {
    validateForm() {
      this.setCookie('login', 'jandos')
      this.setCookie('password', '123')
      console.log(this.getCookie('login'));
      console.log(this.getCookie('password'));
      this.$router.push({ path: '/game' })

    },
     validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email))

    },
    setCookie(key, value) {
      let d = new Date();
      d.setTime(d.getTime() + (30*24*60*60*1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = key + "=" + value + ";" + expires + ";path=/";
    },
    getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  }
}
</script>

<style scoped>
.input-form {
  margin-bottom: 20px;
}
</style>