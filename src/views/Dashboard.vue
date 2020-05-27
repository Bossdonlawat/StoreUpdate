<template>
    <b-container fluid class="px-0">
        <SideBar />
        <div class="main">
            <b-container fluid>
                <b-row>
                    <b-img src="https://placekitten.com/1500/300"></b-img>
                </b-row>
                <b-row class="justify-content-center header-txt">
                    <h1>LAST ORDERs</h1>
                </b-row>
                <b-row class="justify-content-center">
                    <hr class="black-divider">
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
            </b-container>
            
        </div>
    </b-container>
</template>

<script>
import SideBar from '../components/SideBar'

export default {
    name: "Dashboard",
    components: {
        SideBar
    },
    data() {
        return {};
    }
};
</script>

<style scoped>
.main {
    margin-left: 380px;
    padding: 0px 0px;
}

.black-divider {
border-top: 3px solid rgba(0,0,0,1);
width: 100px;
}

.header-txt {
    margin-top: 20px;
}
</style>