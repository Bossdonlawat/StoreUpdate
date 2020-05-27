<template>
    <b-container fluid class="px-0">
        <SideBar />
        <div class="main">
            <b-container fluid>
                <b-jumbotron class="content">
                    <b-row>
                        <b-col>
                            <h2>Inventory</h2>
                        </b-col>
                        <b-col>
                                <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0 searchbox" placeholder="Search product"></b-input>
                        </b-col>
                        <b-col>
                            <b-button variant="primary">Search</b-button>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-table striped head-variant="dark" hover :items="items" class="top-20"></b-table>
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
            fields: [
                { key: 'product', label: "product" },
                { key: 'remain', label: "remain" },
                { key: 'from', label: "from" },
                { key: 'stock_update', label: "stock_update" }
            ],
            items: [
            { product: 'AAAAA', remain: '2', from: 'Macdonald', stock_update: '-2' },
            { product: 'B', remain: '2', from: 'Shaw', stock_update: '-2' },
            { product: 'C', remain: '3', from: 'Wilson', stock_update: '-2' }
            ]
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