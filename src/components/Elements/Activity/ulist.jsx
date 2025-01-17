import ListActivity from "./list";

const Ulist = ()=>{
    return(
        <ul
        aria-label="Activity feed"
        role="feed"
        className="relative flex flex-col gap-12 py-12 pl-6 
        before:absolute before:top-0 before:left-6 
        before:h-full before:-translate-x-1/2 before:border 
        before:border-dashed before:border-slate-200 after:absolute 
        after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 
        after:border after:border-slate-200 "
      >
        <ListActivity/>
      </ul>
    )
}
export default Ulist;