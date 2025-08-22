import Image from "next/image";

const page = () => {
    return (
        <>
            <div className="flex">
                <h1>Welcome to Invoice page.</h1>
                <Image
                    src='/hero-mobile.png'
                    width={560}
                    height={620}
                    alt='Screenshots of the dashboard project showing mobile version'
                />
            </div>
        </>
    )
}
export default page;