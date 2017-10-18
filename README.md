# pwa_agora_cc_merch

<h1>INITIALIZATION</h1>
So this is just the project boiler-plate and is our stating point. 
Once you push the project, run the command <kbd>npm install</kbd> in the project directory. That will install all the current project dependencies. Scan through and lets get coding.
<h2>SPECIFICATIONS</h2>
Most MEAN stack application are broken down into two major parts - the application API (Server side code, Express and node.js) and the applications frontend (PWA site). This is the easiest model as such is proposed to be followed.
API - this houses the applications server side code that interacts with the database. The API will provide the PWA site with services to help accomplish the required functionality
PWA site - this is the front-end webApp that users will interact with. To be built on PWA tech to increase user experience on the site.
<h2>General project file structure</h2>
<li>PWA site - holds the front-end site</li>
<li>Config folder - contains the app’s config files e.g the database connection file to mongoDB</li>
<li>Models folder - to hold the applications data-models. Basically, the db schemas and functions related to that model - data manipulation functions.</li>
<li>Routes folder - each model will have a corresponding routes file that holds that model’s http routes. These will basically be query URL that the PWA site will interact with to perform specific functionalities.</li>
<li>Public folder - will hold the production application once completed.</li>
<li>App.js - this is the application’s entry point - it will coordinate everything together</li>


<h2>DATABASE SCHEMA</h2>
<h3Product model</h3>
This model will hold information about the product being sold. Information to be held includes; name of product, 
description, 
details such as color, 
available stock, 
price, 
images of product and 
category product belongs to.
<h3>Category model</h3>
Holds information about a specific product category, info to  be held includes; 
name of category and description.
<h3>Order model</h3>
Will hold information about a particular product order, attributes include;
 status of order (shipped, process, cart etc), 
quantity purchased,
 product purchased, 
Pricing,
 delivery address, 
receiver details/contacts. 
Note: this schema is liable to change as project goes on. Suggestions and modifications are welcome


CAROUSAL DOCS
All carousal information can be found at https://www.npmjs.com/package/ngx-carousel
