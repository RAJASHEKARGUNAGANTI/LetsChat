import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useCoversation'
import useGetConvesations from "../../hooks/useGetConversations"
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} =useConversation();
  const {conversations} = useGetConvesations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Search terms must be at leasr 3 characters long");
    }
    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }else toast.error("No such user found");
  }
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
    <input type="text" placeholder="Search" className="input input-bordered rounded-full"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
     />
<button type="submit" className="btn btn-circle bg-sky-500 text-white">
<IoSearchSharp className="h-6 w-6 outline-none"/>
</button>
    </form>
  )
}

export default SearchInput

// STARTER CODE
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//     <input type="text" placeholder="Search" className="input input-bordered rounded-full" />
// <button type="submit" className="btn btn-circle bg-sky-500 text-white">
// <IoSearchSharp className="h-6 w-6 outline-none"/>
// </button>
//     </form>
//   )
// }

// export default SearchInput