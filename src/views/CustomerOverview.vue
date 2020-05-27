<template>
    <b-container fluid class="px-0">
        <SideBar />
        <div class="main">
            <b-container fluid>
                <b-jumbotron class="content">
                    <b-row>
                        <b-col>
                            <h2>Customer</h2>
                        </b-col>
                        <b-col>
                                <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0 searchbox" v-model="search" type="text" placeholder="Search name or zip code"></b-input>
                        </b-col>
                        <b-col>
                            <b-button variant="primary">Search</b-button>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-p class="underHeader">
                            Sorting : Name | A -> Z
                            <b-button class="buttonCol" to="/customeradd">Add</b-button>
                            <b-button>Delete</b-button>
                        </b-p>
                    </b-row>
                    <b-row>
                        <b-table ref="selectableTable"
                            selectable
                            :select-mode="multi"
                            :items="items"
                            :fields="fields"
                            @row-selected="onRowSelected"
                            striped head-variant="dark" class="top-20">

                            <template v-slot:cell(selected)="{ rowSelected }">
                                <template v-if="rowSelected">
                                    <span aria-hidden="true">&check;</span>
                                    <span class="sr-only">Selected</span>
                                </template>
                                <template v-else>
                                    <span aria-hidden="true">&nbsp;</span>
                                    <span class="sr-only">Not selected</span>
                                </template>
                            </template>
                        </b-table>
                    </b-row>
                </b-jumbotron>
                
            </b-container>
            
        </div>
    </b-container>
</template>

<script>
import SideBar from '../components/SideBar'

export default {
    name: "CustomerOverview",
    components: {
        SideBar
    },
    data() {
        return {
            fields: [ 'customer', 'dateOfBirth', 'address', 'country', 'province', 'district', 'subDistrict', 'zipCode', 'selected' ],
            items: [
            { customer: 'China Panda', dateOfBirth: '21/04/1996', address: '58/46', country: 'Thailand' , province: 'Bangkok', district: 'Nongkhame', subDistrict: 'Nongkangpho', zipCode: '10160'},
            { customer: 'China Panda', dateOfBirth: '21/04/1996', address: '58/46', country: 'Thailand' , province: 'Bangkok', district: 'Nongkhame', subDistrict: 'Nongkangpho', zipCode: '10160'},
            { customer: 'China Panda', dateOfBirth: '21/04/1996', address: '58/46', country: 'Thailand' , province: 'Bangkok', district: 'Nongkhame', subDistrict: 'Nongkangpho', zipCode: '10160'}
            ],
            selectMode: 'multi',
            selected: [],
            search: ''
        };
    },
    methods: {
        onRowSelected(items) {
            this.selected = items
        }
    }
};
</script>

<style scoped>



.main {
    margin-left: 380px;
    padding: 0px 10px;
}

.underHeader {
    margin-left: 1100px;
}

.buttonCol {
    margin-left: 50px;
    margin-right: 10px;
}

.black-divider {
border-top: 3px solid rgba(0,0,0,1);
width: 100px;
}

.header-txt {
    margin-top: 20px;
}

.content {
    margin-top: 20px;
}
.searchbox {
    width:100%;
}

.top-20 {
    margin-top: 20px;
}

.jumbotron {
    padding: 2rem 2rem;
    background-color: #FFFFFF;
}
</style>