import React from "react";

export class CurdHome extends React.Component {
  render() {
    return (
      <div className="curdhome">
        <h6>Installation Process</h6>
        <p> curd operations node js modules installation process<br/>

1.npm install express.<br/>
2.npm install body-parser.<br/>
3.npm install cors.<br/>
4.npm install axios.<br/>
5.npm install mongoose.<br/>
6.npm install morgan.<br/>

am used mongodb for database purpose<br/>

1.install mongodb.<br/>
2.after open cmd r bash shell.<br/>
3.whenever start the server type command mongod.<br/>
4.after that connect to the database type command mongo.<br/>
5.now show all the default databases in your db type command---show dbs.<br/>
6.you want to create your own db just type command---use db_name.<br/>
{/* 7.you want to create your table type command--db.table_name.insert({person_name:"rao",business_name:"IT",business_gst_number:"2255"}) */} 
8.you want to check your db type command---show collections.<br/>
9.you want check your one collection table type command---db.table_name.find().<br/>


my curd oprations practice purpose am used db---reactcurd<br/>

in my db am used table ---bussiness<br/>


in business table fields: 1.person_name,
                          2.business_name,
                          3.business_gst_number<br/>


application debugging process :<br/>

1.start mongodb----type command in terminal----mongod.<br/>
2.connect database type command----mongo (another terminal).<br/>
3.after that run node server---type command----node server (another terminal).<br/>
4.now u run react application by using ---npm start.<br/>
        </p>
      </div>
    )
 }
}



