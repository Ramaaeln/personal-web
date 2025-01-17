const ListActivity = () =>{
    const datalist =[
        {
            tipe:'project',
            path:'M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122',
            activity:'Personal Website Project Created',
            date:'Jan 14 - 20, 2025',
            detail:'React + Vite & Tailwindcss'
        },
        {
            tipe:'project',
            path:'M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122',
            activity:'WaroEng.e dul project created BEST PROJECTS',
            date:'Dec 8 - 13, 2024',
            detail:'React + Vite, Tailwindcss, Express JS, Glitch, Vercel & Postgress(Supabase)'
        },
        {
            tipe:'course',
            path:'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
            activity:'Course TalentHub Batch 17 - Fullstack Web Development',
            date:'Dec 2 - 13, 2024',
            detail:'Mentor Ka Radhea & Asisten Mentor Kak Denny'
        },
    ]
    return(
        <>
        {datalist.map((data,index)=>(

        <li
        key={index} 
        role="article" 
        className="relative pl-6">
          <span 
          className="absolute left-0 z-10 flex items-center 
          justify-center w-8 h-8 -translate-x-1/2 
          rounded-full bg-slate-200 text-slate-700 
          ring-2 ring-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
              role="presentation"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={data.path}
              />
            </svg>
          </span>
          
          <div className="flex flex-col   flex-1  gap-0">
            <h4 className="text-sm float-left font-medium text-white">
              {" "}
              {data.activity}{" "}
            </h4>
            <p className="text-xs text-white">{data.date}</p>
            <p className="text-xs text-white">Detail : {data.detail}</p>
          </div>
        </li>

        ))}

        </>
    )
}
export default ListActivity;