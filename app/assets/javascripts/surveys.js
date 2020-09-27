

// var surveyJSON = { title: "Tell us, what technologies do you use?", pages: [
//   { name:"page1", questions: [ 
//       { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Do you use any front-end framework like Bootstrap?" },
//       { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
//    ]},
//   { name: "page2", questions: [
//     { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
//     { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
//   { name: "page3",questions: [
//     { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
//  ]
// }

var application = Stimulus.Application.start()

application.register("survey", class extends Stimulus.Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element);
    var surveyJSON = this.data.get('form');
    var survey = new Survey.Model(surveyJSON, "surveyContainer");
  }
})
