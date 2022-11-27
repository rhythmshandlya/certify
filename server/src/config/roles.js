const allRoles = {
  organization: ['addEvent'],
  admin: ['getUsers', 'manageUsers'],
  student: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
