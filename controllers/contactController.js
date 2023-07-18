//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({
    message: "Get all contacts",
  });
};

//@desc Create all contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(201).json({
    message: "Create contact.",
  });
};

//@desc Update  contact
//@route GET /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({
    message: `Update contact for ${req.params.id}`,
  });
};

//@desc Delete  contact
//@route GET /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({
    message: `Delete  contact for ${req.params.id}`,
  });
};

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
