import Image from "next/image"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function SigninScreen() {
    return (
        <div className="overflow-hidden relative">
            <div className="w-screen h-screen relative z-10">
                <div className="!overflow-hidden gradient_background z-20"></div>
            </div>
            <div className="fixed top-0 w-screen h-screen z-30">
                <header className="w-full flex flex-row items-center justify-between px-16">
                    <ChevronLeftIcon className="text-2xl text-slate-800"/>
                    <Image src='/Logo.svg' width={200} height={100} alt=""/>
                </header>
                <div className="h-full w-full flex items-center justify-center">
                    <div className="bg-blue-light w-[500px] h-[400px] rounded-3xl flex flex-col px-20 p-6 items-center justify-center">
                            <div className="w-full h-full">
                                <label itemID="email_i " className="w-full text-sm">
                                    E-mail:
                                    <input
                                        id="email_i"
                                        placeholder="Digite seu e-mail..."
                                        className="w-full border-b-[1px] text-base border-slate-900 pt-2 bg-transparent"
                                    />
                                </label>
                                <label itemID="password_i " className="w-full text-sm">
                                    Senha:
                                    <input
                                        id="password_i"
                                        placeholder="Digite sua senha..."
                                        className="w-full border-b-[1px] text-base border-slate-900 pt-2 bg-transparent"
                                    />
                                </label>
                            </div>
                            <div className="w-full flex justify-center">
                                <button className="w-[90%] bg-blue-dark ">
                                    Entrar
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
