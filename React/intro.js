let h1 = React.createElement('h1',
    {id:"h1"},
    "Welcome to React JS")
let p = React.createElement('p',
    {id:"p"},
    "This is the paragraph")

let ele = document.getElementById('root');
let root = ReactDOM.createRoot(ele);
// root.render(h1)

let wrapper = React.createElement('div',{},[h1,p])
root.render(wrapper)
