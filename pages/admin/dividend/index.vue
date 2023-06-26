<template>
  <div>
    <Navbar />
    <Sidebar />
    <body>
      <div class="section wf-section">
        <div class="div-block-30">
          <div class="text-block-18">
            <span class="text-span-7">Page / </span>Dividend
          </div>
          <div class="text-block-19">Dividend</div>
        </div>
        <div class="div-block-34">
          <div class="div-block-35">
            <div class="div-block-37">
              <div class="div-block-38">
                <div class="text-block-22">คืนเงินปันผลให้ผู้ลงทุน</div>
              </div>
              <div class="button-menu">
                <Button
                  style="color: white; font-family: 'Prompt'"
                  label="เพิ่มอุปกรณ์"
                  @click="visible = true"
                />
              </div>
            </div>
            <Dialog
              v-model:visible="visible"
              modal
              header="STATUS"
              
              style="font-family: 'Prompt'"
            >
              <div class="div-dialog-1">
                <div class="div-dialog-2">
                  <div class="div-block-96">
                    <div class="text-block-64">POOL NAME :</div>
                    <div class="text-block-65">609213570</div>
                  </div>
                  <div class="div-block-96">
                    <div class="text-block-64">ADDRESS :</div>
                    <div class="text-block-65">1 ถ. สาทรใต้ แขวง ยานนาวา เขต สาทร กรุงเทพมหานคร 10120</div>
                  </div>
                  <div class="div-block-96">
                    <div class="text-block-64">POOL ID :</div>
                    <div class="text-block-65">123124123123</div>
                  </div>
                  <div class="div-block-96">
                    <div class="text-block-64">CREATE AT :</div>
                    <div class="text-block-65">10/03/2566</div>
                  </div>
                </div>
                <div class="div-line"></div>
                <div class="div-dialog-2">
                  <div class="div-block-96">
                    <div class="text-block-64">USER ID :</div>
                    <div class="text-block-65">11022125</div>
                  </div>
                  <div class="div-block-96">
                    <div class="text-block-64">USER NAME :</div>
                    <div class="text-block-65">Test1234</div>
                  </div>
                  <div class="div-block-96">
                    <div class="text-block-64">CITIZEN ID :</div>
                    <div class="text-block-65">XXXX XXXXX</div>
                  </div>
                  <div class="div-block-96">
                    <div class="text-block-64">BANK NAME :</div>
                    <div class="text-block-65">XXXXXXXX</div>
                  </div>
                  <div class="div-block-96">
                    <div class="text-block-64">AMOUNT :</div>
                    <div class="text-block-65">30,000 บาท</div>
                  </div>
                  <div class="div-block-96">
                    <div class="text-block-64">DATE :</div>
                    <div class="text-block-65">30/03/2566</div>
                  </div>
                </div>
              </div>
              <div class="div-status">*รายการนี้ยืนยันการโอนแล้ว</div>

              <template #footer>
                <Button
                  style="color: white; font-family: 'Prompt'"
                  label="ยกเลิก"
                  icon="pi pi-times"
                  @click="visible = false"
                  text
                />
                <Button
                  style="color: white; font-family: 'Prompt'"
                  label="ตกลง"
                  icon="pi pi-check"
                  @click="visible = false"
                  autofocus
                />
              </template>
            </Dialog>
            <div class="div-block-39">
              <div class="card">
                <TreeTable
                  :paginator="true"
                  :rows="5"
                  :rowsPerPageOptions="[5, 10, 25, 50]"
                  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                >
                  <template #paginatorstart>
                    <Button type="button" icon="pi pi-refresh" text />
                  </template>
                  <Column
                    style="backgroundColor: var(--highlight-bg), color: var(--highlight-text-color)"
                    field="pool_name"
                    header="POOL NAME"
                    expander
                  ></Column>
                  <Column field="size" header="USERS"></Column>
                  <Column field="size" header="DATE"></Column>
                  <Column field="size" header="ADDRESS"></Column>
                  <Column field="size" header="POOL ID"></Column>
                  <Column field="size" header="AMOUNT"></Column>
                  <Column field="type" header="STATUS"></Column>
                  <template #paginatorend>
                    <Button type="button" icon="pi pi-download" text />
                  </template>
                </TreeTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<style scoped>
@import url(../../../styles/dividend.css);
</style>

<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";

const visible = ref(false);

const nodes = ref();

let files = [];
for (let i = 0; i < 50; i++) {
  let node = {
    key: i,
    data: {
      name: "Item " + i,
      size: Math.floor(Math.random() * 1000) + 1 + "kb",
      type: "Type " + i,
    },
    children: [
      {
        key: i + " - 0",
        data: {
          name: "Item " + i + " - 0",
          size: Math.floor(Math.random() * 1000) + 1 + "kb",
          type: "Type " + i,
        },
      },
    ],
  };

  files.push(node);
}

nodes.value = files;
</script>
