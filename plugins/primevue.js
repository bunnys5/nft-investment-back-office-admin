import PrimeVue from 'primevue/config'
import { createApp } from 'vue';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import Textarea from 'primevue/textarea';
import Timeline from 'primevue/timeline';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';
import Dialog from 'primevue/dialog';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Avatar from 'primevue/avatar';
import Galleria from 'primevue/galleria';
import ConfirmDialog from 'primevue/confirmdialog';

const app = createApp();
app.use(PrimeVue);

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('TreeTable', TreeTable)
    nuxtApp.vueApp.component('Column', Column)
    nuxtApp.vueApp.component('Textarea', Textarea)
    nuxtApp.vueApp.component('Timeline', Timeline)
    nuxtApp.vueApp.component('Dropdown', Dropdown)
    nuxtApp.vueApp.component('Password', Password);
    nuxtApp.vueApp.component('Dialog', Dialog);
    nuxtApp.vueApp.component('TabView', TabView);
    nuxtApp.vueApp.component('TabPanel', TabPanel);
    nuxtApp.vueApp.component('Avatar', Avatar);
    nuxtApp.vueApp.component('Galleria', Galleria);
    nuxtApp.vueApp.component('ConfirmDialog', ConfirmDialog);
    //other components that you need
})
