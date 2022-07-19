<template>
    <!-- <h1>hello</h1> -->
    <container id="email-form-container" class="form-container">

        <form id="emailCss" @submit.prevent="handleSubmit">
            <h2>Send Email</h2>
            <label>from:</label>
            <input v-model="from" />

            <label>to:</label>
            <input v-model="to" />

            <label>subject:</label>
            <input v-model="subject" />

            <label>text:</label>
            <textarea v-model="text" placeholder="add multiple lines" cols="100"></textarea>
            <label>Attachments:</label>
            <div class="form-group">
                <input type="file" @change="uploadAttachments" multiple>
            </div>
            <label>Template:</label>
            <div class="form-group">
                <input type="file" @change="uploadTemplate" multiple>
            </div>
            <div class="submit">
                <button>Send Mail</button>
            </div>
        </form>

    </container>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            from: '',
            to: '',
            subject: '',
            text: '',
            attachment: null,
            template: null,
        }
    },
    methods: {
        uploadAttachments(event) {
            this.attachment = event.target.files
        },
        uploadTemplate(event) {
            console.log(event)
            this.template = event.target.files[0]
        },
        addSkill(e) {
            console.log(e);
            if (this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill);
                }
                this.tempSkill = '';
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => item != skill)
        },
        handleSubmit() {
            // const form = document.querySelector("form");
            // console.log(form);
            const formData = new FormData();
            console.log(this.files)
            if (this.attachment != null) {
                for (const i of Object.keys(this.attachment)) {
                    formData.append('attachment', this.attachment[i])
                }
            }

            if (this.template != null) {
                formData.append('template', this.template)
            }
            formData.append('from', this.from)
            formData.append('to', this.to)
            formData.append('subject', this.subject)
            formData.append('text', this.text)

            console.log(formData);
            axios.post('https://pisoauat.niyogin.in/gates/1.0/sweeps/generic/sendEmail', formData, {
                headers: {
                    'Authorization': `Basic eFNncWg6R0tQZWpYRX1j`,
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then((res) => {
                console.log('successffully fetched');
                console.log(res)
            })
        }
    }
}
</script>
<style>
@media (max-width:830px) {
    #emailCss {
        margin-top: 8%;
    }
}

@media (max-width:500px) {
    #emailCss {
        margin-top: 10%;
    }
}

@media (max-width: 443px) {
    .form-container {
        margin-left: 8%;
        margin-right: 8%;
    }
}

#email-form-container {
    height: 46rem;
}

.form-container {
    margin-top: 6%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#emailCss {
    padding: 20px;
    border: 1px solid;
    border-radius: 10px;
    border-color: black;
    max-width: 420px;
    background: white;
    text-align: left;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6m;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

h2 {
    text-align: center;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

textarea {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    position: relative;
    margin: 0 10px 0 0;
    top: 2px;
    width: 16px;
}

.pill {
    display: inline-block;
    cursor: pointer;
    color: rgb(66, 59, 59);
    border-radius: 20px;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: rgb(189, 179, 179);
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;

}

button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}
</style>