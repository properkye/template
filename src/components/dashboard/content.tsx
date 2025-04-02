"use client";
import { useJugometal } from "@/store/jugometal.store";
import { ContentWrapper } from "./content-wrapper";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import AddProduct from "../product/add-product";


export default function Content() {
  const { screen } = useJugometal();

  console.log(screen);

  const traktori = [
    {
      id: "1",
      name: "Janko Wylde",
      email: "Janko@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "2",
      name: "Djdaja",
      email: "djdaja@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "3",
      name: "Kanye",
      email: "kye@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "1",
      name: "Janko Wylde",
      email: "Janko@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "2",
      name: "Djdaja",
      email: "djdaja@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "3",
      name: "Kanye",
      email: "kye@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "1",
      name: "Janko Wylde",
      email: "Janko@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "2",
      name: "Djdaja",
      email: "djdaja@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "3",
      name: "Kanye",
      email: "kye@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "1",
      name: "Janko Wylde",
      email: "Janko@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "2",
      name: "Djdaja",
      email: "djdaja@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "3",
      name: "Kanye",
      email: "kye@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "1",
      name: "Janko Wylde",
      email: "Janko@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "2",
      name: "Djdaja",
      email: "djdaja@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
    {
      id: "3",
      name: "Kanye",
      email: "kye@example.com",
      status: "active",
      image: "",
      lastSeen: "hour ago",
    },
  ];

  return (
    <ContentWrapper>
      {(screen.url === "traktori" ||
        screen.url === "prikljucne-masine" ||
        screen.url === "rezervni-delovi") && (
        <DataTable data={traktori} columns={columns} />
      )}

      {screen.url === 'nov-proizvod' && (
        <AddProduct />
      )}
    </ContentWrapper>
  );
}
