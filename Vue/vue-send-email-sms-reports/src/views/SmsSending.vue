<template>
<!-- <h1>hello</h1> -->
<container id="sms-form-container" class="form-container ">
  
     <form id="smsCss" @submit.prevent="handleSubmit">
       <h2>Send Sms</h2>
        <label>Template Id:</label>
        <input  v-model="templateId" required/>

        <label>message:</label>
        <input  v-model="message" required />
        
        <label>destination:</label>
        <input v-model="destination" required/>
        <div class="submit">
            <button>Send SMS</button>
        </div>
    </form> 
    
</container>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            templateId:'',
            message:'',
            destination:'',
        }
    },
    methods: {
        handleSubmit() {
            // const form = document.querySelector("form");
  
            axios.post('https://pisoauat.niyogin.in/gates/1.0/sweeps/generic/sendSms', { templateId: this.templateId,message:this.message,destination:this.destination }, {
                headers: {
                    'Authorization': `Basic eFNncWg6R0tQZWpYRX1j`
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

#sms-form-container{
    height:25rem;

}
.form-container{
    margin-top: 6%;
    height: 37rem;
   display: flex;
   justify-content: center;
   align-items: center;
}
form {
    max-width: 420px;
    background: white;
    text-align: left;
    border-radius: 10px;
}
#smsCss{
     padding: 20px;
    border:1px solid;
    border-radius: 10px;
    border-color: black;
    width:20rem;

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
h1{
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
textarea
{    display: block;
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