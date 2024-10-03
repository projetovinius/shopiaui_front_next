import Image from "next/image"

export default function Account(){
    return(
        <div>
            <div>
                <p>Email:</p>
                <p>Senha</p>
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
    )
}