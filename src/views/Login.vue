<template>
  <div class="container login-form">
      <b-row class="justify-content-center">
        <h2>Login</h2>
      </b-row>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row class="justify-content-center">
          <b-form-group id="input-group-1" label="Username / Email" label-for="input-1" class="full-form">
            <b-form-input class="login-input" id="input-1" v-model="form.username" type="text" required placeholder="Username"></b-form-input>
          </b-form-group>
        </b-row>
        <b-row class="justify-content-center">
          <b-form-group id="input-group-2" label="Password" label-for="input-2" class="full-form">
            <b-form-input class="login-input" id="input-2" v-model="form.password" type="text" required placeholder="Password"></b-form-input>
          </b-form-group>
        </b-row>
        <b-row class="justify-content-center">
            <b-button class="btn-submit" type="submit" variant="primary">Login</b-button>
        </b-row>
      </b-form>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Login",
  data() {
        return {
            form: {
                username: '',
                password: ''
            },
            show: true
        };
  },
  methods: {
    async login(username, password) {
      if (username != "" && password != "") {
        let res = await axios.post("http://localhost:8080/login", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          this.$router.push({ name: '/Dashboard'})
        });
        console.log(res);
      } else {
        alert("Please Insert your username or password");
      }
    },
    onSubmit(evt){
            evt.preventDefault()
            alert(JSON.stringify(this.form))
            login(this.form.username, this.form.password)
        },
        onReset(evt) {
            evt.preventDefault()
        },
  }
};
</script>

<style scoped lang="scss">

.full-form {
  width: 100%;
}

.container{
	background-color: #ffffff;
	display:flex;
	flex-direction:column;
	margin-left:auto;
	margin-right:auto;
  border-radius: 1.5rem;
  box-shadow: 5px 5px 10px rgb(172, 170, 170);
  margin-top: 100px;
}

form{
	display:flex;
	flex-direction:column;
  padding-top: 30px;
	padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px; 
}

h2{
  margin-top: 40px;
}

.login-form {
  max-width: 500px;
}

.login-input {
  width: 100%;
  font-size: 14px;
  padding: 12px 10px;
  outline: 0;
  border-radius: 1.5rem;
  border: 1px solid lightgrey;
}
.btn-submit {
  width: 100%;
  padding: 8px 12px;
  font-size: 18px;
  font-weight: bold;
  background: #000000;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    background: darken(#2c3e50, 18%);
    border-radius: 1rem;
  }
}
</style>
