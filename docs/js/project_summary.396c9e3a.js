(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project_summary"],{"1ab0":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("html",[o("body",[o("div",{staticClass:"content",attrs:{align:"center"}},[o("img",{attrs:{src:t("f760"),width:"100"}}),o("h1",{staticStyle:{color:"black",margin:"0px"}},[e._v(e._s(e.$route.query.projName))]),o("router-link",{staticClass:"button",staticStyle:{"background-color":"#f2c94c",margin:"20px"},attrs:{to:{path:"/project_main",query:{userId:e.$route.query.userId,projName:e.$route.query.projName}},tag:"button"},nativeOn:{click:function(r){return e.send(r)}}},[e._v("join")]),o("div",{staticClass:"project_container"},[o("h2",{staticStyle:{"margin-bottom":"0px","margin-top":"0px"}},[e._v(" "+e._s(e.projInfo.song)+" ")]),o("p",{staticStyle:{color:"black","margin-top":"10px","margin-bottom":"10px"}},[e._v(" "+e._s(e.projInfo.parts)+" ")]),o("a",{staticClass:"tag"},[e._v(e._s(e.projInfo.level))])]),o("h3",{staticStyle:{margin:"20px"}},[e._v(" "+e._s(e.projInfo.blurb)+" ")]),o("h2",[e._v("Members")]),e._l(e.members_url,(function(r){return o("ul",{key:r.index,staticClass:"members_container"},[o("li",{staticClass:"member"},[o("router-link",{attrs:{to:{path:"/profile",query:{userId:e.$route.query.userId,profileId:r[0]}}}},[o("img",{attrs:{src:r[1],width:"70px"}})]),o("label",{staticStyle:{color:"black"},attrs:{for:"member"}},[e._v(e._s(r[0]))])],1)])})),o("br"),o("button",{staticClass:"backbutton",on:{click:e.toBack}},[e._v("Back")]),o("br"),o("br")],2),o("nav",{attrs:{id:"tabbar"}},[o("ul",{attrs:{id:"tab_wrap"}},[o("li",[o("router-link",{attrs:{to:{path:"/library",query:{userId:e.$route.query.userId}}}},[o("img",{attrs:{src:t("28ea"),width:"100px"}})])],1),o("li",[o("router-link",{attrs:{to:{path:"/projects_page",query:{userId:e.$route.query.userId}}}},[o("img",{attrs:{src:t("1b61"),width:"100px"}})])],1),e._m(0),o("li",[o("router-link",{attrs:{to:{path:"/profile",query:{userId:e.$route.query.userId,profileId:e.$route.query.userId}}}},[o("img",{attrs:{src:t("b31e"),width:"100px"}})])],1)])])])])},a=[function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("li",[o("img",{attrs:{src:t("fbc1"),width:"100px"}})])}],n=(t("b0c0"),t("dc59"),firebase.firestore().collection("projects")),s=firebase.firestore().collection("userinfo"),i={data:function(){return{projInfo:{team:"",song:"",parts:"",level:"",blurb:"",members:[],ongoing:!1},userinfo:{name:"",image_url:""},members_url:[]}},created:function(){var e=this,r=this.$route.query.projName;console.log(r),n.doc(r).get().then((function(r){if(r.exists){var t,o=r.data();for(e.projInfo=o,t=0;t<e.projInfo.members.length;t++)s.doc(e.projInfo.members[t]).get().then((function(r){if(r.exists){var t=r.data();e.userinfo=t,e.members_url.push([e.userinfo.name,e.userinfo.image_url,e.userinfo.best_num])}}))}else window.alert("ERROR: No such project exist!")}))["catch"]((function(e){console.log("Error retrieving project info: ",e)}))},methods:{send:function(){console.log("byebyebye");var e=this.$route.query.userId,r=this.$route.query.projName;n.doc(r).update({members:firebase.firestore.FieldValue.arrayUnion(e)})["catch"]((function(e){console.error("Error yee : ",e)})),s.doc(e).update({projs:firebase.firestore.FieldValue.arrayUnion(r)})["catch"]((function(e){console.error("Error yee : ",e)}))},toBack:function(){this.$router.go(-1)}}},c=i,u=t("2877"),f=Object(u["a"])(c,o,a,!1,null,null,null);r["default"]=f.exports},"1b61":function(e,r,t){e.exports=t.p+"img/search.4c11b867.png"},"28ea":function(e,r,t){e.exports=t.p+"img/home.796065fa.png"},b0c0:function(e,r,t){var o=t("83ab"),a=t("9bf2").f,n=Function.prototype,s=n.toString,i=/^\s*function ([^ (]*)/,c="name";o&&!(c in n)&&a(n,c,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(e){return""}}})},b31e:function(e,r,t){e.exports=t.p+"img/profile.1b4b8a61.png"},dc59:function(e,r,t){"use strict";t.d(r,"b",(function(){return i})),t.d(r,"a",(function(){return c}));var o=t("cc84"),a="firebase",n="8.1.1";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
o["a"].registerVersion(a,n,"app");t("2e66"),t("e71f");var s={apiKey:"AIzaSyD77qeEEgwUNEAj6XDaOLZGM8YJh29q2PA",authDomain:"fyeesh.firebaseapp.com",databaseURL:"https://fyeesh.firebaseio.com",projectId:"fyeesh",storageBucket:"fyeesh.appspot.com",messagingSenderId:"167708075968",appId:"1:167708075968:web:7b487c33ee10ec616fca25",measurementId:"G-LGEWZSYSGG"};o["a"].initializeApp(s);var i=o["a"].firestore(),c=o["a"].storage()},f760:function(e,r){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA9CAYAAADyFwT/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsxSURBVHgB7VsJdFTVGf4ymezEkLCEJYQEJBSRTQuWsoq4gMYSaI+UUwQpLcdajlJ72lK72U0ptUUWi7bUKhQ8UECCIFaggFQRISHhIBKkBBq2rJCQMMlMMn7/3Eny3uS9zEuYCXBOvnM+Mu+9+5b73/uv9wK0ox3t8CIENwc6kT3J4WSohfYHySO4xRFG9iHTyT+T/yNLSLdF/hIBhB1tC3nfIHIi+S0oQXTADUZbCcFG9iKnkz8mb4O1ad8maAshyNR/nPwR2RdGnY/iZOiWAsR3JbtRZDb99cpy4MNMBAttIQQRwG/I7k2uJKUBg8dSAMlAZAzFFWH8hPKSW1YI8uzZ5MtktO5KZ8pj5CNA6mD6pxvvoIIlBJnPM8nfw1cAqXcCEx6jOYyHZdQ4EEwESwii+8+RXXRne/D0AzPV1PcHRyWQlwUU5AHF5xBMBEMIEvTMJlN0Zzv3AB6aZU0AZZeAneuAwnzA5UKwcT1CkCkfRfaGMnrjoXz+FJI91ngBMXjDJwGxCf6f6nIC774OFBU01yrU+/46BACtEUK9z5fOjifvgdL7ONM7km5nWDQQlnAyy58ABI+S58mPyaPkdU2XlgpBrFkGOY8cSob7vUOsf/8RfJP/ph4UfG6l1RDyT1CC+CO5nixFK2FVCBLwjCYXkzKkkc23ZvNY5kRxnP4xnCCDRvGOaFhCp0Sa1UH6cxVlnB3sr1s3+0UVxQAvJfkCLCEP+zxN1KYjjFFFXpMfVpy0vEw6L0FPrGGLUMpy4FeAsdSQwV8FktOsj7xVSNR48H1g29+ZP35g1OIM+Q3yE+9xf/I75NdhPNjLyRflhz8hiADE13+/yYNkmvekrk+ibO6dBnRNQpvhzGfAqucZRW7Tnq0l15CLoLzTE/B10Xq8QP5UfjQnBElyRFJzodShEWLlZ/wAmDyb0/023BA4q+lG31LCuFzccJa8CGW4/aFBCGaZnMwAyfPnQCsAGf27xgPPr2XYS5cXHgErSIq0YUpnO5IiQnDymrvJ9TEdQ3FvvB2lTjfKa/XXeCumJ4ahZ4QNpx11aLhbVLDfUGU/DuyojyqlP3ovFcGuDKKK9r+bM+i49sp+cpf8MDOMoluz4TsD0jkpZjyrAh+LiAkNwbK0CDzSORQ1tGtPfubAmxcbPdrIOBsyh0Shoz0ExyvrMO5wFYqcjYJ6pX8kZnW3ezr/TF4NlhfU6F8wbBwdJlV/7WL9eclE73mQSvEzzgvaqBIGYHs3GX6jzeCc+P1f6wQgD5xCrzh/sbkAChnablgGvMpo+fPchtMJYSGYmBAKO2dRNAUyPl4v94k8FgEIvhRjQ+9Im+7eBzvZYeO9oWRGF4Mxs3HwZ7JEkaqJQ+xsN+937AWjzj6DzLNTEyGIH5PCh97KjWFs8sTPqQ4246dcyAcWTlUCEEE8fT+N1naPS7vscmNbcS1qOZSV/OftYn1cs7XEhYJqt2ekd5XVUl0a3aCoRybbyxk+BusLncbvD6MnSp+jfovKTqZNnPaU+ff6QCta0afJ5GPQ2grRuaeXNG8A31uj17dqut/VtDt3jEBFx8546kQ1Vp13opCdyqnQK/2Rijqk51She7gNn9AgXHHpbcazJ6uxsdBFW+FGVnkzUbLYKnuYshNzf4WWQCsECey/C9/iR69+/j1AoUGWV0wjXac+usRZh/dLzTsggjhikgZUsfM7Sy1ExXFdlMueTq8VHYuWQDtfJLgY3qTFB6zofLQDQUUN3d0xxjiX/u8bFRpCLMiTSeF4d2gUftI7HBFyIoJB7JivMaAejZZCOxPug1GIWctReIWGpx+rQInJCDw4/Y8yDzqfD5w+wdFMAQbQnUVGmd4xINqG5fQ4Nnb+gQQ7cq/WYnsR7cIoanOHuJZ+gG4mmJvQQo7Q6kWWRqnFKDhNw3pG/ZbnF3AJIvcjNTtM0IHexOYN8+RvfJhNebC+g9EaWDOfgvf+yfRkt/G1CIN8SpIom5/HX70C5Bxg530CqEtMpU/mNj3vxSEa11XnXbhAr7L+khPv1Hscm/XuaGGeRW69wLjRQhVIMJFedccaFcrWY/w0lUWawUl3d2gvjaeJ0TvDlLo76zUJXZtcqqNs5h6/hkBBKzr9XM/LhmUMZHz1izeUO+3J7PbxhcCsheZ+WqpHJ/j8isvmz6xlm3P5aAtoZ8J/yPlQiZNKW1tiaUdOVrQC6Vx+nv925aVKYPYwBBNaIXD+ewoNSghH9ytDFdI6PTNDQl01UqoYx/fq5r+xrExFhgSkHOzsEOapwxlB+/h8cg9U2MwjRoAnc4C0YQgkhsWG43sTR1prLCGwLTCDcIVFnjkm17RvkFmwmryqjvhny2sINDoyiQq3h1pjqA3hlEMgGNZMYdpXzMfITxuODtElFl9AIJESXPVuFXyFILXuV0m17lXK+H/TXwIWJMnLhkbhpoOvECTFextqRqhgJZMqce4UAoG+4aIOuOlgZHWkfs+igHdBw0FTsWRB8z7dAmgKkBHkcmS1o3UBlJnplcWMLQ1HR/ZRLVaYhrFWMJyR9ZctLj20Bi5GoIf2/ButgZkQRKQvkY11srU83P5Gq+wDq2uYwfw0KohbEaoqK/CvlS+h4JSFIMwHzTlhpnL4IVnpOZKUejkP33m9RYJg1ou58cH3CieyD+LUpznYtuY11NXWtuhef5HIHqjVJ2UfnKz0LmO1eeVzzaa69WCdFAs7s9YRE/wNKZtXLaO2sgq1cQ3ycg+36F5/QpDKpqxA/RbedTtPyWwj7cP8CUD2PkNhSI6fRk/wYmLwXWKty4W3VixiXUYtzTmuVeEPz8xG0QXrGzusOCyZ+7KDVGbDXahfjC0rBPaxjn/sgMov4jp5anu9Oe1nUv/nMYvuEuRtYWIHNv11CdYtfUF/vqIc2ft3o0dyH3RLTuUsDPEIZ/PflmqbNSy+tGSSypg+RDJH9gijUYBS+2caHZE6APf174O05GR0SezBSldHxMYnMAkMV20ios31Qrbn1NWqNqHG0nNTHa+VFTG5LMHZvOPYvWUday9Z1FJj1UxI7I4xkzIw+uGpXIoIw4KMcdrLltYizSA7U1jS9Sx4mpZ1I6Oj2ZdwCkAWTyiAaGaEGfPNK8GZK1lROst0/GHgzlHGbYoK4Nq8Ak6Oag3jl7o6nYEWayiLkrKHQrckHhMbx2+xo7ysRHva71pkc2BNzGMwqQeeuqR4/xjfZ4nfdlY7uARRxXirEo4rZXBQbRyJqXA4XU2ZvReOi2fhYMXZcfvdcDAkadLmSilqsnbBxee69TGLhPmroJbiy0jW3j0D5BlkmSkGgVSDOrQ2iBX7IJuyZW18K9SOczln8wpGvrDpnJaCraxjGG3fO/6xKqJUV6mgrEcfpUJaVJXTBn3YsJ4BVQOhdfZs0HjZeyyufScpOiK752NgXJHwuyBrFSLePC83Qu1cE3WhX4AoYP1OEa6M0qbIyrFsypo0R23jNUPuPtXRUY+a2gcooYvnepMs15wXj8ZCiMd2/YMcrPkWLeo3cwR0C5/UIU54KVjv/Sv6yYVMLPC8T0Y7k5npyHSuwI5Q64i+kHgke7fazis7Xzt1N3qf2ACp1ZebfI+oSI6X6w2umyxsBg+inxugPrzx/y3E3ObGkLFuTPimmx01/r8NISFu9L7DjbFT3RSIGzZ7/TXpZDpuMaRB6a2MgDsAvCWFIJBYQ6JPmcL+Oinq5UIbCKGtSxzSqf+SWVCJWf3CoW9wLUWdb0MZXJe3ncwg7VKXqNYGb5vrQpDTmmYhFjEFyl6kQx/gSOAvfl8EIP5U6vPiZe5HozGXa7Jb7bqF0I52tKMdWnwBGdV7CS+XPfEAAAAASUVORK5CYII="},fbc1:function(e,r,t){e.exports=t.p+"img/add.1e36be99.png"}}]);
//# sourceMappingURL=project_summary.396c9e3a.js.map