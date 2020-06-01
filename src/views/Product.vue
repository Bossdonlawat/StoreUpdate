<template>
    <b-container fluid class="px-0">
        <SideBar />
        <div class="main">
            <b-container fluid>
                <b-jumbotron class="content">
                    <b-row>
                        <b-col>
                            <h2>Product</h2>
                        </b-col>
                        <b-col>
                                <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0 searchbox" placeholder="Search product"></b-input>
                        </b-col>
                        <b-col>
                            <b-button variant="primary">Search</b-button>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col class="underHeader">
                            <b-button to="/prodcutadd">Create New Product</b-button>
                        </b-col>
                        <b-col class="underHeader2">
                            <div>
                            <b-input-group size="sm" prepend="Sorting">
                                <b-form-input></b-form-input>

                                <template v-slot:append>
                                <b-dropdown text="Sorting by" variant="success" size="sm">
                                    <b-dropdown-item>Date</b-dropdown-item>
                                    <b-dropdown-item>...</b-dropdown-item>
                                </b-dropdown>
                                </template>
                            </b-input-group>
                            </div>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-table striped head-variant="dark" hover :items="items" class="top-20"></b-table>
                    </b-row>

                    <b-row class="justify-content-center">
                    <b-col>
                        <b-card img-src="https://placekitten.com/1000/500" img-alt="Card image" img-top>
                            <b-card-text>
                            Some quick example text to build on the card and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card img-src="https://placekitten.com/1000/500" img-alt="Card image" img-top>
                            <b-card-text>
                            Some quick example text to build on the card and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card img-src="https://placekitten.com/1000/500" img-alt="Card image" img-top>
                            <b-card-text>
                            Some quick example text to build on the card and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>

                </b-jumbotron>
                
            </b-container>
            
        </div>
    </b-container>
</template>

<script>
import SideBar from '../components/SideBar'

export default {
    name: "Inventory",
    components: {
        SideBar
    },
    data() {
        return {
            
        };
    }
};
</script>

<style scoped>



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

.underHeader {
    margin-left: 0px;
}

underHeader2 {
    margin-left: 1100px;
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