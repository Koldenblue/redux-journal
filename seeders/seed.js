let mongoose = require("mongoose");

let db = require("../models"); // requires the index.js file in models folder

// This code connects to local workout database
mongoose.connect("mongodb://localhost/redux-journal", {
  useNewUrlParser: true,
  useFindAndModify: false
});

function seeder() {
  let journalSeed = [{
    entries:
      [
        {
          journalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.',
          mood: 'Happy',
          date: new Date().setDate(new Date().getDate()),
        },
        {
          journalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.',
          mood: 'Sad',
          date: new Date().setDate(new Date().getDate() - 1),
        },
        {
          journalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.',
          mood: 'Frustrated',
          date: new Date().setDate(new Date().getDate() - 2),
        },
        {
          journalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.',
          mood: 'Embarrassed',
          date: new Date().setDate(new Date().getDate() - 3),
        },
        {
          journalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.',
          mood: 'Grumpy',
          date: new Date().setDate(new Date().getDate() - 4),
        },
        {
          journalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.',
          mood: 'Confused',
          date: new Date().setDate(new Date().getDate() - 5),
        },
        {
          journalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.',
          mood: 'Surprised',
          date: new Date().setDate(new Date().getDate() - 6),
        },
        {
          journalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.',
          mood: 'Anxious',
          date: new Date().setDate(new Date().getDate() - 7),
        },
        {
          journalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure nesciunt sit dolorum numquam excepturi, officiis facilis dolor velit deserunt adipisci veritatis ipsa at accusantium dicta repellat incidunt molestiae. Repellendus.',
          mood: 'Angry',
          date: new Date().setDate(new Date().getDate() - 8),
        }
    ]
  }]

  db.Journal.deleteMany({}).then(() => {
    db.Journal.collection.insertMany(journalSeed).then((data) => {
      console.log(data.result.n + ' records inserted')
      process.exit(0)
    }).catch((err) => {
      console.error(err);
      process.exit(1);
    })
  })
}

seeder();

