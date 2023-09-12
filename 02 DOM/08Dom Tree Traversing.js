// let rootNode = document.getRootNode(); //document is rootnode
// console.log(rootNode);

// console.log(rootNode.childNodes);//NodeList [html]

// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);//full html element
// console.log(htmlElementNode.childNodes);//NodeList(3) [head, text, body]

// const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode)//Full Head

// const txtElementNode = htmlElementNode.childNodes[1];
// console.log(txtElementNode);

// const bodyElementNode = htmlElementNode.childNodes[2]
// console.log(bodyElementNode)//full body element

// console.log(bodyElementNode.childNodes);//all childnodes of bodyElement
// console.log(bodyElementNode.childNodes[1]);//further we can find the child nodes of each child node of html element (parent node)

// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling)

// console.log(txtElementNode.parentNode)
// console.log(txtElementNode.parentNode.parentNode)

// now select h2 and go to parent of h2 and change color
// const h2 = document.querySelector('h2');
// console.log(h2)
// console.log(h2.parentNode)
// h2.parentNode.style.color = "green"
// h2.parentNode.style.backgroundColor = "lightblue"

// querySelector can be used to search in the specific element node
// const body = document.querySelector("body");
// console.log(body);
// const p=body.querySelector("p");//will only search within the body.
// console.log(p);

// method to skip the \n and space method only meaning ful chile nodes
// const body = document.querySelector("body");
// console.log(body.children);

