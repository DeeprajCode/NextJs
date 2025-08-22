import Image from "next/image";
const page = () => {
    return (
        <>
            <div className="">
                <h1 className="ml-[30%]">Welcome to Customer page.</h1>
                <Image
                    src='/opengraph-image.png'
                    width={560}
                    height={620}
                    alt='Screenshots of the dashboard project showing mobile version'
                />
            </div>
        </>
    )
}
export default page;