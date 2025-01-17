import ImageURL from "../Image";
import SliderImage from "../Image/slider";
import ModalsV2 from "../List/modalsv2";

const datacertificate = [
    {
        id: '1',
        nama: 'TalentHub - Fullstack Web Development',
        src1: 'https://media.licdn.com/dms/image/v2/D5622AQHVQuftzfkzOA/feedshare-shrink_800/B56ZRFYYmtHQAg-/0/1736330810020?e=1740009600&v=beta&t=bAlisK0cTzG7vmF6Hhac8AX1D11HxHueQyafBQnSz3M',
        src2: 'https://media.licdn.com/dms/image/v2/D5622AQEZDFWmBql22A/feedshare-shrink_800/B56ZRFYYl5H0Ag-/0/1736330809691?e=1740009600&v=beta&t=PNwIvJwNYC4cfUchqjmHQrZQDZhL6hCINIdy4Mc0tzg',
    },

    {
        id: '2',
        nama: 'Dicoding - Pemula React',
        src1: 'https://media.licdn.com/dms/image/v2/D5622AQHVQuftzfkzOA/feedshare-shrink_800/B56ZRFYYmtHQAg-/0/1736330810020?e=1740009600&v=beta&t=bAlisK0cTzG7vmF6Hhac8AX1D11HxHueQyafBQnSz3M',
        src2: 'https://media.licdn.com/dms/image/v2/D5622AQEZDFWmBql22A/feedshare-shrink_800/B56ZRFYYl5H0Ag-/0/1736330809691?e=1740009600&v=beta&t=PNwIvJwNYC4cfUchqjmHQrZQDZhL6hCINIdy4Mc0tzg',
    },
];

const CertificateEle = () => {
    return (
        <div className="grid grid-cols-4 m-10 gap-4">
            {datacertificate.map((data, index) => (
                <div
                    key={index}
                    className="bg-gray-900 w-full rounded group shadow relative overflow-hidden"
                > 
                    <div className="p-2 items-center">
                        <small className="text-xs">{data.nama}</small>
                    </div>
                    <SliderImage sliderId={data.id} src1={data.src1} src2={data.src2} />
                    <div  className="p-2 text-center">
                    <ModalsV2
                    nama={data.nama}
                    
                    >
                        <ImageURL
                        src={data.src1}
                        className="mb-2 rounded"
                        />
                        <ImageURL
                        src={data.src2}
                        className="mb-2 rounded"
                        />
                    </ModalsV2>
                            

                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default CertificateEle;
