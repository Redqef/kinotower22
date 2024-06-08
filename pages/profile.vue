<script setup lang="ts">
const fio = ref('')
const email = ref('');
const birthday = ref('');
const gender = ref(0);
</script>

<template>
 <div class="row mt-4">
   <div class="col">
     <h4>IVANLOX</h4>
     <ul class="list-inline fs-8">
     <li>COUNT SCORES: 1</li>
     <li>COUNT REVIEWS: 1</li>
     </ul>
     <ul class="nav nav-underline justify-content-center" id="myTab" role="tablist">
       <li class="nav-item" role="presentation">
         <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">MY PROFILE</button>
       </li>
       <li class="nav-item" role="presentation">
         <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">MY REVIEWS</button>
       </li>
       <li class="nav-item" role="presentation">
         <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">MY SCORES</button>
       </li>
     </ul>
     <div class="tab-content" id="myTabContent">
       <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
         <ul class="list-inline fs-8">
           <li>Email: bebra@mail.ru</li>
           <li>Birthday: 20.12.2005</li>
           <li>Gender: Male</li>
         </ul>
         <div>
           <button class="btn btn-primary me-2">Edit</button>
           <button class="btn btn-danger">Delete account</button>
         </div>
       </div>
       <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
         <div class="row">
           <div class="col">
            <!-- Review-->
            <div class="row">
              <div class="col">
<!--                1 row start-->
                <div class="row">
                  <div class="col-md-8">
                    FILM NAME
                  </div>
                  <div class="col-md-2">
                    IS APPROVED
                  </div>
                  <div class="col-md-2">
                    20.12.2005
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col-md-10">Abobs up!</div>
                  <div class="col-md-2">
                    <button class="btn btn-danger btn-sm">Remove</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    FILM NAME
                  </div>
                  <div class="col-md-2">
                    IS APPROVED
                  </div>
                  <div class="col-md-2">
                    20.12.2005
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col-md-10">Abobs up!</div>
                  <div class="col-md-2">
                    <button class="btn btn-danger btn-sm">Remove</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    FILM NAME
                  </div>
                  <div class="col-md-2">
                    IS APPROVED
                  </div>
                  <div class="col-md-2">
                    20.12.2005
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col-md-10">Abobs up!</div>
                  <div class="col-md-2">
                    <button class="btn btn-danger btn-sm">Remove</button>
                  </div>
                </div>
              </div>
            </div>
           </div>
         </div>
       </div>
       <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
         <div class="row">
           <div class="col">
             <!-- Score-->
             <div class="row">
               <div class="col">
                 <!--                1 row start-->
                 <div class="row">
                   <div class="col-md-8">
                     FILM NAME
                   </div>
                   <div class="col-md-2">
                     IS APPROVED
                   </div>
                   <div class="col-md-2">
                     20.12.2005
                   </div>
                 </div>
                 <div class="row mt-2">
                   <div class="col-md-10">Abobs up!</div>
                   <div class="col-md-2">
                     <button class="btn btn-danger btn-sm">Remove</button>
                   </div>
                 </div>
                 <div class="row">
                   <div class="col-md-8">
                     FILM NAME
                   </div>
                   <div class="col-md-2">
                     IS APPROVED
                   </div>
                   <div class="col-md-2">
                     20.12.2005
                   </div>
                 </div>
                 <div class="row mt-2">
                   <div class="col-md-10">Abobs up!</div>
                   <div class="col-md-2">
                     <button class="btn btn-danger btn-sm">Remove</button>
                   </div>
                 </div>
                 <div class="row">
                   <div class="col-md-8">
                     FILM NAME
                   </div>
                   <div class="col-md-2">
                     IS APPROVED
                   </div>
                   <div class="col-md-2">
                     20.12.2005
                   </div>
                 </div>
                 <div class="row mt-2">
                   <div class="col-md-10">Abobs up!</div>
                   <div class="col-md-2">
                     <button class="btn btn-danger btn-sm">Remove</button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>