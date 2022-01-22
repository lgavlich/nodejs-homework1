const argv = require("yargs").argv;
const contactOperations = require("./contacts");

// TODO: рефакторить
const invokeAction = ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactOperations.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contactById = await contactOperations.getContactById(id);
      console.log(contactById);
      break;
    case "add":
      // ... name email phone
      const newContact = await contactOperations.addContact(name, email, phone);
      console.log(newContact);

    case "remove":
      // ... id
      const removeContact = await contactOperations.removeContact(contactId);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
