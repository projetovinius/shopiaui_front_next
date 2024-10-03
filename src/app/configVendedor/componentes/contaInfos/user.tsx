import Image from "next/image"

export default function Account(){
    return(
        <div >
            <div className="w-[600px] flex flex-row items-center justify-start gap-[400px] ">
                <div>
                    <p>Email:</p>
                    <p>Senha:</p>
                </div>
                <div>
                    <div>
                    <Image
                    src='/user.png'
                    width={200}
                    height={200}
                    alt="user Image"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}