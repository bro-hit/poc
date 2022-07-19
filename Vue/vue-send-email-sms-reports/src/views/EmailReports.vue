<template>
    <container id="emailReportsContainer">
        <div class="emailReportsContainerHeading">
            <h1> Send Email Reports</h1>
            <button @click="showModal()"><i class="fa fa-plus"> Add </i></button>
        </div>
        <div class="emailReports" v-for="emailReport in emailReports" :key='emailReport.id'>
            <p class="emailReportName">{{ emailReport.name }}</p>
            <div class="crudButtons">
                <button v-if="emailReport.deleted != true" @click="sendReport(emailReport.name)"
                    class="crudButton send"><i class="fa fa-paper-plane"></i></button>
                <button @click="showModal(emailReport)" class="crudButton edit"><i class="fa fa-edit"></i></button>
                <button @click="deleteReport(emailReport.id)" class="crudButton delete"><i
                        class="fa fa-trash"></i></button>
            </div>
        </div>

    </container>
    <div>


        <ModalTemplateVue v-show="isModalVisible" @close="closeModal" :emailReport="selectedData" />
    </div>

</template>

<script>

import axios from 'axios';
import config from '../config'
import ModalTemplateVue from '../components/ModalTemplate.vue';
export default {
    data() {
        return {
            isModalVisible: false,
            emailReports: null,
            baseUrl: config.config.emailReportsCrudUrl,
            selectedData: null,
        }
    },
    created() {
        axios
            .get(this.baseUrl, {
                headers: {
                    'Authorization': `Basic eFNncWg6R0tQZWpYRX1j`
                }
            })
            .then(response => {
                this.emailReports = response.data.data;
                console.log(response);
            })
    },
    methods: {
        showModal(emailReport) {
            this.selectedData = emailReport;
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        deleteReport(id) {
            let body = {
                "deleted":true
            }
            axios.put(config.config.emailReportsCrudUrl+'?id=' +id, body, {
                    headers: {
                        'Authorization': `Basic eFNncWg6R0tQZWpYRX1j`
                    }
                }
                ).then((res) => {
                    console.log('successffully fetched');
                    console.log(res);
                    this.close();
                    window.location.reload();
                    
                })
        },
        sendReport(name) {
            axios.post(config.config.sendEmailReports+'?name=' + name, {
                headers: {
                    'Authorization': `Basic eFNncWg6R0tQZWpYRX1j`
                }
            }
            ).then((res) => {
                console.log('successffully fetched');
                console.log(res);
            })
        }
    },
    components: {
        ModalTemplateVue
    }
}
</script>


<style lang="scss">
.emailReportsContainerHeading {
    display: flex;

    button {
        margin-left: auto;
    }
}

form {
    max-width: 100%;
}

button {
    cursor: pointer;
}

.emailReports {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid;
    padding: 0.5rem;
    position: relative;
    justify-content: space-evenly;
    display: flex;
    border-radius: 10px;
}

h2 {
    text-align: center;
}

button {
    margin-top: 0px;
}

#emailReportsContainer {
    border: 1px solid;
    position: fixed;
    padding: 2rem;
    width: 100%;
}

.crudButtons {

    margin-left: auto;
}

.crudButton {
    margin-left: 10px;
    border-radius: 26px;
}

.edit {
    background-color: orange;
}

.delete {
    background-color: red;
}

.send {
    background-color: green;
}

.emailReportName {
    margin-left: 7%;
}
</style>