import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto mt-5 shadow-[0_0_12px_rgba(0,0,0,0.25)] rounded-md px-6 py-6">
      
      {/* Header: Image, Name, Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
        {/* Chap tomonda: Rasm + Ism */}
        <div className="flex items-center gap-4">
          <Image
            src="/alexa.png"
            alt="Alexa"
            width={70}
            height={70}
            className="rounded-full"
          />
          <h1 className="font-bold text-2xl sm:text-3xl">Alexa Rawles</h1>
        </div>

        {/* O'ng tomonda: Save Button */}
        <Button
          size="lg"
          className="text-white mt-4 sm:mt-0"
        >
          Save
        </Button>
      </div>

      {/* Form: responsive two-column */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chap form */}
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium ">
            First Name
          </label>
          <Input
            id="firstname"
            type="text"
            placeholder="Your First Name"
            className="mt-2 w-full"
          />

          <label htmlFor="address1" className="block mt-6 text-sm font-medium">
            Address
          </label>
          <Input
            id="address1"
            type="text"
            placeholder="Enter Your Address"
            className="mt-2 w-full"
          />
        </div>

        {/* O'ng form */}
        <div>
          <label htmlFor="lastname" className="block text-sm font-medium">
            Last Name
          </label>
          <Input
            id="lastname"
            type="text"
            placeholder="Your Last Name"
            className="mt-2 w-full"
          />

          <label htmlFor="birthday" className="block mt-6 text-sm font-medium">
            Birthday
          </label>
          <Input
            id="birthday"
            type="date"
            className="mt-2 w-full"
          />
        </div>
      </div>
    </div>
  );
}
