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
            <div class="text-block-22">Partners</div>
          </div>
        </div>
        <div class="div-block-53">
          <div class="div-block-54">
            <div class="div-block-98">
              <div class="div-block-96">
                <div class="text-block-64">PARTNER ID :</div>
                <div class="text-block-65">XXXXXXXXXXXXXXXXXXXXXXXXXX</div>
              </div>
              <div class="div-block-96">
                <div class="text-block-64">PARTNER NAME :</div>
                <div class="text-block-65">ชื่อ Partner</div>
              </div>
              <div class="div-block-96">
                <div class="text-block-64">SECRET KEY :</div>
                <Password class="text-block-65" id="copy-text" v-model="text" style="border: none;" :feedback="false" toggleMask disabled />
                <Button class="button-5" style="margin-left:30px;" label="COPY" @click="copy" />
                <Button class="button-5" style="margin-left:30px;" label="RESET" />
              </div>
              <div class="div-block-97">
                <div class="text-block-66">BUSINESS :</div>
                <div class="text-block-67">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
              </div>
              
            </div>
            <div class="div-block-101">
              <div class="div-block-102">
                <NuxtLink class="button-5" to="./partner_edit">
                <Button class="button-5" label="แก้ไข" />
                </NuxtLink>
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
@import url(../../../styles/partner_details.css);
</style>

<script lang="ts">
import { ref } from 'vue';

export default {
  layout: 'ws',
  data() {
    return {
      text: '1234567890'
    }
  },
  methods: {
    copy() {
      try {
        navigator.clipboard.writeText(this.text);
        
      } catch(e) {
        throw e;
      }
    }
  }
}


</script>
