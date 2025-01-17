const ContactEle = () => {
    const datacontact = [
        {
            nama: 'WhatsApp',
            link: 'https://wa.me/625694886349',
            class: 'ri-whatsapp-line text-white rounded bg-green-600 text-4xl'
        },
        {
            nama: 'Instagram',
            link: 'https://www.instagram.com/ramdneln/',
            class: 'ri-instagram-line text-white bg-instagram-pink rounded-xl text-4xl'
        },
        {
            nama: 'GitHub',
            link: 'https://github.com/Ramaaeln',
            class: 'ri-github-fill text-4xl'
        },
        {
            nama: 'Linkedin',
            link: 'https://www.linkedin.com/in/ramdneln/',
            class: 'ri-linkedin-line text-white text-4xl bg-blue-700 rounded'
        },
    ];

    return (
        <div className="justify-center gap-4 flex mt-72">
            {datacontact.map((data, index) => (
                <span
                    className="relative overflow-hidden cursor-pointer group 
                    hover:overflow-visible focus-visible:outline-none"
                    aria-describedby="tooltip-01"
                    key={index}
                >
                    <a href={data.link} target="_blank">
                        <i className={data.class}></i>
                    </a>
                    <span
                        role="tooltip"
                        id="tooltip-01"
                        className="invisible absolute top-full left-1/2 z-10 mt-2
                         w-fit -translate-x-1/2 rounded bg-slate-700 
                         p-2 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
                    >
                         {data.nama}
                    </span>
                </span>
            ))}
        </div>
    );
};

export default ContactEle;
