<template>
    <b-container fluid class="px-0">
        <SideBar />
        <div class="main">
            <b-container fluid>
                <b-jumbotron class="content">
                    <b-row>
                        <h2>Product - Add</h2>
                    </b-row>
                    <b-row> <hr> </b-row>
                    <b-row>
                        <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                        </div>
                    </b-row>
                    <b-row> <hr> </b-row>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-row>
                            <h5>Name</h5>
                        </b-row>
                        <b-row>
                            <b-form-group id="input-group-1" label-for="input-1" class="full-form">
                                <b-form-input id="input-1" v-model="form.Name" type="text" required placeholder="Name"></b-form-input>
                            </b-form-group>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-2" label="Color:" label-for="input-2">
                                    <b-form-input id="input-5" v-model="form.Color" type="text" required placeholder="Color"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-3" label="Price:" label-for="input-3">
                                    <b-form-input id="input-6" v-model="form.Price" type="text" required placeholder="Price"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-4" label="Size:" label-for="input-4">
                                    <b-form-input id="input-9" v-model="form.Size" type="text" required placeholder="Size"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-5" label="Quantity:" label-for="input-5">
                                    <b-form-input id="input-10" v-model="form.Quantity" type="text" required placeholder="Quantity"></b-form-input>
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
                Name: '',
                Color: '',
                Price: '',
                Size: '',
                Quantity: '',
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

.main {
    margin-left: 380px;
    padding: 0px 10px;
}

.full-form {
    width:50%;
    margin-left: 15px;
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