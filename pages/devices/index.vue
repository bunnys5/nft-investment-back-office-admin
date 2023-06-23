<template>
  <div>
    <Navbar />
    <Sidebar />
    <body>
      <div class="section wf-section">
        <div class="div-block-30">
          <div class="text-block-18">
            <span class="text-span-7">Page / </span>Devices
          </div>
          <div class="text-block-19">Devices</div>
        </div>
        <div class="div-block-34">
          <div class="div-block-35">
            <div class="div-block-37">
              <div class="div-block-38">
                <div class="text-block-22">อุปกรณ์</div>
              </div>
              <div class="button-menu">
                <Button
                  style="color: white; font-family: 'Prompt'"
                  label="อัพเดท Status"
                />
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
              header="Approve"
              :style="{ width: '50vw' }"
            >
              <div class="div-block-53">
                <div class="div-block-54">
                  <div class="div-block-98">
                    <div class="div-block-96">
                      <div class="text-block-64">DEVICE ID :</div>
                      <div class="text-block-65">609213570</div>
                    </div>
                    <div class="div-block-97">
                      <div class="text-block-66">CREATE&nbsp;AT :</div>
                      <div class="text-block-67">
                        26 March 2020, at 13:45 PM
                      </div>
                    </div>
                    <div class="div-block-97">
                      <div class="text-block-66">POOL ID :</div>
                      <div class="text-block-67">XXXXXXXXXX</div>
                    </div>
                    <div class="div-block-100">
                      <Dropdown
                        v-model="selectedCity"
                        :options="cities"
                        optionLabel="name"
                        placeholder="Select a City"
                        class="w-full md:w-14rem"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
            <TabView>
              <TabPanel header="เพิ่มอุปกรณ์">
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
              </TabPanel>
              <TabPanel header="อัพเดทอุปกรณ์">
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
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<style scoped>
@import url(../../styles/devices.css);
</style>

<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";

const nodes = ref();
const visible = ref(false);

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

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
