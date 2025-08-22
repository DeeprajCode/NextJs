import Image from "next/image";
const page = () => {
    return (
        <>
            <div className="ml-[400px]">
                <h1 className="text-red-500">Welcome to Dashboard!</h1>
            </div>
            <Image
                src='/hero-desktop.png'
                width={560}
                height={620}
                alt='Screenshots of the dashboard project showing mobile version'
            />
        </>
    )
}
export default page;