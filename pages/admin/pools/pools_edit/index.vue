<template>
  <Navbar />
  <Sidebar />

  <div class="section-copy wf-section">
    <div class="div-block-30-tranin-copy">
      <div class="text-block-18-tranin-copy">
        <span class="text-span-7-tranin-copy">Page / Pools</span>/ Pools Details
      </div>
      <div class="text-block-19-tranin-copy">Pools</div>
    </div>
    <div class="div-block-34-tranin-copy">
      <div class="div-block-35-tranin-copy">
        <div class="div-block-37-copy">
          <div class="div-block-38-tranin-copy">
            <div class="text-block-22">รายละเอียด Pool</div>
          </div>
        </div>
        <div class="div-block-53">
          <div>
            <div class="div-block-54">
              <div class="div-block-98">
                <div class="div-block-103">
                  <div class="div-block-96">
                    <div class="text-block-64">POOLS NO :</div>
                    <div class="text-block-65">609213570</div>
                  </div>
                  <div class="div-block-96-copy">
                    <div class="text-block-64-copy">TYPE :</div>
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
                  </div>
                </div>
                <div class="div-block-103">
                  <div class="div-block-96">
                    <div class="text-block-64">NAME&nbsp;:</div>
                    <InputText class="text-block-65" style="width:300px" type="text" />
                  </div>
                  <div class="div-block-96-copy">
                    <div class="text-block-64-copy">MAX PRICE :</div>
                    <InputText class="text-block-65" style="width:150px" type="text" />
                  </div>
                </div>
                <div class="div-block-103">
                  <div class="div-block-96">
                    <div class="text-block-64">POOL&nbsp;ID :</div>
                    <div class="text-block-65">609213570</div>
                  </div>
                  <div class="div-block-96-copy">
                    <div class="text-block-64-copy">MIN PRICE :</div>
                    <InputText class="text-block-65" style="width:150px" type="text" />
                  </div>
                </div>
                <div class="div-block-103">
                  <div class="div-block-96">
                    <div class="text-block-64">ADDRESS :</div>
                    <Textarea class="text-block-65" style="width:300px" autoResize rows="5" cols="30" />
                  </div>
                  <div class="div-block-96-copy">
                    <div class="text-block-64-copy">CAP&nbsp;PRICE :</div>
                    <InputText class="text-block-65" style="width:150px" type="text" />
                  </div>
                </div>
                <div class="div-block-103">
                  <div class="div-block-96">
                    <div class="text-block-64">CREATED :</div>
                    <div class="text-block-65" style="width:320px">26 March 2020, at 13:45 PM</div>
                  </div>
                </div>
                <div class="div-block-103">
                  <div class="div-block-96">
                    <div class="text-block-64">STATUS :</div>
                    <div class="text-block-65"></div>
                  </div>
                </div>
                <div class="div-block-103">
                  <div class="div-block-96">
                    <div class="text-block-64">PRICE :</div>
                    <div class="text-block-65">100,000 บาท</div>
                  </div>
                </div>
                <div class="div-block-101">
                  <div class="div-block-102">
                    <NuxtLink to="./pools_timeline">
                      <Button class="button-5" style="color:white; font-family: Prompt; font-weight: 500;" label="ตกลง" />
                    </NuxtLink>
                    <NuxtLink to="./pools_timeline">
                      <Button class="button-4" style="color:white; font-family: Prompt; font-weight: 500;" label="ยกเลิก" />
                    </NuxtLink>
                  </div>
                </div>
                <div class="div-block-99"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(../../../../styles/pools_edit.css);

</style>

<script lang="ts" setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

</script>
