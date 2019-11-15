<template>
  <div class="container">
    <form action="#" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          @blur="$v.email.$touch()"
          type="email" id="email"
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">email is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">email is not valid</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">this email is already exists</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          @blur="$v.password.$touch()"
          type="password" id="password"
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
        >
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}
        </div>
      </div>
      <div class="form-group">
        <label for="confirm">Confirm Password</label>
        <input
          v-model="confirm"
          @blur="$v.confirm.$touch()"
          type="password" id="confirm"
          class="form-control"
          :class="{'is-invalid': $v.confirm.$error}"
        >
        <div class="invalid-feedback" v-if="!$v.confirm.sameAs">
          password should match
        </div>
        <button
          class="btn btn-primary"
          type="submit"
          :disabled="$v.$invalid"
        >Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
    import {required, email, minLength, sameAs} from 'vuelidate/lib/validators';

    export default {
        data() {
            return {
                email   : '',
                password: '',
                confirm : ''
            }
        },
        methods    : {
            onSubmit: function () {
                console.log('email: ' + this.email);
                console.log('password: ' + this.password);
            }
        },
        validations: {
            email   : {
                required,
                email,
                uniqEmail: function (newEmail) {
                    if (newEmail === '') return true;
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(newEmail !== 'test@mail.ru')
                        }, 1000)
                    })
                }
            },
            password: {
                minLength: minLength(6)
            },
            confirm : {
                sameAs: sameAs((Vue) => {
                    return Vue.password;
                })
            }
        }
    }
</script>
