<template>
    <div class="tableFilters row">

        <b-form-group class="col-md-4 mb-3" label="Search" label-for="input-1">
            <b-form-input type="text" v-model="tableData.search" placeholder="Search Table"
                          @input="fetch()"></b-form-input>
        </b-form-group>
        <b-form-group class="col-md-4 mb-3" label="Per Page" label-for="input-1">
            <select class="form-control" v-model="pagination.perPage" @change="fetch()">
                <option v-for="(records, index) in perPage" :key="index" :value="records">{{records}}</option>
            </select>
        </b-form-group>
        <b-form-group class="col-md-4 mb-3" label="Active" label-for="input-1">
            <select class="form-control" v-model="tableData.is_active" @change="fetch()">
                <option selected value="">All</option>
                <option value="1">Active</option>
                <option value="0">InActive</option>
            </select>
        </b-form-group>
    </div>
</template>

<script>
    export default {
        name: "Filter",

    }
</script>

<style scoped>

</style>