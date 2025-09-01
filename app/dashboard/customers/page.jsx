import CustomersTable from '@/app/ui/customers/table'
import { fetchCustomers } from '@/app/lib/data'
import { lusitana } from '@/app/ui/fonts'

export const metadata = {
    title : "Customer"
}

export default async function Page() {
    const customers = await fetchCustomers();
    return (
        <>
            <div className={`${lusitana.className} w-full`}>
                <div className='mt-5 flex w-full justify-center'>
                    <CustomersTable customers={customers} />
                </div>
            </div>
        </>
    )
}