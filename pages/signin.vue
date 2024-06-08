<script setup lang="ts">
const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const router = useRouter();
const errMessage = ref('');
const signin = () => {
  try {
    if (email.value &&
        password.value) {
      authStore.signin({
        email: email.value,
        password: password.value,
      });
      router.push('/');
    }
  } catch (e: any) {
    errMessage.value = e.message;
  }
}
</script>

<template>
  <div class="container d-flex justify-content-center mt-5">
    <div class="card d-flex gap-3 flex-wrap" style="width: 25rem;">
      <div class="card-body">
        <h5 class="card-title text-center">AUTHENTICATION</h5>
        <form action="" @submit.prevent="signin" class="mt-4">
          <div class="input-group mb-3">
            <input v-model="email" type="email" class="form-control" placeholder="EMAIL">
          </div>
          <div class="input-group mb-3">
            <input v-model="password" type="password" class="form-control" placeholder="PASSWORD">
          </div>
          <div v-if="errMessage" class="alert alert-danger" role="alert">
            {{ errMessage }}
          </div>
          <button class="btn btn-dark w-100 mt-3">SIGNIN</button>



        </form>
      </div>
    </div>
  </div>

</template>