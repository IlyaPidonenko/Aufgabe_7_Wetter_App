
const { h } = require("virtual-dom");
const hh = require("hyperscript-helpers");
const { div, button, h1, input, table, tr, td, th } = hh(h);
const { MSGS } = require("./Update");
const { initModel } = require("./Model");





// A combination of Tailwind classes which represent a (more or less nice) button style
const btnStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

function view(dispatch, model) {
   
    
    return div({ className: "flex flex-col gap-4 items-center" }, [
        
      // counter
      h1({ className: "text-2xl" }, `Kalorienzähler`),
      
      div({className: "flex gap-4"}, [
        input({
          type: 'text',
          className: "border rounded py-2 px-3",
          value: model.inputValue,
          oninput: (event) => {
            model.inputValue = event.target.value;
            dispatch(MSGS.UPDATE_INPUT, event.target.value);
          },
        }),
        
        button({ className: btnStyle, onclick: () => dispatch(MSGS.UPDATE_LIST) }, "Hinzufügen"),
      ]),
      table({ className: "border-collapse border" }, [
        tr([
          th({ className: "border py-2 px-28" }, "Location"),
          th({ className: "border py-2 px-28" }, "Temp"),
          th({ className: "border py-2 px-28" }, "Low"),
          th({ className: "border py-2 px-28" }, "High"),
          th({ className: "border py-2 px-28" }, "Delete"),
        ]),
        ...model.rows.map(row => (
            tr([
              td({ className: "border py-2 px-28" }, row[0]), 
              td({ className: "border py-2 px-28" }, row[1]),
              td({ className: "border py-2 px-28" }, row[2]),
              td({ className: "border py-2 px-28" }, row[3]),
              td({ className: "border py-2 px-28" }, row[4]), 
            ])
          ))
      ]),
    ]);
  }

  module.exports = { view };
