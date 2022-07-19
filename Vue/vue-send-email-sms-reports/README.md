# navigation-menu

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build

```
## database connnection in soa
----------------------------------------------------
#### 1. Changing the connection
a) go to this location-> "helpers\assists\config.generic.js"
b) replace the var emailReports with
```
var emailReports = {
    connection: your_connection_name,
    username: your_user_name,
    password: your_password,
    dbName: your_db_name,
    port:your_port_id,
};
```
### 2. creating table in your_db
```
CREATE TABLE IF NOT EXISTS public.reports
(
    id SERIAL PRIMARY KEY not null ,
    name text unique NOT NULL,
    send_to text  NOT NULL,
    send_from character varying(255) NOT NULL,
    template text NOT NULL,
    query text NOT NULL,
    subject character varying(255) NOT NULL,
    deleted boolean NOT NULL DEFAULT false
)
```
### Api for curd operation for reports
-----------------------------------------------------------------
##### get all  curl
```
curl --location --request GET 'https://pisoauat.niyogin.in/gates/1.0/sweeps/generic/emailReportsCRUD' \
--header 'Authorization: Basic eFNncWg6R0tQZWpYRX1j'
```

##### update  curl
```
curl --location --request PUT 'https://pisoauat.niyogin.in/gates/1.0/sweeps/generic/emailReportsCRUD?id=10' \
--header 'Content-Type: application/json' \
--data-raw '{
    "subject":"hey there, rohit here this is account3!",
    "to":"rohit.sawant@niyogin.in",
    "from":"partnersupport@niyogin.in",
    "template":"<html>Hey there  rohit here <p>idfljkladjf<p><p>dhfhadkfa<p></html>",
    "query":"select * from account_ limit 1;",
    "name":"account6"
}'
```

### delete curl
```
curl --location --request PUT 'https://pisoauat.niyogin.in/gates/1.0/sweeps/generic/emailReportsCRUD?id=10' \
--header 'Authorization: Basic eFNncWg6R0tQZWpYRX1j' \
--header 'Content-Type: application/json' \
--data-raw '{
    "deleted":true
}'
```
### add curl
```
curl --location --request POST 'https://pisoauat.niyogin.in/gates/1.0/sweeps/generic/emailReportsCRUD' \
--header 'Authorization: Basic eFNncWg6R0tQZWpYRX1j' \
--header 'Content-Type: application/json' \
--data-raw '{
    "subject":"hey there, rohit here this is!",
    "to":"sawant.rohit510@niyogin.in",
    "from":"partnersupport@niyogin.in",
    "template":"<html>Hey there  rohit here <p>idfljkladjf<p><p>dhfhadkfa<p></html>",
    "query":"select * from accouont_ limit 1",
    "name":"account5"   
}'
```

## Sending email Api
```
curl --location --request POST 'https://pisoauat.niyogin.in/gates/1.0/sweeps/generic/sendEmailReports?name=account6' \
--header 'Authorization: Basic eFNncWg6R0tQZWpYRX1j'
```





