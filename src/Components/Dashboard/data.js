import React from "react";
const columns = [
  { name: "Customers", uid: "name" },
  { name: "Order No.", uid: "role" },
  { name: "Amount", uid: "amount" },
  { name: "Status", uid: "status" }
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "1233444",
    team: "",
    status: "Delivered",
    age: "29",
    amount: '$120.30',
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "1233444",
    team: "",
    status: "cancelled",
    age: "25",
    amount: '$120.30',
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "1233444",
    team: "",
    status: "Delivered",
    age: "22",
    amount: '$120.30',
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "",
  },
  {
    id: 4,
    name: "William Howard",
    role: "1233444",
    team: "",
    status: "Pending",
    age: "28",
    amount: '$120.30',
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "",
  },
  {
    id: 5,
    name: "William Howard",
    role: "1233444",
    team: "",
    status: "Pending",
    age: "28",
    amount: '$120.30',
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "",
  },
];

export { columns, users };
