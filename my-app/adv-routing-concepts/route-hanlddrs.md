The ap router lets u create custom requedst handlers for your yout routes using a featiure called route handlers 

unlike page routes , which gives the HTM l conettn , Route handlrs let us buold restful endpoints with complete control over the response 


Thk of building a Node _ Express App. You csn fo all your CRUD operations with your databss 

There no nee do setu and oncfirgiure a separate serve
they are alkso greate whrn maming AExternal APi cals  


Route handlers run sever side , out senstitve info like private keys statys secure and never reachs yhe browser 

Route habndlers are the equivalent of API routes in Page Routes 


Ncrt js supprots GET, POST , PUT , PATCH , DFELETE , HEAD  and options 
if a unsupported method is called nect js will return a 4064 Method not allowed 

The converntion is to use a route.tsx file in the folder 


Exporrt functioin after http verbs 

yoou ca add folder adand subfolder just like opage folder s 


Rsolving conflicts bvetwern pager route and route habndlers 

so if a file ahs both page.tsc and route.tsx , then route,.tsx will taker the precentdence over the page.tscx file  
 


The trick is to move the route handler into api sub deirectory  

To tedst route handlers, you cvan use thumnderecleitn extensiuon 

We can create dynamic route handlers too usiong the same way page router 



Route handlers are not cached by default but you can opt into caching ewhen using the GET method 

 check the time folder
 



