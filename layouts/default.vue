<script setup lang="ts">
const authStore = useAuthStore();
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">KINOTOWER</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link active">Home</NuxtLink>
          </li>
        </ul>
        <div v-if="!authStore.authData">
          <a @click.prevent="$router.push('/signin')" href="#" class="btn btn-outline-success me-2" >Sign In</a>
          <a @click.prevent="$router.push('/signup')" href="#" class="btn btn-outline-primary" >Sign Up</a>
        </div>
        <div v-else>
          <a @click.prevent="$router.push('/profile')" href="#" class="me-2 btn btn-outline-primary">{{ authStore.authData.fio }}</a>
          <a @click.prevent="authStore.signout(), $router.push('/')" href="#" class="btn btn-outline-danger">Sign Out</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="container">
    <slot />
  </div>

  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
<!--      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>-->
<!--      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>-->
<!--      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>-->
<!--      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>-->
<!--      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>-->
    </ul>
    <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
</template>