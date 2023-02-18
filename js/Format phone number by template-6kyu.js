// Introduction
// You need to write a function that will format a phone number by a template.

// Task
// You're given number and string.

// If there are more digits than needed, they should be ignored

// if there are less digits than needed, should return Invalid phone number

// Examples
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
// (8123706890, "+## ### ### ##-##") => "Invalid phone number"
// (911, "###") => "911"
// (112, "+ () -") => "+ () -"

function formatNumber(number, template) {
  const arrNumber = String(number).split('')
  const arrTemplate = template.split('')
  if (arrNumber.length < arrTemplate.filter(e => e === '#').length) {
    return "Invalid phone number"
  }
  const formatNumber = arrTemplate.map(el => {
    if (el === "#") {
      return arrNumber.shift()
    }
    return el
  })
    
  return formatNumber.join('')
}

console.log(formatNumber(79052479075, "+# ### ### ## ##")) //"+7 905 247 90 75"
console.log(formatNumber(8123706890, "+## ### ### ##-##")) //"Invalid phone number"