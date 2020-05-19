<template>
    <div>
        <span v-if="column.field == 'operations'">
            {{formattedRow[column.field]}}
            <b-button variant="outline-danger m-1" @click="remove(formattedRow[column.field])"> Remove</b-button>
            <b-button variant="outline-info m-1" @click="edit(formattedRow[column.field])">Edit</b-button>
        </span>
        <span v-else>
            {{formattedRow[column.field]}}
        </span>
    </div>
</template>

<script>
    import instance, {routes} from "@/util/axios"

    export default {
        name: "tableRow",
        props: ['formattedRow', 'column'],
        methods: {
            remove(id) {
                let ref = this
                this.$swal({
                    title: "Are you sure?",
                    text: "You want to remove this constant !",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then(result => {
                    if (result.value) {
                        let deleteLink = routes.constants.delete() + '/' + id;
                        instance.delete(deleteLink).then(({data}) => {
                            console.log('data', data);
                            let message = `Constant ${data.data.locale_name} has been deleted successfully`
                            let status = "success"
                            let title = "Deleted!"
                            if (data.error_code == 1106) {
                                message = data.message;
                                status = 'warning'
                                title = "Oops..."
                            }
                            this.$swal(title, message, status);
                            ref.$emit('fetch')
                        })
                    }
                });
            },
            edit(id) {
                this.$router.push('/settings/constants/edit/' + id)
            }
        }
    }
</script>

<style scoped>

</style>