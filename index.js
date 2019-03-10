const wikipedia = require('./wikipedia/wikipedia')
const readline = require('readline-sync')


const start = async () => {
  const content = {
      searchTerm: readline.question('Type a Wikipedia search term : ')
  }
  
  try {
    await wikipedia(content)
  }
  catch (err) {
    console.log("Error waiting for content:\n\n ", err )
  }

  console.log(content)
}

start()