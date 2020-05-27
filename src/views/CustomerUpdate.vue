<template>
    <b-container fluid class="px-0">
        <SideBar />
        <div class="main">
            <b-container fluid>
                <b-jumbotron class="content">
                    <b-row>
                        <h2>Customer - Update</h2>
                    </b-row>
                    <b-row class="justify-content-center">
                        <hr>
                    </b-row>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-row>
                            <h6>Full name :</h6>
                        </b-row>
                        <b-row>
                            <h6>Date of Birth :</h6>
                            <hr class="seperateInfo">
                        </b-row>
                        <b-row>
                        </b-row>
                        <b-row>
                            <h5>Update Information</h5>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-1" label="Address1:" label-for="input-1">
                                    <b-form-input id="input-1" v-model="form.addr1" type="text" required placeholder="Address 1"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-2" label="Address2:" label-for="input-2">
                                    <b-form-input id="input-2" v-model="form.addr2" type="text" required placeholder="Address 2"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-3" label="Subdistrict:" label-for="input-3">
                                    <b-form-input id="input-3" v-model="form.subdistrict" type="text" required placeholder="Subdistrict"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-4" label="District:" label-for="input-4">
                                    <b-form-input id="input-4" v-model="form.district" type="text" required placeholder="District"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-5" label="Province:" label-for="input-5">
                                    <b-form-input id="input-5" v-model="form.province" type="text" required placeholder="Province"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-6" label="Country:" label-for="input-6">
                                    <b-form-input id="input-6" v-model="form.country" type="text" required placeholder="Country"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-7" label="Zipcode:" label-for="input-7">
                                    <b-form-input id="input-7" v-model="form.zipcode" type="text" required placeholder="Zipcode"></b-form-input>
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
    name: "CustomerUpdate",
    components: {
        SideBar
    },
    data() {
        return {
            form: {
                addr1: '',
                addr2: '',
                subdistrict: '',
                district: '',
                province: '',
                country: '',
                zipcode: '',
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

.seperateInfo {
    margin-bottom: 30px;
}

h6 {
    margin-left: 20px;
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