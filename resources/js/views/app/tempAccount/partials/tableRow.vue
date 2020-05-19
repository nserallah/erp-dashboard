<template>
    <div>
        <span v-if="column.field == 'operations'">
            <a href="#" class="text-success mr-2" @click="togglePopover"
               :id="'popover-button-sync'+formattedRow[column.field]">
                <i class="nav-icon i-Gear spin font-weight-bold"></i>
             </a>
          <b-popover
                  :show.sync="show"
                  :target="'popover-button-sync'+formattedRow[column.field]"
                  title="Send">
             <b-list-group class="list-group-flush">
                <b-list-group-item><a href="#"
                                      @click="openModal('SMS')">SMS </a></b-list-group-item>
                <b-list-group-item><a href="#" @click="openModal('Email')">Email</a></b-list-group-item>
          </b-list-group>
          </b-popover>
           <paragraph :show="showModel" :title="title" @close="closeModal" @submit="submit" :type="type"
                      :id="formattedRow[column.field]"></paragraph>
        </span>

        <span v-else>
            {{formattedRow[column.field]}}
        </span>


    </div>
</template>
<script>
    import Vue from 'vue'
    import VueQuill from 'vue-quill'
    import paragraph from '@/components/modals/paragraph'
    import instance, {routes} from "@/util/axios"

    Vue.use(VueQuill)

    export default {
        name: 'table-row.vue',
        props: ['formattedRow', 'column'],
        components: {paragraph},
        data: () => {
            return {
                show: false,
                showModel: false,
                content: "",
                config: {
                    placeholder: 'Compose an epic...',
                    theme: 'snow',
                    'syntax': true        // Enable with default configuration
                },
                title: '',
                type: ''
            }
        },
        methods: {
            togglePopover() {
                this.show = !this.show;
            },
            openModal(type) {
                this.title = 'Send ' + type;
                this.type = type;
                this.showModel = true;

                this.show = false;
            },
            closeModal() {
                this.showModel = false;
            },
            submit(data, type) {
                let content = {
                    content: data.content
                }

                instance.post(routes.tempAccount.get() + "/" + data.id + "/" + data.type, content).then(({data}) => {
                    if (data.status == 200 || data.status == 'success') {
                        this.showModel = false;
                        this.showAlert('success', data.message)
                        return;
                    }
                    this.showAlert('error', data.message)
                }).catch(({err}) => {
                })
            }
        }
    }
</script>
<style lang="scss">
    @import url("https://cdn.quilljs.com/1.2.6/quill.snow.css");
</style>