<template>
    <div class="modal-backdrop">
        <div class="modal">
            <!-- <header class="modal-header">
                <slot name="header">
                    
                </slot>
                
            </header> -->
            <button type="button" class="btn-close" @click="close">x</button>
            <section class="modal-body">
                <slot name="body">
                    <div v-if="emailReport != null">
                        <form id="emailCss" @submit.prevent="handleSubmit">
                            <h2></h2>
                            <input v-bind:value=emailReport.id name="id" type="hidden" />
                            <label>name:</label>
                            <input v-bind:value=emailReport.name name="name" />
                            <label>from:</label>
                            <input v-bind:value=emailReport.send_from name="from" />

                            <label>to:</label>
                            <input v-bind:value=emailReport.send_to name="to" />

                            <label>subject:</label>
                            <input v-bind:value=emailReport.subject name="subject" />

                            <label>query:</label>
                            <input v-bind:value=emailReport.query name="query" />
                            <label>template:</label>
                            <textarea v-bind:value=emailReport.template placeholder="add multiple lines" cols="100"
                                name="template"></textarea>
                            <label>visibility:</label>
                            <input type="checkbox" name="deleted" />
                            <div class="submit">
                                <button class="submitButton" id="submitButton">Update</button>
                            </div>
                        </form>
                    </div>
                    <div v-else>
                        <form id="emailCss" @submit.prevent="handleSubmit">
                            <h2></h2>
                            <input name="id" type="hidden" />
                            <label>name:</label>
                            <input name="name" />
                            <label>from:</label>
                            <input name="from" />

                            <label>to:</label>
                            <input name="to" />

                            <label>subject:</label>
                            <input name="subject" />

                            <label>query:</label>
                            <input name="query" />
                            <label>template:</label>
                            <textarea placeholder="add multiple lines" cols="100" name="template"></textarea>

                            <div class="submit">
                                <button class="submitButton" id="submitButton">Add</button>
                            </div>
                        </form>
                    </div>


                </slot>
            </section>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
import config from '../config'
export default {
    data() {
        return {
            name: '',
            from: '',
            to: '',
            subject: '',
            template: '',
            query: '',
            id: ''
        }
    },
    name: 'Modal',
    props: ["emailReport"],
    methods: {
        close() {
            this.$emit('close');
        },
        handleSubmit(submitEvent) {
            console.log(submitEvent)

            this.from = submitEvent.target.elements.from.value;
            this.subject = submitEvent.target.elements.subject.value;
            this.to = submitEvent.target.elements.to.value;
            this.template = submitEvent.target.elements.template.value;
            this.name = submitEvent.target.elements.name.value;
            this.id = submitEvent.target.elements.id.value;
            this.query = submitEvent.target.elements.query.value;
            let buttonValue = submitEvent.target.elements.submitButton.innerText;

            console.log(buttonValue);
            let body = {
                "subject": this.subject,
                "to": this.to,
                "from": this.from,
                "template": this.template,
                "query": this.query,
                "name": this.name
            };
            if (buttonValue == "Update") {
                if (submitEvent.target.elements.deleted.value == "on") {
                    body["deleted"] = false;
                }
                console.log(body);
                console.log(config)
                axios.put(config.config.emailReportsCrudUrl+'?id=' + this.id, body, {
                    headers: {
                        'Authorization': `Basic eFNncWg6R0tQZWpYRX1j`
                    }
                }
                ).then((res) => {
                    console.log('successffully fetched');
                    console.log(res);
                    this.close();
                    this.$forceUpdate();
                })
            }
            else {
                axios.post(config.config.emailReportsCrudUrl, body, {
                    headers: {
                        'Authorization': `Basic eFNncWg6R0tQZWpYRX1j`
                    }
                }
                ).then((res) => {
                    console.log('successffully fetched');
                    console.log(res);
                    this.close();
                })
            }
            console.log(body)
            // console.log(formData);


        }
    },
};
</script>
<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

#emailCss {
    width: 100%;
    max-width: 100%;
}

.modal {

    width: 80%;
    height: 60%;
    margin-top: 0%;
    margin-left: 10%;
    margin-right: 10%;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: relative;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
}
</style>