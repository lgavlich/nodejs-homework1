const contactOperations = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactOperations.listContacts();
      console.table(list);

      //console.log(contacts);
      break;

    case "get":
      contactOperations.getContactById(id);
      //console.log(contactById);
      break;
    case "add":
      // ... name email phone
      contactOperations.addContact(name, email, phone);
    //console.log(newContact);

    case "remove":
      // ... id
      contactOperations.removeContact(contactId);
      //console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
