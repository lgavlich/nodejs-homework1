const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const arr = hideBin(process.argv);
const { argv } = yargs(arr);
//const argv = require("yargs").argv;
const contactOperations = require("./contacts");

// TODO: рефакторить
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
