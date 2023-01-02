## This repository contains the learning in the first week of Namaste React course.

**1. What is Emmet**: It is basically an extension for popular text editors which greatly improves the HTML and CSS workflow.<br/>
**2. Difference between a Library and Framework** : This was one of the most intresting topic because I kept using framework and library interchangeably but firstly both
framework and library are code written by someone else that you are using to perform some common tasks.<BR/>

**Library** is nothing but a small piece of code which you integrate into your code for that particular functionality. Think of it as the furniture at IKEA😅. You have a full 
furnished home but you just want a table so, instead of making a new table from scratch you just go to you nearest IKEA store and buy the table assemble it and put it in
you home. You have all the control if you are using a library beacuse the table that you have purchased is coming in your home and not the other way round. <br/>

A **framework** on the other hand is basically like building a house all you have is a blueprint of how the house will look. The architect will take that blueprint and design
the house accordingly. Ultimately the guys designing the house are in charge and not you. They will let you know when and where you can provide your inputs. In 
techincal terms if you see the difference between a framework and a library comes down to just the term called as **inversion of control**. <br/>

In case of a library you are the one that is more in control because you are choosing when and where to call the library. In case of a framework that control is inverted 
i.e. the framework is in control and it will specify when and where your input is required or when and where you can plug-in the code.

**3. What is CDN and why do we use it?** 
CDN as the name suggest is content delivery network. It is basically servers that are dsitributed geographically which servers assets like HTML,CSS,Images and JS files 
to the client for faster delivery. So, the use of these CDNs is that the client need not hit the servers again and again for these static files because these are already present in the 
geographical location near them. So, the TAT i.e turn around time for the response to come is also less. These CDNs are also positioned near to the users geographical location.
<br/> The advantages of CDNs include:<br/>
**1. Faster load times for websites** : As the CDNs are distributed and located geographically near to the clients machine.The load time for website is less as the 
content is being served from the CDN instead of the main server.<br/>
**2. Increasing content availability and redundancy.**: Thanks to CDNs dsitributed nature it can handle multiple failures better than original servers.<br/>
**3. Improving website security**: It provides web security by preventing DDOS attacks.<br/>
**4. Reducing bandwidth cost.**: The data that is being transfered and the bandwidth that is getting consumed for them is one of the reasons for more cost for bandwidths.
But using a CDN can minimise these because it utlizes caching and optimizations.<br/>

**How does CDN work:**
The CDN in order to provide data reliably,faster and with enhanced security has it's servers distributed across the globe.So, these servers are located between the internet
exchange points(IXPs). These IXPs are primary location where ISPs connect in order to check the traffic originating from different network.<br/>
![image](https://user-images.githubusercontent.com/68496657/209698127-c5f503ee-f8d4-4ed9-9df8-f85565fc3d51.png)

**Why is React known as React?** 
The answer to this question can be found out here from this issue: https://github.com/facebook/react/issues/14606 and also this blogpost: https://reactjs.org/blog/2016/09/28/our-first-50000-stars.html#fbolt-is-born
Here the creator of react says that: ![image](https://user-images.githubusercontent.com/68496657/209698356-cd9b94a7-27fe-445d-b0fd-34afc55aa789.png)

**What is crossorigin in script tag?**: 
Sometimes the request needs to fetch some details from a server from another domain.So, it's basically doing a CORS request i.e. **Cross Origin Resource Sharing**.
So, this request will basically fetch details from a server at different domain compared to the client's.So, it's basically up to us to allow CORS i.e. allow the website
to load the web pages from another domain.

**What is diference between React and ReactDOM**
React library is used to create views whereas ReactDOM is used to render the UI in the browser and also to interact with the DOM.

**What is difference between react.development.js and react.production.js files via CDN?** 
The files present in react.production.js are minified files i.e they are small in size in comparison to the files in react.development.js.So, it's much easier to catch 
erros in the development.js than in production.js. As production.js is minified it will throw complex error messages which will be hard to debug. But as it is minified
user will get better performance.

**What is async and defer?**
Async and defer are basically boolean attributes which are used to effectively fetch the external script. Usually it has 3 cases:<br/>
1. Without async and defer: So, in this what happens is when HTML parsing is done and it encounters the script tag so, the parsing is stopped and the script files
are fetched and executed only then the parsing resumes. This results in incomplete DOM and sometimes the webpage also loads slower.
2. With async: Here whenever parsing is done and as soon as it encounters the script tag it is fetched asynchronously and as soon as it is fetched it is executed.
So, the parsing waits till it's executed and is resumed after that. This is useful for fetching googleAPi etc.
3. With defer: This is by far the safest option here what happens is the HTML parsing is done parallely and when the script tag is encountered, it is fetched parallely 
and executed once the parsing is completed i.e. the DOM is completely loaded. So, this is useful if you have interdependent script tags.


