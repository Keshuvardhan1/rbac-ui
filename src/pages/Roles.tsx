import React, { useState } from "react";

interface Role {
  id: number;
  name: string;
  description: string;
}

const Roles = () => {
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: "Admin", description: "Has full access to the system" },
    { id: 2, name: "Editor", description: "Can edit content but not manage users" },
  ]);

  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [editForm, setEditForm] = useState({ name: "", description: "" });

  const handleEditClick = (role: Role) => {
    setEditingRole(role);
    setEditForm({ name: role.name, description: role.description });
  };

  const handleSaveEdit = () => {
    if (editingRole) {
      setRoles((prevRoles) =>
        prevRoles.map((role) =>
          role.id === editingRole.id ? { ...role, ...editForm } : role
        )
      );
      setEditingRole(null);
    }
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this role?");
    if (confirmDelete) {
      setRoles(roles.filter((role) => role.id !== id));
    }
  };

  return (
    <div>
      <h1>Roles</h1>

      {/* Edit Form */}
      {editingRole && (
        <div>
          <h3>Editing Role</h3>
          <label>
            Name:
            <input
              type="text"
              value={editForm.name}
              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              value={editForm.description}
              onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
            />
          </label>
          <br />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setEditingRole(null)}>Cancel</button>
        </div>
      )}

      {/* Role Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.description}</td>
              <td>
                <button onClick={() => handleEditClick(role)}>Edit</button>
                <button onClick={() => handleDelete(role.id)} style={{ marginLeft: "10px" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roles;
export {};