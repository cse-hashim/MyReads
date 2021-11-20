(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(34)},23:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),s=a.n(r),l=a(2),c=a(3),i=a(5),u=a(4),h=a(6),p=a(11),d="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var m={Accept:"application/json",Authorization:f},b=function(){return fetch("".concat(d,"/books"),{headers:m}).then(function(e){return e.json()}).then(function(e){return e.books})},k=function(e,t){return fetch("".concat(d,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)({},m,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},v=function(e,t){return fetch("".concat(d,"/search"),{method:"POST",signal:t,headers:Object(p.a)({},m,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},E=(a(23),a(37)),y=a(36),g=a(14),j=a.n(g),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e){a.props.book.shelf=e.target.value,a.props.updateHandler(a.props.book)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:this.props.book.shelf?this.props.book.shelf:"none",onChange:this.handleChange},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.book;return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url('".concat(e.imageLinks?e.imageLinks.smallThumbnail:null,"')")}}),o.a.createElement(N,{book:e,updateHandler:this.props.updateHandler})),o.a.createElement("div",{className:"book-title"},"".concat(e.title).concat(e.subtitle?": ".concat(e.subtitle):"")),o.a.createElement("div",{className:"book-authors"},e&&e.authors&&e.authors.join(", ")),o.a.createElement("div",{className:"rating-container"},o.a.createElement("span",null,o.a.createElement(j.a,{count:5,size:24,isHalf:!0,disabled:!0,edit:!1,value:e.averageRating?e.averageRating:0,emptyIcon:o.a.createElement("i",{className:"far fa-star"}),halfIcon:o.a.createElement("i",{className:"fa fa-star-half-alt"}),fullIcon:o.a.createElement("i",{className:"fa fa-star"}),activeColor:"#ffd700"})),o.a.createElement("span",null,"(",e.ratingsCount?e.ratingsCount:0,")")))}}]),t}(n.Component);function S(e){return o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},e.searchBooks&&e.searchBooks.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(O,{updateHandler:e.updateHandler,book:t}))})))}function B(e){var t=e.books,a=e.shelf,n=e.bookshelf_title;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},n),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t&&t.filter(function(e){return e.shelf===a}).map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(O,{updateHandler:e.updateHandler,book:t}))}))))}var C=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.isShelf?this.props.shelfNames.map(function(t){return o.a.createElement(B,{key:t.shelf,books:e.props.books,updateHandler:e.props.updateHandler,shelf:t.shelf,bookshelf_title:t.bookshelf_title})}):o.a.createElement(S,{books:this.props.books,searchBooks:this.props.searchBooks,updateHandler:this.props.updateHandler}))}}]),t}(n.Component),q=a(10),w=a.n(q),H=a(15),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:null,err:null},a.req=function(){return a.abort=new AbortController,a.signal=a.abort.signal,a.promise=new Promise(function(){var e=Object(H.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,v(a.props.query,a.signal).catch(function(e){console.log("canceled")});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log("canceled")}),a.promise.catch(function(e){console.log("canceled")}),a.promise.cancel=function(){return a.abort.abort()},a.promise.catch(function(e){console.log("canceled")})},a.handleSimilarities=function(e){var t=new Map,n=a.props.shelfBooks;if(e&&n){for(var o=0;o<e.length;o++){var r=e[o];t.set(r.id,r)}for(var s=0;s<n.length;s++){var l=n[s];t.has(l.id)&&t.set(l.id,l)}return Array.from(t.values())}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;console.log(this.props),this.props.query!==e.query&&(this.props.query?(this.promise&&this.promise.cancel(),this.req().then(function(e){e.hasOwnProperty("error")?(t.props.update([]),t.setState({err:e.error,data:null})):(t.promise=null,t.state.err&&t.setState({err:null}),e=t.handleSimilarities(e),t.props.update(e),console.log(e),t.setState(function(t){return{data:e}}))}).catch(function(e){console.log("canceled")}),console.log(this.props.query)):(this.setState({err:null,data:null}),this.props.update([])))}},{key:"render",value:function(){return o.a.createElement("div",{className:"search-books-results"},this.state.err?o.a.createElement("p",null,"Can't Find Requested Query ",o.a.createElement("strong",null,this.props.query),": "):this.state.data||this.props.query?!this.state.data&&this.props.query?o.a.createElement("p",null,"LOADING ..."):o.a.createElement("p",null,"search results of ",o.a.createElement("strong",null,this.props.query),": "):o.a.createElement("p",null,"Please Enter Your Search!"))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).searchBookUpdateHandler=function(e){a.setState(function(t){return{searchBooks:e}})},a.shelfBookUpdateHandler=function(e){k(e,e.shelf).then(function(){b().then(function(e){console.log(e),a.setState({shelfBooks:e})})})},a.state={shelfBooks:[],searchBooks:[],query:""},a.updateHandler=function(e){a.setState({query:e})},a.updateQuery=function(e){new Promise(function(e){e(1)}).then(function(){a.setState(function(){return{query:e}})}).then(function(){v(e).then(function(e){console.log(e),a.setState({searchBooks:e})})})},a.clearQuery=function(){a.updateQuery("")},a.updateSearchBooks=function(e){a.setState(function(t){return{searchBooks:e}})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b().then(function(t){e.setState({shelfBooks:t})})}},{key:"render",value:function(){var e=this,t=[{shelf:"currentlyReading",bookshelf_title:"Currently Reading"},{shelf:"wantToRead",bookshelf_title:"Want To Read"},{shelf:"read",bookshelf_title:"Read"}];return o.a.createElement("div",{className:"app"},o.a.createElement(E.a,{exact:!0,path:"/",render:function(a){var n=a.history;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(C,{shelfNames:t,isShelf:!0,books:e.state.shelfBooks,updateHandler:e.shelfBookUpdateHandler}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(y.a,{className:"link",onClick:function(){e.setState({query:"",searchBooks:[]}),n.push("/")},to:{pathname:"/search"}},"Add a book")))}}),o.a.createElement(E.a,{exact:!0,path:"/search",render:function(t){var a=t.history;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(y.a,{className:"close-search",to:{pathname:"/"},onClick:function(){a.push("/search")}},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:e.state.query,onChange:function(t){return e.updateHandler(t.target.value)}}))),o.a.createElement(R,{shelfBooks:e.state.shelfBooks,query:e.state.query,update:function(t){return e.updateSearchBooks(t)}}),o.a.createElement(C,{isShelf:!1,books:e.state.shelfBooks,searchBooks:e.state.searchBooks,updateHandler:e.shelfBookUpdateHandler})))}}))}}]),t}(o.a.Component),T=(a(32),a(38));s.a.render(o.a.createElement(T.a,null,o.a.createElement(A,null)),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.ef36b436.chunk.js.map