<template>
  <Navbar/>
  <Sidebar/>
  <div class="section-copy wf-section">
    <div class="div-block-30-tranin-copy">
      <div class="text-block-18-tranin-copy">
        <span class="text-span-7-tranin-copy">Page / Partners</span>/ Partners Edit
      </div>
      <div class="text-block-19-tranin-copy">Partners</div>
    </div>
    <div class="div-block-34-tranin-copy">
      <div class="div-block-35-tranin-copy">
        <div class="div-block-37-copy">
          <div class="div-block-38-tranin-copy">
            <div class="text-block-22">ผู้เข้าร่วม</div>
          </div>
        </div>
        <div class="div-block-53">
          <div class="div-block-54">
            <div class="div-block-98">
              <div class="div-block-96">
                <div class="text-block-64">PARTNER NAME :</div>
                <InputText class="text-block-65" type="text" v-model="value" />
              </div>
              <div class="div-block-97">
                <div class="text-block-66">BUSINESS :</div>
                <Textarea class="text-block-67" v-model="value" autoResize rows="5" cols="30" />
              </div>
              
            </div>
            <div class="div-block-101">
              <div class="div-block-102">
                <Button class="button-5" label="แก้ไข" />
                <Button class="button-4" label="กลับ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(../../../styles/partner_edit.css);
</style>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import Textarea from 'primevue/textarea';

export default defineComponent({
  setup() {
    const value = ref('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

    return {
      value
    }
  }

})

</script>