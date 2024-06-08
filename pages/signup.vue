<script setup lang="ts">

const gendersStore = useGendersStore();
const authStore = useAuthStore();
const router = useRouter();
const fio = ref('');
const email = ref('');
const password = ref('');
const birthday = ref('');
const gender = ref(0);
const errMessage = ref('');
const signup = async () => {
  try {
    if (fio.value &&
        email.value &&
        password.value &&
        gender.value &&
        birthday.value &&
        gender.value) {
    await authStore.signup({
      fio: fio.value,
      email: email.value,
      password: password.value,
      birthday: birthday.value,
      gender_id: gender.value,
    });
    router.push('/');
    }
  } catch (e:any) {
    errMessage.value = e.message;
  }
};
</script>

<template>
  <div class="container d-flex justify-content-center mt-5">

    <div class="card d-flex gap-3 flex-wrap" style="width: 25rem;">
      <div class="card-body">
        <h5 class="card-title text-center">Registration</h5>
        <form action="" @submit.prevent="signup">
          <div class="input-group mb-3">
            <input v-model="fio" type="text" class="form-control" placeholder="FIO" >
          </div>
          <div class="input-group mb-3">
            <input v-model="email" type="email" class="form-control" placeholder="EMAIL">
          </div>
          <div class="input-group mb-3">
            <input v-model="password" type="password" class="form-control" placeholder="PASSWORD">
          </div>
          <div class="input-group mb-3">
            <input v-model="birthday" type="date" class="form-control" placeholder="BIRTHDAY">
          </div>
          <select v-model="gender" class="form-select" aria-label="Default select example">
          <option
          v-for="gender in gendersStore.genders"
          :key="gender.id"
          :value="gender.id"
          >
            {{ gender.name }}
          </option>
          </select>
          <button class="btn btn-dark w-100 mt-3">SIGNUP</button>



        </form>
      </div>
      <div v-if="errMessage" class="alert alert-danger" role="alert">
        {{ errMessage }}
      </div>
    </div>
  </div>

</template>