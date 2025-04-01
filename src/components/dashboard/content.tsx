"use client";
import { useJugometal } from "@/store/jugometal.store";
import { ContentWrapper } from "./content-wrapper";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default function Content() {
  const { screen } = useJugometal();

  console.log(screen)

  const data = [
    {
      id:'1',
      name:'Janko Wylde',
      email:'Janko@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'2',
      name:'Djdaja',
      email:'djdaja@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'3',
      name:'Kanye',
      email:'kye@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'1',
      name:'Janko Wylde',
      email:'Janko@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'2',
      name:'Djdaja',
      email:'djdaja@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'3',
      name:'Kanye',
      email:'kye@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'1',
      name:'Janko Wylde',
      email:'Janko@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'2',
      name:'Djdaja',
      email:'djdaja@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'3',
      name:'Kanye',
      email:'kye@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },{
      id:'1',
      name:'Janko Wylde',
      email:'Janko@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'2',
      name:'Djdaja',
      email:'djdaja@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'3',
      name:'Kanye',
      email:'kye@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    }
    ,{
      id:'1',
      name:'Janko Wylde',
      email:'Janko@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'2',
      name:'Djdaja',
      email:'djdaja@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    },
    {
      id:'3',
      name:'Kanye',
      email:'kye@example.com',
      status:'active',
      image:'',
      lastSeen:'hour ago'
    }
  ]

  return (
    <ContentWrapper>
      <DataTable data={data} columns={columns} />
    </ContentWrapper>
  );
}
