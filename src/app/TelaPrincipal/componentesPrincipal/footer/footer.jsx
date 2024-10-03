import Image from "next/image";
export default function ExibFooter() {
    return (
        <footer className="bg-[#233241] w-full h-[270px] p-10">
            <div>
                <div className="border-t-2 border-b-2 border-white h-full flex flex-col p-2 gap-5">
                    <div className="p-4"><p className="text-white font-bold">Suporte</p><p className="text-gray-400 flex flex-col items-start justify-start">ajuda-shopiaui@gmail.com<span>(86)94002-8922</span></p></div>
                    <div className="p-4 flex items-center justify-between flex-row"><p className="text-gray-400 flex items-start justify-start">Formas de pagamento aceitas: cartões de American Express, cartões crédito (Visa, MasterCard, Elo) e de débito (Vise Elc), Boleto e Pix</p>
                    <Image
                    src='/logo.png'
                    width={100}
                    height={100}
                    alt="logo"
                    />
                    </div>
                </div>
            </div>
        </footer>
    );
}
