import { AtSymbolIcon, KeyIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Button } from './button';

const LoginForm = () => {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">Please Login to Continue.</h1>
        <div className="w-full">
          <div>
            <label 
              htmlFor="email"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              >
                Email
            </label>
            <div>
              <input 
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your emal address"
              required
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
          </div>
          <div>
            <label 
              htmlFor="password"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              >
                Password
              </label>
              <div className="relative">
                <input 
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Please enter password"
                  minLength={6}
                  required
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"  
                />
                <KeyIcon className="pointer-even-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
              </div>
          </div>
        </div>
        <Button className="mt-4 w-full">
          Login <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50"/>
        </Button>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form erros here */}
        </div>
      </div>
    </form>
  )
}
export default LoginForm;