<template>
    <b-container fluid class="px-0">
        <SideBar />
        <div class="main">
            <b-container fluid>
                <b-jumbotron class="content">
                    <b-row>
                        <h2>Customer - Add</h2>
                    </b-row>
                    <b-row class="justify-content-center">
                        <hr>
                    </b-row>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-row>
                            <h5>Full name</h5>
                        </b-row>
                        <b-row>
                            <b-form-group id="input-group-1" label-for="input-1" class="full-form">
                                <b-form-input id="input-1" v-model="form.fullname" type="text" required placeholder="Full name"></b-form-input>
                            </b-form-group>
                        </b-row>
                        <b-row>
                            <h5>Birthday</h5>
                        </b-row>
                        <b-row>
                            <div class="full-form">
                                <b-form-datepicker label-for="datepicker" id="datepicker" v-model="form.birthdate" class="mb-2"></b-form-datepicker>
                            </div>
                        </b-row>
                        <b-row>
                            <h5>Address</h5>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-5" label="Address:" label-for="input-5">
                                    <b-form-input id="input-5" v-model="form.addr" type="text" required placeholder="Address"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-6" label="Subdistrict:" label-for="input-6">
                                    <b-form-input id="input-6" v-model="form.subdistrict" type="text" required placeholder="Subdistrict"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-7" label="District:" label-for="input-7">
                                    <b-form-input id="input-7" v-model="form.district" type="text" required placeholder="District"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-8" label="Province:" label-for="input-8">
                                    <b-form-input id="input-8" v-model="form.province" type="text" required placeholder="Province"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-9" label="Country:" label-for="input-9">
                                    <b-form-input id="input-9" v-model="form.country" type="text" required placeholder="Country"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-10" label="Zipcode:" label-for="input-10">
                                    <b-form-input id="input-10" v-model="form.zipcode" type="text" required placeholder="Zipcode"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-button class="btn" type="submit" variant="primary">Finish</b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                </b-jumbotron>
                
            </b-container>
            
        </div>
    </b-container>
</template>

<script>
import SideBar from '../components/SideBar'

export default {
    name: "CustomerAdd",
    components: {
        SideBar
    },
    data() {
        return {
            form: {
                fullname: '',
                addr: '',
                subdistrict: '',
                district: '',
                province: '',
                country: '',
                zipcode: '',
                birthdate: '',
            },
            show: true
        };
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
        }
    }
};
</script>

<style scoped>

.full-form {
    width:50%;
    margin-left: 15px;
}

.main {
    margin-left: 380px;
    padding: 0px 10px;
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