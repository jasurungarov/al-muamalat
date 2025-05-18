/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import Lease from '../_components/lease'
import Partnership from '../_components/partnership'
import { Separator } from '@/components/ui/separator'
import Cost from '../_components/cost'
import ProfitSharing from '../_components/profit-sharing'
import ForwardSale from '../_components/forward-sale'
import Agency from '../_components/agency'

function Page() {
  const [activeTab, setActiveTab] = useState<'lease' | 'partnership' | 'cost' | 'profit-sharing' | 'forward-sale' | 'agensy' | null>('lease');

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto mt-10">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/image 2.png"
          alt="Responsive Image"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Sarlavha */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-10">
        Finibus Bonorum et Malorum
      </h1>

      {/* Tugmalar */}
      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-14 mt-8">
        {[
          { key: 'lease', label: 'LEASE' },
          { key: 'partnership', label: 'PARTNERSHIP' },
          { key: 'cost', label: 'COST-PLUS FINANCING' },
          { key: 'profit-sharing', label: 'PROFIT-SHARING' },
          { key: 'forward-sale', label: 'FORWARD SALE' },
          { key: 'agensy', label: 'AGENCY' },
        ].map(({ key, label }) => (
          <Button
            key={key}
            onClick={() => setActiveTab(key as any)}
            size="lg"
            variant={activeTab === key ? 'default' : 'outline'}
            className="text-sm sm:text-base"
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Ajratuvchi chiziq */}
      <Separator className="w-full font-bold mt-10" />

      {/* Kontent */}
      <div className="mt-8">
        {activeTab === 'lease' && <Lease />}
        {activeTab === 'partnership' && <Partnership />}
        {activeTab === 'cost' && <Cost />}
        {activeTab === 'profit-sharing' && <ProfitSharing />}
        {activeTab === 'forward-sale' && <ForwardSale />}
        {activeTab === 'agensy' && <Agency />}
      </div>
    </div>
  )
}

export default Page
