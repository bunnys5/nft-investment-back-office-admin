<template>
  <Navbar />
  <Sidebar />

  <div class="section-copy wf-section">
    <div class="div-block-30-tranin-copy">
      <div class="text-block-18-tranin-copy">
        <span class="text-span-7-tranin-copy">Page / Users </span>/ Users
        Details
      </div>
      <div class="text-block-19-tranin-copy">Users</div>
    </div>
    <div class="div-block-34-tranin-copy">
      <div class="div-block-35-tranin-copy">
        <div class="div-block-37-copy">
          <div class="div-block-38-tranin-copy">
            <div class="text-block-22">รายละเอียดผู้ใช้งาน</div>
          </div>
        </div>
        <div class="div-block-53">
          <div class="div-block-54">
            <div class="div-block-88">
              <div class="div-block-82">
                <div class="text-block-55">FIRST NAME :</div>
                <div class="text-block-49">Sanhanat Sukkoram</div>
              </div>
              <div class="div-block-82">
                <div class="text-block-55">ADDRESS :</div>
                <div class="text-block-48">
                  1 ถ. สาทรใต้ แขวง ยานนาวา เขต สาทร กรุงเทพมหานคร 10120
                </div>
              </div>
              <div class="div-block-82">
                <div class="text-block-55">BIRTHDAY :</div>
                <div class="text-block-50">26 March 1990</div>
              </div>
              <div class="div-block-82">
                <div class="text-block-55">SEX :</div>
                <div class="text-block-50">Male</div>
              </div>
              <div class="div-block-82">
                <div class="text-block-55">CITIZEN ID :</div>
                <div class="text-block-50">XXXXXXXXXXXX</div>
              </div>
            </div>
            <div class="div-block-88-2">
              <!-- <div class="div-block-84">
                <div class="text-block-58">LAST NAME :</div>
                <div class="text-block-51">XXXXXXXXXX</div>
              </div>
              <div class="div-block-84">
                <div class="text-block-58">ROLE :</div>
                <div class="text-block-51">XXXXXXXXXX</div>
              </div>
              <div class="div-block-85">
                <div class="text-block-59">BANK&nbsp;NAME :</div>
                <div class="text-block-52">XXXXXXXXXX</div>
              </div>
              <div class="div-block-86">
                <div class="text-block-60">BANK&nbsp;NUMBER&nbsp;: </div>
                <div class="text-block-53">XXXXXXXXXX</div>
              </div>
              <div class="div-block-87">
                <div class="text-block-61">BANK&nbsp;BRANCH : </div>
                <div class="text-block-54">KRUNGTHAI</div>
              </div> -->
              <div class="div-block-82">
                <div class="text-block-55">LAST NAME :</div>
                <div class="text-block-48">Sukkoram</div>
              </div>
              <div class="div-block-82">
                <div class="text-block-55">ROLE :</div>
                <div class="text-block-48">User</div>
              </div>
            </div>
          </div>
        </div>
        <div class="div-block-37-copy">
          <div class="div-block-38-tranin-copy">
            <div class="text-block-22">บัญชีธนาคาร</div>
          </div>
        </div>
        <div class="div-block-53">
          
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
                  
                  <Column field="size" header="NO."></Column>
                  <Column field="size" header="BANK NAME"></Column>
                  <Column field="size" header="BANK NUMBER"></Column>
                  <Column field="size" header="BANK BRANCH"></Column>
                  <template #paginatorend>
                    <Button type="button" icon="pi pi-download" text />
                  </template>
                </TreeTable>
              </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(~/styles/users_details.css);
</style>
